import { Loader, Sidebar } from "@/components/base-components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { FC, Suspense } from "react";
import Navbar from "../(dashboard)/(routes)/dashboard/_components/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </section>
  );
};

export default DashboardLayout;
