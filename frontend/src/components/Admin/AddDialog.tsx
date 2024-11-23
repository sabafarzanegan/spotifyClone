import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus, Upload } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRef, useState } from "react";
import { useMusicStore } from "@/stores/useMusicStore";
interface NewSong {
  title: string;
  artist: string;
  album: string;
  duration: string;
}
function AddDialog() {
  const { albums } = useMusicStore();
  const [songDialogOpen, setSongDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [newSong, setNewSong] = useState<NewSong>({
    title: "",
    artist: "",
    album: "",
    duration: "0",
  });

  const [files, setFiles] = useState<{
    audio: File | null;
    image: File | null;
  }>({
    audio: null,
    image: null,
  });

  const audioInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      if (!files.audio || !files.image) {
        return toast.error("Please upload both audio and image files");
      }
      const formData = new FormData();
      formData.append("title", newSong.title);
      formData.append("artist", newSong.artist);
      formData.append("duration", newSong.duration);
      if (newSong.album && newSong.album !== "none") {
        formData.append("albumId", newSong.album);
      }

      formData.append("audioFile", files.audio);
      formData.append("imageFile", files.image);
      console.log(formData);

      await axiosInstance.post("/admin/songs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setNewSong({
        title: "",
        artist: "",
        album: "",
        duration: "0",
      });

      setFiles({
        audio: null,
        image: null,
      });
      toast.success("Song added successfully");
    } catch (error: any) {
      toast.error("Failed to add song: " + error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Dialog open={songDialogOpen} onOpenChange={setSongDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
            <Plus className="mr-2 h-4 w-4" />
            اضافه کردن آهنگ
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-zinc-900 border-zinc-700 max-h-[80vh] overflow-auto">
          <div className="space-y-4 py-4">
            <input
              type="file"
              accept="audio/*"
              ref={audioInputRef}
              hidden
              onChange={(e) =>
                setFiles((prev) => ({ ...prev, audio: e.target.files![0] }))
              }
            />

            <input
              type="file"
              ref={imageInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) =>
                setFiles((prev) => ({ ...prev, image: e.target.files![0] }))
              }
            />

            {/* image upload area */}
            <div
              className="flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer"
              onClick={() => imageInputRef.current?.click()}>
              <div className="text-center">
                {files.image ? (
                  <div className="space-y-2">
                    <div className="text-sm text-emerald-500">
                      عکس انتخاب شده
                    </div>
                    <div className="text-xs text-zinc-400">
                      {files.image.name.slice(0, 20)}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-zinc-800 rounded-full inline-block mb-2">
                      <Upload className="h-6 w-6 text-zinc-400" />
                    </div>
                    <div className="text-sm text-zinc-400 mb-2">
                      کاور راانتخاب کنید
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      انتخاب عکس
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Audio upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Audio File</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => audioInputRef.current?.click()}
                  className="w-full">
                  {files.audio ? files.audio.name.slice(0, 20) : "انتخاب فایل"}
                </Button>
              </div>
            </div>

            {/* other fields */}
            <div className="space-y-2 text-right">
              <label className="text-sm font-medium">نام</label>
              <Input
                value={newSong.title}
                onChange={(e) =>
                  setNewSong({ ...newSong, title: e.target.value })
                }
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div className="space-y-2 text-right">
              <label className="text-sm font-medium">هنرمند</label>
              <Input
                value={newSong.artist}
                onChange={(e) =>
                  setNewSong({ ...newSong, artist: e.target.value })
                }
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div className="space-y-2 text-right">
              <label className="text-sm font-medium">مدت زمان</label>
              <Input
                type="number"
                min="0"
                value={newSong.duration}
                onChange={(e) =>
                  setNewSong({ ...newSong, duration: e.target.value })
                }
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div className="space-y-2 text-right">
              <label className="text-sm font-medium">آلبوم</label>
              <Select
                value={newSong.album}
                onValueChange={(value) =>
                  setNewSong({ ...newSong, album: value })
                }>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Select album" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="none">سینگل ترک</SelectItem>
                  {albums.map((album) => (
                    <SelectItem key={album._id} value={album._id}>
                      {album.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSongDialogOpen(false)}
              disabled={isLoading}>
              لغو
            </Button>
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "درحال ارسال..." : "اضافه کردن"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddDialog;
