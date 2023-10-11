"use client";

import { CBTestTimer, QuestionCard } from "@/components/base-components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/redux-store/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

interface pageProps {}

const questions = [
  {
    _id: "1",
    correctOption: "C",
    examType: "JAMB",
    examYear: "2010",
    subject: "mathematics",
    image: "",
    options: { a: "6", b: "9", c: "12", d: "34", e: "16" },
    question:
      "The volume of a certain sphere is numerically equal to twice its surface area. The diameter of the sphere is:",
    solution:
      "Let’s solve this problem together! The volume of a sphere is given by the formula V=34​πr3\n where r is the radius of the sphere. The surface area of a sphere is given by the formula A=4πr2\nSince the volume of the sphere is numerically equal to twice its surface area, we can write the equation: 34​πr3=2(4πr2)\nSolving for r, we get r = 6. Since the diameter of a sphere is twice its radius, the diameter of this sphere is 12.",
  },
  {
    _id: "2",
    correctOption: "C",
    examType: "JAMB",
    examYear: "2010",
    subject: "mathematics",
    image: "",
    options: { a: "0.9", b: "1", c: "0.4", d: "0.49", e: "0.46" },
    question:
      "A bag contains 10 balls of which 3 are red 7 are white. Two balls are drawn at random. Find the probability of none of the balls is red if the draw is",
    solution:
      "Let’s solve this problem together! The volume of a sphere is given by the formula V=34​πr3\n where r is the radius of the sphere. The surface area of a sphere is given by the formula A=4πr2\nSince the volume of the sphere is numerically equal to twice its surface area, we can write the equation: 34​πr3=2(4πr2)\nSolving for r, we get r = 6. Since the diameter of a sphere is twice its radius, the diameter of this sphere is 12.",
  },
];

const CBtestPanelPage: FC<pageProps> = ({}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { selectedCBTestData } = useAppSelector((state) => state.cbTest);

  console.log(selectedCBTestData);

  const tabs = ["English", "Chemistry", "Physics", "Maths"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const questionsNo = Array.from(
    {
      length: Number(selectedCBTestData[0]?.numberOfQuestions),
    },
    (_, i) => i + 1
  );

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

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
    <main className="relative px-2 sm:px-8">
      <Tabs defaultValue={selectedCBTestData[0]?.subject.toUpperCase()}>
        <TabsList className="justify-between w-full px-1 my-8 overflow-x-scroll sm:px-4">
          {selectedCBTestData?.map((tab, index) => {
            return (
              <TabsTrigger key={index} value={tab.subject.toUpperCase()}>
                {tab.subject.toUpperCase()}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value={selectedCBTestData[0]?.subject.toUpperCase()}>
          <div className="">
            <CBTestTimer time={0.1} />
          </div>
          <h2 className="text-center">{`Question ${
            currentQuestionIndex + 1
          }/10`}</h2>

          <ul className="flex justify-center max-w-4xl mx-auto my-6">
            <li>
              <QuestionCard
                question={questions[currentQuestionIndex]}
                index={currentQuestionIndex}
                cbTest={true}
              />
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

      <div className="fixed flex justify-between -translate-x-28 left-1/2 gap-9 bottom-20 right-1/2 sm:-translate-x-0">
        <Button
          variant="secondary"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft />
        </Button>
        <Button variant="default">Submit</Button>
        <Button
          variant="secondary"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <ChevronRight />
        </Button>
      </div>
    </main>
  );
};

export default CBtestPanelPage;
