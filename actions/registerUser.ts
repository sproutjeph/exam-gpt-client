"use server";
import { createActivationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/utils/user";
import { RegisterSchema } from "@/shemas";
import sendEmail from "@/utils/sendMail";
import { fileURLToPath } from "url";
import prisma from "@/lib/mongoDB";
import { dirname } from "path";
import bcrypt from "bcryptjs";
import { join } from "path";
import * as z from "zod";
import ejs from "ejs";

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

  const user = { name: name, email: email };

  const activationToken = createActivationToken(user);
  const activationCode = activationToken.activationCode;
  const data = { user: { name: user.name }, activationCode };
  console.log(activationCode);
  console.log(activationToken);
  console.log(data);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "../mails/activation-mail.ejs");

  try {
    await ejs.renderFile(filePath, data);

    await sendEmail({
      email: email,
      subject: "Account Activation",
      template: "activation-mail.ejs",
      data,
    });
  } catch (error) {
    return { error: "Error sending email" };
  }

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      apiUseageCount: 0,
    },
  });

  return { success: "Comfirmation Email sent", token: activationToken.token };
}
