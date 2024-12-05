import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedSkeleton from "./FeaturedSkeleton";
import CardFeatur from "./CardFeatur";
import { Suspense } from "react";

function Featuredsection() {
  const { error, featuredSongs } = useMusicStore();

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <h2 className="text-primary text-right mt-2 font-semibold text-lg">
        موزیک های برتر
      </h2>
      <Suspense fallback={<FeaturedSkeleton />}>
        <div className="flex flex-wrap  items-center justify-end mt-2 gap-2 ">
          {featuredSongs.map((song) => (
            <CardFeatur songs={song} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default Featuredsection;
