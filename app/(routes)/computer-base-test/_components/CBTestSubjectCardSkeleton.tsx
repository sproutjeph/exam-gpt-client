import { Skeleton } from "@/components/ui/skeleton";

const CBTestSubjectCardSkeleton = () => {
  return (
    <Skeleton className="w-full border p-4 rounded-md flex justify-between items-center">
      <div className=" flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 bg-gray-700" />
          <Skeleton className="h-3 w-12 bg-gray-700" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 bg-gray-700" />
          <Skeleton className="h-3 w-12 bg-gray-700" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 bg-gray-700" />
          <Skeleton className="h-3 w-12 bg-gray-700" />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mt-10">
        <Skeleton className="h-8 w-40 bg-gray-700" />
        <Skeleton className="h-8 w-40 bg-gray-700" />
      </div>
    </Skeleton>
  );
};

export default CBTestSubjectCardSkeleton;
