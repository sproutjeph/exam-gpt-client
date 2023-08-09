"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useSubject } from "@/hooks/useSubject";
import { exams } from "@/constants/constants";
import { ISubject } from "@/types/types";
import { useState } from "react";
import Link from "next/link";
import { Loader } from "@/components/base-components";
import { CircularProgress } from "@mui/material";

const ExamsPage = () => {
  const [currentExam, setCurrentExam] = useState("JAMB");
  const { subjects, isLoading, error } = useSubject(currentExam);

  return (
    <main className="p-8">
      <Tabs defaultValue={currentExam} className="max-w-4xl px-2 mx-auto">
        <TabsList className="justify-between w-full">
          {exams.map((exam) => (
            <TabsTrigger
              value={exam.examName}
              key={exam.id}
              onClick={() => {
                setCurrentExam(exam.examName.toUpperCase());
              }}
            >
              {exam.examName}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentExam.toUpperCase()}>
          <h4 className="my-4 text-lg text-center">{`${currentExam} PAST QUESTION`}</h4>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <CircularProgress style={{}} />
              </div>
            ) : (
              subjects?.data?.map((subject: ISubject) => (
                <Popover key={subject._id}>
                  <PopoverTrigger asChild>
                    <Button variant="default">{subject.name}</Button>
                  </PopoverTrigger>
                  <PopoverContent className=" w-80">
                    <h4 className="mb-2 text-center">{subject.name}</h4>
                    <div className="grid justify-center grid-cols-3 gap-2">
                      {subject?.examYears?.map((year: any) => (
                        <Link
                          key={year._id}
                          href={`/questions/?examType=${subject.exam}&subject=${subject.name}&examYear=${year.examYear}`}
                        >
                          <Button variant="main">{year.examYear}</Button>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ))
            )}
          </ul>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ExamsPage;
