import { Navbar, Sidebar } from "@/components/base-components";
import { saveCurrentUSerToDB } from "@/lib/actions/user.action";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  // await saveCurrentUSerToDB();

  return (
    <section className="relative min-h-full bg-black">
      <div className="hidden h-full bg-gray-900 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar isPro={false} apiLimitCount={5} />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />

        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
