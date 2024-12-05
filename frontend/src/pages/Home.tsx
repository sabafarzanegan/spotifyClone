import { useMusicStore } from "@/stores/useMusicStore";
import Topbar from "../components/Headers/Topbar";
import { useEffect, useMemo } from "react";
import Featuredsection from "@/components/Home/Featuredsection";
import Gridsection from "@/components/Home/Gridsection";

import { usePlayerStore } from "@/stores/usePlayerAudio";

function Home() {
  const { initializeQueue } = usePlayerStore();
  const {
    madeForYouSongs,
    trendingSongs,
    featuredSongs,
    fetchTrendingSongs,
    fetchForYouSongs,
    fetchFeaturedSongs,
  } = useMusicStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [madeForYou, trending, featured] = await Promise.all([
          fetchForYouSongs(),
          fetchTrendingSongs(),
          fetchFeaturedSongs(),
        ]);

        const allSongs = [...featured, ...madeForYou, ...trending];
        initializeQueue(allSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchData();
  }, [
    fetchForYouSongs,
    fetchTrendingSongs,
    fetchFeaturedSongs,
    initializeQueue,
  ]);

  const allSongs = useMemo(() => {
    if (
      madeForYouSongs.length &&
      featuredSongs.length &&
      trendingSongs.length
    ) {
      return [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
    }
    return [];
  }, [madeForYouSongs, featuredSongs, trendingSongs]);

  useEffect(() => {
    if (allSongs.length) {
      initializeQueue(allSongs);
    }
  }, [allSongs, initializeQueue]);

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
