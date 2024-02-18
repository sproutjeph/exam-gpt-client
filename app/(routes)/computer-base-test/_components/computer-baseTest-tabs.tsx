"use client";

import {
  CBTestSubjectCard,
  CBTestTimer,
  Loader,
} from "@/components/base-components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllSubjects } from "@/hooks/useAllSubjects";
import { Book, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface ComputerBaseTestTabsProps {}

const ComputerBaseTestTabs: FC<ComputerBaseTestTabsProps> = ({}) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("Subjects");
  const { subjects, isLoading } = useAllSubjects();
  console.log(subjects);

  const handleTabChange = (tabValue: string) => {
    setCurrentTab(tabValue);
  };
  return (
    <Tabs
      defaultValue={currentTab}
      className="max-w-4xl mx-auto"
      onChange={() => handleTabChange}
    >
      <TabsList className="justify-between w-full px-4">
        <TabsTrigger value="Subjects">Subjects</TabsTrigger>
        <TabsTrigger value="Options">Options</TabsTrigger>
      </TabsList>

      <TabsContent value="Subjects">
        <ul className="grid 3xl:grid-cols-3 lg:grid-cols-2 gap-x-2">
          {isLoading ? (
            <div className="flex items-center justify-center mt-2">
              <Loader />
            </div>
          ) : (
            subjects?.data.map((subject) => (
              <li key={subject._id}>
                <CBTestSubjectCard subject={subject} />
              </li>
            ))
          )}
        </ul>
        <div className="fixed z-50 translate-x-1 shadow-2xl left-1/3 sm:left-1/2 bottom-20 sm:bottom-4">
          <Button
            size="lg"
            onClick={() => {
              router.push("/cb-test-panel");
            }}
          >
            Start Test
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="Options">
        <div className="grid gap-4 mt-8 lg:grid-cols-2">
          <Card>
            <div
              className="flex justify-between mx-4 my-2 space-x-2 cursor-pointer"
              onClick={() => {}}
            >
              <label htmlFor="terms1" className="font-medium text-md ">
                Shuffle Questions
              </label>
              <Checkbox id="" className="w-6 h-6" />
            </div>
          </Card>
          <Card className="">
            <div
              className="flex justify-between mx-4 my-2 space-x-2 cursor-pointer"
              onClick={() => {}}
            >
              <label htmlFor="terms1" className="font-medium text-md ">
                Shuffle Options
              </label>
              <Checkbox id="" className="w-6 h-6" />
            </div>
          </Card>

          <Card className="">
            <div className="flex items-center m-4 space-x-2 ">
              <div className="flex items-center flex-1 space-x-2">
                <Book className="text-primary" />
                <p className="text-sm ">Exam Mode</p>
              </div>

              <div className="flex-1 pl-20">
                <Select onValueChange={() => {}} defaultValue="2010">
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Exam Year" />
                  </SelectTrigger>
                  <SelectContent className="overflow-scroll ">
                    <SelectGroup>
                      <SelectLabel>Exam Mode</SelectLabel>
                      <SelectItem value="2010">Practice</SelectItem>
                      <SelectItem value="2011">Mock</SelectItem>
                      <SelectItem value="2012">Study</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="">
            <div className="flex items-center m-4 space-x-2 ">
              <div className="flex items-center flex-1 space-x-2">
                <Clock className="text-primary" />
                <p className="text-sm ">Set Time</p>
              </div>

              <div className="flex-1 pl-20">
                <Select onValueChange={() => {}} defaultValue="2010">
                  <SelectTrigger className="">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="overflow-scroll ">
                    <SelectGroup>
                      <SelectLabel>Exam Mode</SelectLabel>
                      <SelectItem value="2010">1 hour</SelectItem>
                      <SelectItem value="2011">2 hours</SelectItem>
                      <SelectItem value="2012">3 hours</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
        <Button
          className="flex justify-center w-1/2 mx-auto my-8"
          variant="default"
          onClick={() => {
            router.push("/cb-test-panel");
          }}
        >
          Start
        </Button>
      </TabsContent>
    </Tabs>
  );
};

export default ComputerBaseTestTabs;
