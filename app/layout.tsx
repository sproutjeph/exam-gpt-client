import { AppProviders } from "./AppProviders";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Exam-GPT",
  description: "The Best AI Tool to prepare for your O-level Exams",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
