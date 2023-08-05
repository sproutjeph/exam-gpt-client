"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

interface pageProps {}

const CBtestPanelPage: FC<pageProps> = ({}) => {
  const tabs = ["English", "Chemistry", "Physics", "Maths"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const questionsNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

          <h2 className="text-center text-white">Attempted 1/10</h2>
          <ul className="container grid grid-cols-5 gap-y-1 w-80">
            {questionsNo.map((item, index) => (
              <li key={index} className="">
                <Card className="w-[45px] h-[45px] p-2 text-center">
                  {item}
                </Card>
              </li>
            ))}
          </ul>
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
