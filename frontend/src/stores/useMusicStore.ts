import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/lib/Types";
import { create } from "zustand";

interface musicStore {
  albums: Album[];
  songs: Song[];
  isLoading: boolean;
  error: string | null;
  currentAlbum: Album | null;
  madeForYouSongs: Song[];
  trendingSongs: Song[];
  featuredSongs: Song[];
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (id: string) => Promise<void>;
  fetchForYouSongs: () => Promise<void>;
  fetchTrendingSongs: () => Promise<void>;
  fetchFeaturedSongs: () => Promise<void>;
}

export const useMusicStore = create<musicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,
  madeForYouSongs: [],
  trendingSongs: [],
  featuredSongs: [],

  fetchAlbums: async () => {
    set({
      isLoading: true,
      error: null,
    });
    try {
      const res = await axiosInstance.get("albums");
      set({ albums: res.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchAlbumById: async (id: string) => {
    set({
      isLoading: true,
      error: null,
    });
    try {
      const res = await axiosInstance.get(`albums/${id}`);
      set({ currentAlbum: res.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchForYouSongs: async () => {
    set({ error: null, isLoading: true });
    try {
      const res = await axiosInstance.get("/songs/made-for-you");
      set({ madeForYouSongs: res.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchTrendingSongs: async () => {
    set({ error: null, isLoading: true });
    try {
      const res = await axiosInstance.get("/songs/trending");
      set({ trendingSongs: res.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchFeaturedSongs: async () => {
    set({ error: null, isLoading: true });
    try {
      const res = await axiosInstance.get("/songs/featured");
      set({ featuredSongs: res.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
