import { Song } from "@/lib/Types";

interface FeatureProp {
  songs: Song | undefined;
}

function CardFeatur({ songs }: FeatureProp) {
  return (
    <div className="flex items-center gap-x-2 bg-zinc-800 rounded-md overflow-hidden  cursor-pointer hover:bg-zinc-700">
      <div className="h-16">
        <img className="h-full " src={songs?.imageUrl} alt={songs?.title} />
      </div>
      <div>
        <p>{songs?.title}</p>
        <span className="text-zinc-500">{songs?.artist}</span>
      </div>
    </div>
  );
}

export default CardFeatur;
