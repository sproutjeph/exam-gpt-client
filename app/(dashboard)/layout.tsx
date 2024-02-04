import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "../(dashboard)/(routes)/dashboard/_components/Navbar";
import { Sidebar } from "@/components/base-components";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  const permission = await getPermission("upload:question");
  const isAdmin = permission?.isGranted;
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar isAdmin={isAdmin} />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar isAdmin />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
