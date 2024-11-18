import { Song } from "@/lib/Types";

function TrendingCard({ song }: { song: Song }) {
  return (
    <div className="cursor-pointer bg-zinc-800 p-2 rounded-md hover:scale-105 transition-all duration-200">
      <div>
        <img
          src={song.imageUrl}
          alt={song.title}
          className="h-32 mt-2 rounded-md "
        />
      </div>
      <div>
        <p>{song.title}</p>
        <span className="text-zinc-500">{song.artist}</span>
      </div>
    </div>
  );
}

export default TrendingCard;
