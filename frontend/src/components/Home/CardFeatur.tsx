import { Song } from "@/lib/Types";

import PlayButton from "../Album/PlayButton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface FeatureProp {
  songs: Song | undefined;
}

function CardFeatur({ songs }: FeatureProp) {
  return (
    <>
      <Card>
        <CardHeader>
          <img src={songs?.imageUrl} alt="" className="rounded-md h-full" />
        </CardHeader>
        <CardContent className="text-right">
          <div>
            <p className="text-sm md:text-base">{songs?.title}</p>
            <span className="text-zinc-500 text-sm md:text-base">
              {songs?.artist}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <PlayButton song={songs} />
        </CardFooter>
      </Card>
    </>
  );
}

export default CardFeatur;
