import { Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Song } from "@/lib/Types";
import { usePlayerStore } from "@/stores/usePlayerAudio";

function PlayButton({ song }: { song: Song | null | undefined }) {
  const { currentSong, isPlaying, setCurrentsong, togglePlay } =
    usePlayerStore();
  const isCurrentSong = currentSong?._id === song?._id;
  const handelPlay = () => {
    if (isCurrentSong) togglePlay();
    else setCurrentsong(song);
  };
  return (
    <Button onClick={handelPlay} className="h-full" variant="default">
      {isPlaying && isCurrentSong ? <Pause /> : <Play />}
    </Button>
  );
}

export default PlayButton;
