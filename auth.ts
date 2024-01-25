import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import prisma from "./lib/mongoDB";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {},
  events: {},
  callbacks: {
    // async signIn({ user, account }) {
    //   if (account?.provider !== "credentials") {
    //     return true;
    //   }
    // }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
