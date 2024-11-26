import Songtable from "@/components/Album/Songtable";
import { convertToFarsi } from "@/lib/helper";
import { useMusicStore } from "@/stores/useMusicStore";
import { usePlayerStore } from "@/stores/usePlayerAudio";
import { Dot, PauseCircle, PlayCircle } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumPage() {
  const param = useParams();
  const { currentSong, isPlaying, playAlbum, togglePlay } = usePlayerStore();

  const { currentAlbum, fetchAlbumById } = useMusicStore();
  useEffect(() => {
    if (param.albumId) {
      fetchAlbumById(param.albumId);
    }
  }, [fetchAlbumById, param.albumId]);

  const handlePlay = (index: number) => {
    playAlbum(currentAlbum?.songs, index);
  };
  console.log("albumpage", currentAlbum);

  const handlePlayAlbum = () => {
    const iscurrentAlbum = currentAlbum?.songs.some(
      (song) => song._id === currentSong?._id
    );
    if (iscurrentAlbum) togglePlay();
    else {
      playAlbum(currentAlbum?.songs, 0);
    }
  };
  return (
    <section className="h-full w-full ">
      <div className="h-full w-full bggradiant rounded-lg p-8 flex-1">
        {/* top section */}
        <div className="flex items-start justify-between gap-y-2  gap-x-4   flex-wrap">
          <div className="mx-auto">
            <img
              src={currentAlbum?.imageUrl}
              className=" rounded-md"
              alt={currentAlbum?.title}
            />
          </div>
          <div className="flex flex-col gap-y-4 mx-auto">
            <p className="font-semibold text-xl text-right">آلبوم</p>
            <h2 className="text-2xl md:text-4xl ">{currentAlbum?.title}</h2>
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center text-sm">
                {currentAlbum?.artist}
                <span className="text-xl font-bold">
                  <Dot />
                </span>
              </p>
              <p className="flex items-center">
                <span>{convertToFarsi(currentAlbum?.songs.length)}</span>
                <span>آهنگ</span>
                <span className="text-xl font-bold">
                  <Dot />
                </span>
              </p>
              <p className="flex items-center">
                <span>{currentAlbum?.releaseYear}</span>
                <span className="text-xl font-bold">
                  <Dot />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* play btn */}
        <div className="mb-2">
          <div
            onClick={handlePlayAlbum}
            className="w-8 h-8 rounded-full cursor-pointer hover:bg-green-500/75 bg-green-500 mt-6 flex items-center justify-center">
            {isPlaying ? (
              <PlayCircle className="w-4 h-4" />
            ) : (
              <PauseCircle className="w-4 h-4" />
            )}
          </div>
        </div>
        {/* bottom section */}
        <div className="">
          <Songtable handlePlay={handlePlay} songs={currentAlbum?.songs} />
        </div>
      </div>
    </section>
  );
}

export default AlbumPage;
