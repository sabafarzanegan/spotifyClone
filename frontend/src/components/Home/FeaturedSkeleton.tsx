import { Skeleton } from "../ui/skeleton";

function FeaturedSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedSkeleton;
