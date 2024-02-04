import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const LandingLayout: FC<layoutProps> = async ({ children }) => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <main className="h-full overflow-auto bg-black w-full">{children}</main>
  );
};

export default LandingLayout;
