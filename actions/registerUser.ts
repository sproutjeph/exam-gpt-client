"use server";
import { getUserByEmail } from "@/utils/user";
import { RegisterSchema } from "@/shemas";
import prisma from "@/lib/mongoDB";
import bcrypt from "bcryptjs";
import * as z from "zod";

const SALT = 10;

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, SALT);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      apiUseageCount: 0,
    },
  });

  return { success: "Comfirmation Email sent" };
}
