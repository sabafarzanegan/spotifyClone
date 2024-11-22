import { Song } from "@/lib/Types";

import PlayButton from "../Album/PlayButton";

function TrendingCard({ song }: { song: Song }) {
  return (
    <div className="cursor-pointer bg-zinc-800 p-4 rounded-md hover:scale-105 transition-all duration-200">
      <div>
        <img
          src={song.imageUrl}
          alt={song.title}
          className="h-32 w-full mb-4 rounded-md "
        />
      </div>
      <div className="flex items-center justify-between">
        <p>{song.title}</p>
        <span className="text-zinc-500">{song.artist}</span>
        <PlayButton song={song} />
      </div>
    </div>
  );
}

export default TrendingCard;
