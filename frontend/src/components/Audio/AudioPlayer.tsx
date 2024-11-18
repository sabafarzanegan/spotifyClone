import { usePlayerStore } from "@/stores/usePlayerAudio";
import { useEffect, useRef } from "react";

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongref = useRef<string | null>(null);
  const { currentSong, isPlaying, playNext } = usePlayerStore();
  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener("ended", handleEnded);
    return () => audio?.removeEventListener("ended", handleEnded);
  }, [playNext]);

  useEffect(() => {
    if (!currentSong || !audioRef.current) return;
    const audio = audioRef.current;

    const isSongChange = prevSongref.current !== currentSong?.audioUrl;
    if (isSongChange) {
      audio.src = currentSong?.audioUrl;
      audio.currentTime = 0;
      prevSongref.current = currentSong.audioUrl;
      if (isPlaying) audio.play();
    }
  }, [isPlaying, currentSong]);

  return <audio ref={audioRef} />;
}

export default AudioPlayer;
