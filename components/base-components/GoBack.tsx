"use client";

import { ArrowBigLeftDashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface GoBackProps {}

const GoBack: FC<GoBackProps> = ({}) => {
  const router = useRouter();
  return (
    <div
      className="flex gap-2 pl-4 cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowBigLeftDashIcon />
      <span>Back to Exams</span>
    </div>
  );
};

export default GoBack;
