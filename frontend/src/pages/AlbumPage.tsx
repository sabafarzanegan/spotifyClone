import Songtable from "@/components/Album/Songtable";
import { convertToFarsi } from "@/lib/helper";
import { useMusicStore } from "@/stores/useMusicStore";
import { usePlayerStore } from "@/stores/usePlayerAudio";
import { PauseCircle, PlayCircle } from "lucide-react";
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
    <section className="h-full ">
      <div className="h-full bggradiant rounded-lg p-8">
        {/* top section */}
        <div className="flex items-center justify-center md:justify-between  flex-wrap">
          <div>
            <img
              src={currentAlbum?.imageUrl}
              className="h-80"
              alt={currentAlbum?.title}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-right">آلبوم</p>
            <h2 className="text-3xl md:text-5xl ">{currentAlbum?.title}</h2>
            <div className="flex items-center justify-between gap-4">
              <p>{currentAlbum?.artist}</p>
              <span>
                <span>آهنگ</span>
                {convertToFarsi(currentAlbum?.songs.length)}
              </span>
              <span>{currentAlbum?.releaseYear}</span>
            </div>
          </div>
        </div>
        {/* play btn */}
        <div>
          <div
            onClick={handlePlayAlbum}
            className="w-16 h-16 rounded-full cursor-pointer hover:bg-green-500/75 bg-green-500 mt-6 flex items-center justify-center">
            {isPlaying ? <PlayCircle /> : <PauseCircle />}
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
