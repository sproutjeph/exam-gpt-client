import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { ReactQueryProvider } from "@/providers/ReactQuery";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
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
      <ReactQueryProvider>
        <ReduxProviders>
          <body className={inter.className}>
            <AuthProvider>
              <ToasterProvider />
              <ModalProvider />
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
            </AuthProvider>
          </body>
        </ReduxProviders>
      </ReactQueryProvider>
    </html>
  );
}
