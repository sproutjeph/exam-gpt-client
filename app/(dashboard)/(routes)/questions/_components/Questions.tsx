"use client";

import { Loader } from "@/components/base-components";
import { useQuestion } from "@/hooks/useQuestion";
import { useSearchParams } from "next/navigation";
import QuestionCard from "./QuestionCard";
import { IQuestion } from "@/types/types";

const Questions = () => {
  const params = useSearchParams();
  const examType = params.get("examType");
  const examYear = params.get("examYear");
  const subject = params.get("subject");

  console.log(examType, examYear, subject);

  const { questions, isLoading } = useQuestion(
    String(examType),
    String(examYear),
    String(subject)
  );

  return (
    <>
      <h2 className="mt-4 text-lg text-center">{`  ${examYear} ${examType}  ${subject} Past Questions`}</h2>

      <ul className="grid justify-center my-4 xl:grid-cols-2 gap-y-4 xl:place-items-center">
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
    </>
  );
};

export default Questions;
