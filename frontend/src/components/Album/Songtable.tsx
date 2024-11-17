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
interface propsTable {
  songs: Song[] | undefined;
}
function Songtable({ songs }: propsTable) {
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
          {songs?.map((song, index) => (
            <TableRow>
              <TableCell>
                <PlayIcon className="size-3 cursor-pointer" />
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Songtable;
