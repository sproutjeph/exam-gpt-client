"use client";
import { QuestionCard } from "@/components/base-components";
import { ArrowBigLeftDashIcon } from "lucide-react";
import { useQuestion } from "@/hooks/useQuestion";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { IQuestion } from "@/types/types";

interface pageProps {
  searchParams: {
    examType: string;
    subject: string;
    examYear: string;
  };
}

const QuestionsPage: FC<pageProps> = ({
  searchParams: { examType, examYear, subject },
}) => {
  const router = useRouter();

  // console.log(examType, subject, examYear);

  const { questions, isLoading } = useQuestion(examType, examYear, subject);

  // if (!isLoading) {
  //   console.log(questions);
  // }

  return (
    <main className="mt-8 overflow-scroll text-white bg-black">
      <div
        className="flex gap-2 pl-4 text-gray-400 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBigLeftDashIcon />
        <span>Back to Exams</span>
      </div>
      <h2 className="mt-4 text-lg text-center">{`  ${examYear} ${examType}  ${subject} Past Questions`}</h2>

      <ul className="grid justify-center my-4 xl:grid-cols-2 gap-y-4 xl:place-items-center">
        {!isLoading &&
          questions.data.map((question: IQuestion, i: number) => (
            <QuestionCard key={question._id} question={question} index={i} />
          ))}
      </ul>
    </main>
  );
};

export default QuestionsPage;
