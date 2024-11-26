import { Library } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import PlaylistSkeleton from "./PlaylistSkeleton";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";

function RightSide() {
  const { albums, fetchAlbums, isLoading } = useMusicStore();
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
  console.log(albums);

  return (
    <div
      className="h-full flex flex-col gap-y-2 
    ">
      <div className="flex-1 bg-zinc-800 rounded-lg p-4">
        {/* header */}
        <div className="">
          <div className="flex items-center justify-between">
            <Library className="hidden md:block" />
            <span>لیست</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          {isLoading ? (
            <PlaylistSkeleton />
          ) : (
            albums.map((album) => (
              <Link to={`/albums/${album._id}`} className="flex gap-x-6 mt-2">
                <div className="hidden md:block">
                  <img
                    src={album.imageUrl}
                    className="w-10 h-10 rounded-md overflow-hidden"
                  />
                </div>
                <div className="text-zinc-400">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {album.title}
                  </p>
                  <span className="text-xs">{album.artist}</span>
                </div>
              </Link>
            ))
          )}
        </ScrollArea>
      </div>
    </div>
  );
}

export default RightSide;
