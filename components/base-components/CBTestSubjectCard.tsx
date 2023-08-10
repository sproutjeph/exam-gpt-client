"use client";

import { FC, useEffect, useState } from "react";
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
import { ISelectedData, ISubject } from "@/types/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux-store/hooks";
import { saveSelectedCBTestData } from "@/featuers/CBtest";

interface CBTestSubjectCardProps {
  subject: ISubject;
}

const CBTestSubjectCard: FC<CBTestSubjectCardProps> = ({ subject }) => {
  const dispatch = useAppDispatch();
  const [selectedData, setSelectedData] = useState<ISelectedData>({
    subject: subject.name,
    examYear: "",
    numberOfQuestions: "",
    isSelected: false,
  });

  useEffect(() => {
    if (
      selectedData.isSelected &&
      selectedData.examYear &&
      selectedData.subject &&
      selectedData.numberOfQuestions
    ) {
      dispatch(saveSelectedCBTestData(selectedData));
    }
  }, [selectedData, dispatch]);

  return (
    <Card className="flex flex-col p-4 mt-8 gap-y-6">
      <div className="flex space-x-2 cursor-pointer">
        <Checkbox
          id={subject._id}
          className={cn("w-6 h-6")}
          onClick={() => {
            setSelectedData({
              ...selectedData,
              isSelected: !selectedData.isSelected,
            });
          }}
        />
        <label htmlFor={subject._id} className="font-medium text-md ">
          {`${subject.name} ${subject.exam}`}
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center flex-1 space-x-2">
          <Calendar />
          <p className="text-sm ">Exam Year</p>
        </div>

        <div className="flex-1 pl-20 ">
          <Select
            onValueChange={(value) => {
              setSelectedData({
                ...selectedData,
                examYear: value,
              });
            }}
          >
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
          <Select
            onValueChange={(value) => {
              setSelectedData({
                ...selectedData,
                numberOfQuestions: value,
              });
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select Exam Year" />
            </SelectTrigger>
            <SelectContent className="overflow-scroll ">
              <SelectGroup>
                <SelectLabel> Number of Question </SelectLabel>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="40">40</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default CBTestSubjectCard;
