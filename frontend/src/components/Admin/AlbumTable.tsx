import { Album } from "@/lib/Types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Button } from "../ui/button";
import { Loader2, Trash } from "lucide-react";

function AlbumTable({ data }: { data: Album[] }) {
  const { isLoading, deleteAlbum } = useMusicStore();

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
              <TableCell>{song.releaseYear}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    deleteAlbum(song._id);
                    console.log("delet album");
                  }}
                  variant="default">
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

export default AlbumTable;
