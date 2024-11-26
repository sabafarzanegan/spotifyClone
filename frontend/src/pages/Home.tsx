import { useMusicStore } from "@/stores/useMusicStore";
import Topbar from "../components/Headers/Topbar";
import { useEffect } from "react";
import Featuredsection from "@/components/Home/Featuredsection";
import Gridsection from "@/components/Home/Gridsection";

import { usePlayerStore } from "@/stores/usePlayerAudio";

function Home() {
  const {
    madeForYouSongs,
    trendingSongs,
    featuredSongs,
    fetchTrendingSongs,
    fetchForYouSongs,
    fetchFeaturedSongs,
  } = useMusicStore();
  useEffect(() => {
    fetchForYouSongs();
    fetchFeaturedSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchForYouSongs, fetchTrendingSongs]);
  const { initializeQueue } = usePlayerStore();

  useEffect(() => {
    if (
      madeForYouSongs.length > 0 &&
      featuredSongs.length > 0 &&
      trendingSongs.length > 0
    ) {
      const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
      initializeQueue(allSongs);
    }
  }, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);

  return (
    <div className="h-full">
      <Topbar />

      <Featuredsection />
      <div className="space-y-6 mt-4 py-8">
        <Gridsection title="داغ ترین ها" songs={trendingSongs} />
        <Gridsection title="برای شما" songs={madeForYouSongs} />
      </div>
    </div>
  );
}

export default Home;
