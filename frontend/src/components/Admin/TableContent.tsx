import { useMusicStore } from "@/stores/useMusicStore";
import AlbumTable from "./AlbumTable";
import SongsTable from "./SongsTable";

interface TableProps {
  type: "songs" | "albums";
  title?: string;
}

function TableContent({ type }: TableProps) {
  const { songs, albums } = useMusicStore();

  return (
    <div>
      <nav className="flex items-center justify-between">
        <div>
          {type === "songs" ? <h2>لیست آهنگ ها</h2> : <h2>لیست البوم ها</h2>}
        </div>
        <div className="space-y-2">
          <img src="./images/logo.png" alt="" className=" h-6" />
          <span className="text-sm text-primary">MusicManager</span>
        </div>
      </nav>
      {type === "albums" && <AlbumTable data={albums} />}
      {type === "songs" && <SongsTable data={songs} />}
    </div>
  );
}

export default TableContent;
