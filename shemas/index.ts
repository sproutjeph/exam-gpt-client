import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const ActivationSchema = z.object({
  otp1: z.string().min(1, "First OTP Code").max(1),
  otp2: z.string().min(1, "2nd OTP Code").max(1),
  otp3: z.string().min(1, "3rd OTP Code").max(1),
  otp4: z.string().min(1, "4th OTP Code").max(1),
  otp5: z.string().min(1, "5th OTP Code").max(1),
  otp6: z.string().min(1, "6th OTP Code").max(1),
});
