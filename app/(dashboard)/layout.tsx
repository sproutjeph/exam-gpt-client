import {
  DashboardBottomNavbar,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense } from "react";
import Loading from "./(routes)/loading";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <DashboardBottomNavbar />
      </main>
    </section>
  );
};

export default DashboardLayout;
