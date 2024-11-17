import Songtable from "@/components/Album/Songtable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { convertToFarsi } from "@/lib/helper";
import { useMusicStore } from "@/stores/useMusicStore";
import { PlayCircle } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumPage() {
  const param = useParams();
  console.log(param);

  const { isLoading, currentAlbum, fetchAlbumById } = useMusicStore();
  useEffect(() => {
    if (param.albumId) {
      fetchAlbumById(param.albumId);
    }
  }, [fetchAlbumById, param.albumId]);
  console.log("albumpage", currentAlbum);
  return (
    <section className="h-full ">
      <div className="h-full bggradiant rounded-lg p-4">
        {/* top section */}
        <div className="flex items-center justify-between">
          <div>
            <img
              src={currentAlbum?.imageUrl}
              className="h-80"
              alt={currentAlbum?.title}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-right">آلبوم</p>
            <h2 className="text-6xl">{currentAlbum?.title}</h2>
            <div className="flex items-center justify-between">
              <p>{currentAlbum?.artist}</p>
              <span>
                <span>قطعه</span>
                {convertToFarsi(currentAlbum?.songs.length)}
              </span>
              <span>{currentAlbum?.releaseYear}</span>
            </div>
          </div>
        </div>
        {/* play btn */}
        <div>
          <div className="w-16 h-16 rounded-full cursor-pointer hover:bg-green-500/75 bg-green-500 mt-6 flex items-center justify-center">
            <PlayCircle />
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-4">
          <ScrollArea className="h-[calc(100vh-300px)]">
            <Songtable songs={currentAlbum?.songs} />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}

export default AlbumPage;
