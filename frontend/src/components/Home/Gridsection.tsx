import { Song } from "@/lib/Types";
import TrendingCard from "./TrendingCard";
import { Suspense } from "react";
import FeaturedSkeleton from "./FeaturedSkeleton";

interface GridProps {
  title: string;
  songs: Song[] | undefined;
}

function Gridsection({ title, songs }: GridProps) {
  return (
    <>
      <div>
        <h2 className="text-primary font-semibold text-lg text-right">
          {title}
        </h2>
      </div>

      <Suspense fallback={<FeaturedSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {songs?.map((song) => (
            <TrendingCard song={song} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default Gridsection;
