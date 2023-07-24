"use client";
import { QuestionCard } from "@/components/base-components";
import { ArrowBigLeftDashIcon } from "lucide-react";
import { questionData } from "@/utils/data";
import { useRouter } from "next/navigation";
import { FC } from "react";

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

  console.log(examType, subject, examYear);

  const selectedQuestion = questionData.data.filter(
    (x) =>
      x.examType === examType ||
      (x.examYear == Number(examYear) && x.subject === subject?.toUpperCase())
  );

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

      <ul className="flex flex-col items-center justify-center my-4 gap-y-4">
        {selectedQuestion.map((question, i) =>
          question.questions.map((x, i) => (
            <QuestionCard key={question.id + i} question={x} index={i} />
          ))
        )}
      </ul>
    </main>
  );
};

export default QuestionsPage;
