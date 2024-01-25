"use server";

import prisma from "@/lib/mongoDB";
import jwt, { Secret } from "jsonwebtoken";

export async function activateUser(
  activationToken: string,
  activationCode: string
) {
  const decodedToken = jwt.verify(
    activationToken,
    process.env.ACTIVATION_SECRET as Secret
  ) as { user: { email: string; password: string }; activationCode: string };

  const { user, activationCode: tokenActivationCode } = decodedToken;

  if (activationCode !== tokenActivationCode) {
    return { error: "Invalid activation code!" };
  }
  const { email } = user;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return { error: "User already exists!" };
  }

  return { user: {} };
}
