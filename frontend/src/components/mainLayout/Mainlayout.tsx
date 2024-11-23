import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Outlet } from "react-router-dom";
import RightSide from "./RightSide";
import AudioPlayer from "../Audio/AudioPlayer";
import PlaybackControls from "../Album/PlaybackControls";

function Mainlayout() {
  return (
    <div className="h-screen flex flex-col">
      <AudioPlayer />
      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-1 overflow-hidden p-2">
        <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
          <RightSide />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        <ResizablePanel
          defaultSize={60}
          minSize={60}
          maxSize={80}
          className="px-2">
          <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
      </ResizablePanelGroup>
      <PlaybackControls />
    </div>
  );
}

export default Mainlayout;
