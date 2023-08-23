import {
  DashboardBottomNavbar,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense } from "react";
import Loading from "./(routes)/loading";
import { getApiLimit } from "@/lib/api-limit";
import connectMongoDB from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  const { userId } = auth();

  await connectMongoDB();
  const apiUsageCount = await getApiLimit(userId as string);

  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar isPro={false} apiLimitCount={apiUsageCount} />
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
