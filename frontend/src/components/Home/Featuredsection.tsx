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
      <h2 className="text-right mt-2 font-semibold text-lg">موزیک های برتر</h2>
      <Suspense fallback={<FeaturedSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
          {featuredSongs.map((song) => (
            <CardFeatur songs={song} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default Featuredsection;
