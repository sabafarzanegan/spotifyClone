import { Song } from "@/lib/Types";
import { create } from "zustand";

interface playStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;
  initializeQueue: (songs: Song[]) => void;
  playAlbum: (songs: Song[] | undefined, startIndex?: number) => void;
  setCurrentsong: (song: Song | null) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<playStore>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: -1,
  initializeQueue: (songs) => {
    set({
      queue: songs,
      currentSong: get().currentSong || songs[0],
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
    });
  },
  playAlbum: (songs, startIndex = 0) => {
    if (songs.length === 0) return;
    const song = songs[startIndex];
    set({
      queue: songs,
      currentSong: song,
      currentIndex: startIndex,
      isPlaying: true,
    });
  },
  setCurrentsong: (song) => {
    const songIndex = get().queue.findIndex((s) => s._id === song?._id);
    set({
      currentSong: song,
      isPlaying: true,
      currentIndex: songIndex !== 0 ? songIndex : get().currentIndex,
    });
  },
  togglePlay: () => {
    const willIsPlaying = !get().isPlaying;
    set({
      isPlaying: willIsPlaying,
    });
  },
  playNext: () => {
    const { currentIndex, queue } = get();
    const nextIndex = currentIndex + 1;
    if (nextIndex < queue.length) {
      const nextSong = queue[nextIndex];
      set({
        currentSong: nextSong,
        currentIndex: nextIndex,
        isPlaying: true,
      });
    } else {
      set({
        isPlaying: false,
      });
    }
  },
  playPrevious: () => {
    const { currentIndex, queue } = get();
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      const prevSong = queue[prevIndex];
      set({
        currentSong: prevSong,
        currentIndex: prevIndex,
        isPlaying: true,
      });
    } else {
      set({
        isPlaying: false,
      });
    }
  },
}));
