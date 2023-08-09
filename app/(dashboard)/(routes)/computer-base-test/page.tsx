"use client";

import { CBTestSubjectCard, Loader } from "@/components/base-components";
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
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

interface pageProps {}

const ComputerBaseTestPage: FC<pageProps> = ({}) => {
  const router = useRouter();
  const tabs = ["Subjects", "Options"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const { subjects, isLoading } = useAllSubjects();
  return (
    <main className="relative mx-10 mb-16 overflow-scroll">
      <h1 className="my-8 text-xl text-center">Test Your Knowledge</h1>

      <Tabs defaultValue={currentTab} className="max-w-4xl mx-auto">
        <TabsList className="justify-between w-full px-4">
          {tabs.map((tab, index) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="Subjects">
          <ul className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-x-2">
            {isLoading ? (
              <Loader />
            ) : (
              subjects?.data.map((subject) => (
                <li key={subject._id}>
                  <CBTestSubjectCard subject={subject} />
                </li>
              ))
            )}
          </ul>
          <div className="fixed shadow-lg right-1/2 bottom-4 left-1/2">
            {/* <Button className="" variant="default">
              Continue
            </Button> */}
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab
                variant="extended"
                style={{ backgroundColor: "#FFA200" }}
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Continue
              </Fab>
            </Box>
          </div>
        </TabsContent>

        <TabsContent value="Options" className="max-w-2xl mx-auto">
          <div className="grid gap-4 mt-8 lg:grid-cols-2">
            <Card className="">
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
                  <Book />
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
                  <Clock />
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
    </main>
  );
};

export default ComputerBaseTestPage;
