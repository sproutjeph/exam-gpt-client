"use client";

import { useQuestion } from "@/hooks/useQuestion";
import QuestionCard from "./QuestionCard";
import { IQuestion } from "@/types/types";
import { FC } from "react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";

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

      <ul className="flex flex-wrap gap-4 items-center justify-center h-full">
        {isLoading ? (
          <>
            <QuestionCardSkeleton />
            <QuestionCardSkeleton />
            <QuestionCardSkeleton />
            <QuestionCardSkeleton />
          </>
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
