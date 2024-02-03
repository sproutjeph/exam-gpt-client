import { AddminNavbar } from "@/components/base-components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = async ({ children }) => {
  const { getPermission } = getKindeServerSession();
  const isAdmin = await getPermission("upload:question");
  if (!isAdmin?.isGranted) {
    redirect("/dashboard");
  }
  return (
    <main className="">
      <AddminNavbar />
      <div className="py-8 ">{children}</div>
    </main>
  );
};

export default layout;
