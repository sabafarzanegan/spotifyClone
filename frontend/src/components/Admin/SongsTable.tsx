import { Song } from "@/lib/Types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Loader2, Trash } from "lucide-react";
import { useMusicStore } from "@/stores/useMusicStore";
import { Button } from "../ui/button";

function SongsTable({ data }: { data: Song[] }) {
  const { isLoading, deletSong } = useMusicStore();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>تصویر</TableHead>
          <TableHead>نام</TableHead>
          <TableHead>آلبوم</TableHead>
          <TableHead>انتشار</TableHead>
          <TableHead>حذف</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full ">
            <Loader2 className="animate-spin w-10 text-emerald-600 " />
          </div>
        ) : (
          data.map((song) => (
            <TableRow>
              <TableCell>
                <img src={song.imageUrl} className="w-8 h-8" />
              </TableCell>
              <TableCell>{song.title}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.createdAt.substring(0, 4)}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => {
                    deletSong(song._id);
                  }}>
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default SongsTable;
