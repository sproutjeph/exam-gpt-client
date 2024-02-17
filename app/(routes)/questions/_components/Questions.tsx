"use client";

import { Loader } from "@/components/base-components";
import { useQuestion } from "@/hooks/useQuestion";
import QuestionCard from "./QuestionCard";
import { IQuestion } from "@/types/types";
import { FC } from "react";

interface QuestionProps {
  searchParams: { examType: string; subject: string; examYear: string };
}

const Questions: FC<QuestionProps> = ({
  searchParams: { examType, examYear, subject },
}) => {
  const { questions, isLoading } = useQuestion(
    String(examType),
    String(examYear),
    String(subject)
  );

  return (
    <div className="">
      <h2 className="mt-4 text-lg text-center mb-4">{`  ${examYear} ${examType}  ${subject} Past Questions`}</h2>

      <ul className="flex flex-wrap gap-4 items-center justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          questions?.data.map((question: IQuestion, i: number) => (
            <QuestionCard
              key={question._id}
              question={question}
              index={i}
              cbTest={false}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Questions;
