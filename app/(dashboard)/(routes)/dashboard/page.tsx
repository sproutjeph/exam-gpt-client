"use client";

import { routes } from "@/constants/constants";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux-store/hooks";

const DashboardPage = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  if (user === null) {
    router.push("/");
  }

  return (
    <section>
      <div className="my-8 space-y-4 ">
        <h2 className="text-xl font-bold text-center sm:text-2xl md:text-4xl">
          Solve O-Level Past Questions with AI
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
          Learn with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="grid items-center justify-center gap-4 px-4 space-y-4 sm:grid-cols-2 md:px-8 lg:px-32 2xl:grid-cols-3">
        {routes.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={cn(
              `flex items-center justify-between p-4 transition  cursor-pointer border-black/5 hover:shadow-md`
            )}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.color)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
