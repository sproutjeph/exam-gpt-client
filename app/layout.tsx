import { ClerkProvider, currentUser } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { ReactQueryProvider } from "@/providers/ReactQuery";
import { dark } from "@clerk/themes";
import { saveCurrentUSerToDB } from "@/lib/actions/user.action";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await currentUser();
  // const currentUserEmail = user?.emailAddresses?.[0]?.emailAddress || "";

  // await saveCurrentUSerToDB(currentUserEmail);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <ReactQueryProvider>
        <ReduxProviders>
          <html lang="en">
            <body className={inter.className}>
              <ToasterProvider />
              <ModalProvider />
              {children}
            </body>
          </html>
        </ReduxProviders>
      </ReactQueryProvider>
    </ClerkProvider>
  );
}
