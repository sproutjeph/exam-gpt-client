import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/base-components";
import Navbar from "./dashboard/_components/Navbar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  return (
    <section className="relative h-screen dark:bg-dark-1 bg-gray-50 flex overflow-y-hidden">
      <Sidebar isAdmin={false} apiUseageCount={0} isMobile={false} />
      <main className="pb-10 flex-1">
        <Navbar isAdmin apiUseageCount={0} />
        <ScrollArea className="h-[900px]">{children}</ScrollArea>
      </main>
    </section>
  );
};

export default DashboardLayout;
