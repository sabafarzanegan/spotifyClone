import { Outlet } from "react-router-dom";
import AudioPlayer from "../Audio/AudioPlayer";
import PlaybackControls from "../Album/PlaybackControls";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Separator } from "../ui/separator";

function Mainlayout() {
  return (
    <>
      <AudioPlayer />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <PlaybackControls />
    </>
  );
}

export default Mainlayout;
