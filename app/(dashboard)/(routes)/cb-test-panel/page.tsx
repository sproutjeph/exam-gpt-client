"use client";

import { QuestionCard } from "@/components/base-components";
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

  const question = {
    _id: "12",
    correctOption: "C",
    examType: "JAMB",
    examYear: "2010",
    subject: "mathematics",
    image: "",
    option: { a: "6", b: "9", c: "12", d: "34", e: "16" },
    question:
      "The volume of a certain sphere is numerically equal to twice its surface area. The diameter of the sphere is:",
    solution:
      "Let’s solve this problem together! The volume of a sphere is given by the formula V=34​πr3\n where r is the radius of the sphere. The surface area of a sphere is given by the formula A=4πr2\nSince the volume of the sphere is numerically equal to twice its surface area, we can write the equation: 34​πr3=2(4πr2)\nSolving for r, we get r = 6. Since the diameter of a sphere is twice its radius, the diameter of this sphere is 12.",
  };

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

          <ul className="flex justify-center max-w-4xl mx-auto my-6">
            <li>
              <QuestionCard question={question} index={0} cbTest={true} />
            </li>
          </ul>

          <h2 className="text-center text-white">Attempted 1/10</h2>
          <ul className="container flex flex-wrap gap-1 max-w-[350px]">
            {questionsNo.map((item, index) => (
              <li key={index} className="">
                <Card className="w-[40px] h-[40px] p-2 text-center">
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
