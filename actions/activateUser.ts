"use server";

import jwt, { Secret } from "jsonwebtoken";
import prisma from "@/lib/mongoDB";
import bcrypt from "bcryptjs";

const SALT = 10;

export async function activateUser(
  activationToken: string,
  activationCode: string
) {
  const newUser = jwt.verify(
    activationToken,
    process.env.ACTIVATION_SECRET as Secret
  ) as {
    user: { email: string; password: string; name: string };
    activationCode: string;
  };

  if (newUser.activationCode !== activationCode) {
    return { error: "Invalid activation code!" };
  }
  const { email, password, name } = newUser.user;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return { error: "User already exists!" };
  }

  const hashedPassword = await bcrypt.hash(password, SALT);

  const data = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      apiUseageCount: 0,
      isVerified: new Date(),
    },
  });

  return { user: data, success: "User created successfully" };
}
