import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import prisma from "./lib/mongoDB";
import { getAccountByUserId, getUserById } from "./utils/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signOut: "/",
  },
  events: {},
  callbacks: {
    // async signIn({ user, account }) {
    //   if (account?.provider !== "credentials") {
    //     return true;
    //   }
    // }

    async session({ session }) {
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
