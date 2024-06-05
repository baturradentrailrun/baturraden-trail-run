import React from "react";
import { Skeleton } from "../ui/skeleton";

const RoadmapSkeleton = () => {
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="flex  gap-3">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-16 w-[200px]" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-16 w-[200px]" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-16 w-[200px]" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default RoadmapSkeleton;
