import { cn } from "@/lib/utils";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import PlaylistSkeleton from "./PlaylistSkeleton";

function RightSide() {
  const isLoading = true;
  return (
    <div className="h-full flex flex-col gap-y-2">
      {/* top section*/}
      <div className="rounded-lg bg-zinc-800 p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className={cn(
              buttonVariants({
                variant: "ghost",
                className:
                  " flex items-center justify-between hover:bg-zinc-700 transition-colors duration-100",
              })
            )}>
            <HomeIcon className="size-6 " />
            <span>خانه</span>
          </Link>
          <Link
            to="/chat"
            className={cn(
              buttonVariants({
                variant: "ghost",
                className:
                  " flex items-center justify-between hover:bg-zinc-700 transition-colors duration-100",
              })
            )}>
            <MessageCircle className="size-6 " />
            <span>صفحه چت</span>
          </Link>
        </div>
      </div>
      {/* library section */}
      <div className="flex-1 bg-zinc-800 rounded-lg p-4">
        {/* header */}
        <div className="">
          <div className="flex items-center justify-between">
            <Library />
            <span>لیست</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          {isLoading ? <PlaylistSkeleton /> : ""}
        </ScrollArea>
      </div>
    </div>
  );
}

export default RightSide;
