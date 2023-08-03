"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

interface pageProps {}

const CBtestPanelPage: FC<pageProps> = ({}) => {
  const tabs = ["English", "Chemistry", "Physics", "Maths"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <main className="relative px-8">
      <Tabs defaultValue={currentTab}>
        <TabsList className="justify-between w-full px-4 my-8">
          {tabs.map((tab, index) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="English">
          <h2 className="text-center text-white">Question 1/10</h2>
        </TabsContent>
      </Tabs>

      <div className="fixed flex justify-between gap-9 bottom-8 left-1/2 right-1/2">
        <Button variant="main">Submit</Button>
        <Button variant="secondary">
          <ChevronRight />
        </Button>
      </div>
    </main>
  );
};

export default CBtestPanelPage;
