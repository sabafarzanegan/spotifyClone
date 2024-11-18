import { useMusicStore } from "@/stores/useMusicStore";
import Topbar from "../components/Headers/Topbar";
import { useEffect } from "react";
import Featuredsection from "@/components/Home/Featuredsection";
import Gridsection from "@/components/Home/Gridsection";
import { ScrollArea } from "@/components/ui/scroll-area";

function Home() {
  const {
    madeForYouSongs,
    trendingSongs,
    fetchTrendingSongs,
    fetchForYouSongs,
    fetchFeaturedSongs,
  } = useMusicStore();
  useEffect(() => {
    fetchForYouSongs();
    fetchFeaturedSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchForYouSongs, fetchTrendingSongs]);

  return (
    <div className="h-full">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)] overflow-y-auto">
        <Featuredsection />
        <div className="space-y-6 mt-4 py-8">
          <Gridsection title="داغ ترین ها" songs={trendingSongs} />
          <Gridsection title="برای شما" songs={madeForYouSongs} />
        </div>
      </ScrollArea>
    </div>
  );
}

export default Home;
