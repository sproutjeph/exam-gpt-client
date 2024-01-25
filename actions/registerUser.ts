"use server";
import { createActivationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/utils/user";
import { RegisterSchema } from "@/shemas";
import sendEmail from "@/utils/sendMail";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import * as z from "zod";
import ejs from "ejs";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  const user = { name, email, password };

  const activationToken = createActivationToken(user);
  const activationCode = activationToken.activationCode;
  const data = { user: { name: user.name }, activationCode };

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

  return { success: "Comfirmation Email sent", token: activationToken.token };
}
