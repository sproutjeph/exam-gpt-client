import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface QuestionCardSkeletonProps {}

const QuestionCardSkeleton: FC<QuestionCardSkeletonProps> = ({}) => {
  return (
    <Skeleton className="w-full sm:w-[350px] md:w-[450px] border p-4 rounded-md flex flex-col items-center justify-center">
      <Skeleton className="h-4 w-32 bg-gray-700 mb-6" />
      <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
      <Skeleton className="h-4 w-full bg-gray-700 mb-4" />
      <Skeleton className="h-[2px] w-full bg-black mb-2" />
      <Skeleton className="h-3 w-1/2 bg-gray-700 mb-4" />
      <Skeleton className="h-3 w-1/2 bg-gray-700 mb-4" />
      <Skeleton className="h-3 w-1/2 bg-gray-700 mb-4" />

      <div className="flex justify-between w-full">
        <Skeleton className="h-8 w-16 bg-gray-700" />
        <Skeleton className="h-8 w-16 bg-gray-700 mb-2" />
      </div>
      <Skeleton className="h-[2px] w-full bg-black mb-2" />
    </Skeleton>
  );
};

export default QuestionCardSkeleton;
