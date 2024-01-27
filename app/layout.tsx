import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { ReactQueryProvider } from "@/providers/ReactQuery";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

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
      <ReactQueryProvider>
        <ReduxProviders>
          <body className={roboto.className}>
            <Toaster />
            <ModalProvider />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </ReduxProviders>
      </ReactQueryProvider>
    </html>
  );
}
