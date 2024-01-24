import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import db from "./lib/mongoDB";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {},
  events: {},
  callbacks: {},
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
