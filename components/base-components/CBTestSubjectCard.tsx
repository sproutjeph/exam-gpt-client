"use client";
import { FC, useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Calendar, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ISubject } from "@/types/types";
import { cn } from "@/lib/utils";

interface CBTestSubjectCardProps {
  subject: ISubject;
}

const CBTestSubjectCard: FC<CBTestSubjectCardProps> = ({ subject }) => {
  const [isSelected, setIselected] = useState(false);

  return (
    <Card className="flex flex-col p-4 mt-8 gap-y-6">
      <div
        className="flex space-x-2 cursor-pointer"
        onClick={() => setIselected(!isSelected)}
      >
        <Checkbox id="" className={cn("w-6 h-6")} />
        <label htmlFor="terms1" className="font-medium text-md ">
          {subject.name}
        </label>
        <span>{subject.exam}</span>
      </div>

      {isSelected && (
        <>
          <div className="flex items-center space-x-2">
            <div className="flex items-center flex-1 space-x-2">
              <Calendar />
              <p className="text-sm ">Exam Year</p>
            </div>

            <div className="flex-1 pl-20 ">
              <Select onValueChange={() => {}} defaultValue="2010">
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Exam Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Exam Years</SelectLabel>
                    {subject.examYears.map((examYear) => (
                      <SelectItem
                        key={examYear._id}
                        value={examYear.examYear.toString()}
                      >
                        {examYear.examYear}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center flex-1 space-x-2">
              <List />
              <p className="text-sm ">NO of Question</p>
            </div>

            <div className="flex-1 pl-20">
              <Select onValueChange={() => {}} defaultValue="10">
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Exam Year" />
                </SelectTrigger>
                <SelectContent className="overflow-scroll ">
                  <SelectGroup>
                    <SelectLabel> Number of Question </SelectLabel>
                    <SelectItem value="2010">10</SelectItem>
                    <SelectItem value="2011">20</SelectItem>
                    <SelectItem value="2012">40</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default CBTestSubjectCard;
