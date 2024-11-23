import { Song } from "@/lib/Types";

import PlayButton from "../Album/PlayButton";

interface FeatureProp {
  songs: Song | undefined;
}

function CardFeatur({ songs }: FeatureProp) {
  return (
    <>
      <div className="flex items-center justify-between gap-x-2 bg-zinc-800 rounded-md overflow-hidden  cursor-pointer hover:bg-zinc-700">
        <div className="h-16">
          <img className="h-full " src={songs?.imageUrl} alt={songs?.title} />
        </div>
        <div>
          <p className="text-sm md:text-base">{songs?.title}</p>
          <span className="text-zinc-500 text-sm md:text-base">
            {songs?.artist}
          </span>
        </div>
        <PlayButton song={songs} />
      </div>
    </>
  );
}

export default CardFeatur;
