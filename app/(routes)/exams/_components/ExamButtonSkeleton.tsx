import { Skeleton } from "@/components/ui/skeleton";

const ExamButtonSkeleton = () => {
  return (
    <Skeleton className="h-10 w-32 rounded-md flex items-center justify-center">
      <Skeleton className="h-2 w-16 bg-gray-950" />
    </Skeleton>
  );
};

export default ExamButtonSkeleton;
