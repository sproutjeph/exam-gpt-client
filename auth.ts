import { getAccountByUserId, getUserById } from "./utils/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import prisma from "./lib/mongoDB";
import NextAuth from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signOut: "/",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { isVerified: new Date() },
      });
    },
  },
  callbacks: {
    // Allow OAuth without email verification
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      return true;
    },

    async session({ session }) {
      // if (token.sub && session.user) {
      //   session.user.id = token.sub;
      // }

      // if (token.role && session.user) {
      //   session.user.role = token.role as UserRole;
      // }

      // if (session.user) {
      //   session.user.name = token.name;
      //   session.user.email = token.email;
      //   session.user.isOAuth = token.isOAuth as boolean;
      // }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }
      const exsitingUser = await getUserById(token.sub);
      if (!exsitingUser) {
        return token;
      }
      const existingAccount = await getAccountByUserId(exsitingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = exsitingUser.name;
      token.email = exsitingUser.email;
      token.role = exsitingUser.role;
      token.isTwoFactorEnabled = exsitingUser.isTwoFactorEnabled;

      return token;
    },
  },

  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
