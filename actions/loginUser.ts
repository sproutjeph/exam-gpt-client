"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/utils/user";
import { LoginSchema } from "@/shemas";
// import { signIn } from "@/auth";
import * as z from "zod";

export async function loginUser(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  try {
    // await signIn("credentials", {
    //   email,
    //   password,
    //   redirectTo: DEFAULT_LOGIN_REDIRECT,
    // });
  } catch (error) {
    throw error;
  }
}
