import AddDialog from "@/components/Admin/AddDialog";
import AddDialogAlbum from "@/components/Admin/AddDialogAlbum";
import StatsContainer from "@/components/Admin/StatsContainer";
import TableContent from "@/components/Admin/TableContent";
import Topbar from "@/components/Headers/Topbar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMusicStore } from "@/stores/useMusicStore";
import { Album, Music } from "lucide-react";
import { useEffect } from "react";

function Adminpage() {
  const { fetchStats, fetchSongs, fetchAlbums, songs } = useMusicStore();
  useEffect(() => {
    fetchStats();
    fetchSongs();
    fetchAlbums();
  }, [fetchAlbums, fetchSongs, fetchStats]);
  return (
    <>
      <div className="space-y-6 ">
        <Topbar />
        <div>
          <StatsContainer />
        </div>
        <div>
          <Tabs defaultValue="songs" className="px-4">
            <TabsList className="flex items-center justify-between h-14 ">
              <div>
                <TabsTrigger value="songs">
                  <p>آهنگ ها</p>
                  <span>
                    <Music className="w-4 h-4" />
                  </span>
                </TabsTrigger>

                <TabsTrigger value="Albums">
                  <p>آلبوم ها</p>
                  <span>
                    <Album className="w-4 h-4" />
                  </span>
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent value="songs">
              <AddDialog />
              <TableContent title="songs" type="songs" />
            </TabsContent>
            <TabsContent value="Albums">
              <AddDialogAlbum />
              <TableContent title="albums" type="albums" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Adminpage;
