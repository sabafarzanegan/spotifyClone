import StatsContainer from "@/components/Admin/StatsContainer";
import TableContent from "@/components/Admin/TableContent";
import Topbar from "@/components/Headers/Topbar";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMusicStore } from "@/stores/useMusicStore";
import { Album, Music } from "lucide-react";
import { useEffect } from "react";

function Adminpage() {
  const { fetchStats, fetchSongs, fetchAlbums } = useMusicStore();
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

              <Button>Add</Button>
            </TabsList>
            <TabsContent value="songs">
              <TableContent title="songs" type="songs" />
            </TabsContent>
            <TabsContent value="Albums">
              <TableContent title="albums" type="albums" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Adminpage;
