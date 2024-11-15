import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Outlet } from "react-router-dom";
import RightSide from "./RightSide";

function Mainlayout() {
  return (
    <div className="h-screen flex flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-1 overflow-hidden p-2">
        <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
          <RightSide />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        <ResizablePanel defaultSize={60} minSize={60} maxSize={80}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />

        <ResizablePanel
          defaultSize={20}
          maxSize={25}
          minSize={0}
          collapsedSize={0}>
          left side
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Mainlayout;
