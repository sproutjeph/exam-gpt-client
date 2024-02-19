import { routes } from "@/constants/constants";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DashboardCard from "./_components/DashboardCard";

const DashboardPage = () => {
  return (
    <main className="mx-4 my-4">
      <h1 className="text-2xl">👋 Hi Good Morning Jephthah!</h1>
      <p className="text-sm text-muted-foreground ml-8 mt-1 mb-8">
        Here's your summary for today
      </p>
      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <DashboardCard
          description="Qeustions solved"
          imageUrl="/exams.svg"
          value="10"
        />
        <DashboardCard
          description="Books Read"
          imageUrl="/study.svg"
          value="20"
        />
        <DashboardCard
          description="Free User"
          imageUrl="/study.svg"
          value="Sub"
        />
        <DashboardCard
          description="API calls"
          imageUrl="/study.svg"
          value="0"
        />
      </div>

      {/* <div className="my-8 space-y-4 ">
        <h2 className="text-xl font-bold text-center sm:text-2xl md:text-4xl px-1">
          Solve O-Level Past Questions with AI
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
          Learn with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-4 px-4 space-y-4 md:px-8 lg:px-32 2xl:grid-cols-3">
        {routes.map((tool) => (
          <Link href={tool.href} key={tool.href}>
            <Card
              className={cn(
                `flex items-center justify-between p-4 transition  cursor-pointer border-black/5 hover:shadow-md`
              )}
            >
              <div className="flex items-center gap-x-2">
                <div className={cn("p-2 w-fit rounded-md")}>
                  <tool.icon className={cn("w-8 h-8")} />
                </div>
                <div className="text-xs font-semibold sm:text-base">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="hidden w-5 h-5 sm:block" />
            </Card>
          </Link>
        ))}
      </div> */}
    </main>
  );
};

export default DashboardPage;
