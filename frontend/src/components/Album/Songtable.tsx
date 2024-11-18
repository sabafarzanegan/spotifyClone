import { Clock, PlayIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Song } from "@/lib/Types";
import { usePlayerStore } from "@/stores/usePlayerAudio";
interface propsTable {
  songs: Song[] | undefined;
  handlePlay: (index: number) => void;
}
function Songtable({ songs, handlePlay }: propsTable) {
  const { currentSong, isPlaying } = usePlayerStore();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>

            <TableHead>نام</TableHead>
            <TableHead>تاریخ انتشار</TableHead>
            <TableHead>
              <Clock className="size-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs?.map((song, index) => {
            const isplayingSong = currentSong?._id === song._id;
            return (
              <TableRow
                className="cursor-pointer"
                onClick={() => handlePlay(index)}>
                <TableCell>
                  {isplayingSong && isPlaying ? (
                    <PlayIcon className="size-3 cursor-pointer text-green-400" />
                  ) : (
                    index + 1
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={song.imageUrl}
                      alt={song.title}
                      className="h-8 w-8 rounded-md"
                    />
                    <span>{song.title}</span>
                  </div>
                </TableCell>
                <TableCell>{song.createdAt.substring(0, 10)}</TableCell>
                <TableCell>{song.duration}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Songtable;
