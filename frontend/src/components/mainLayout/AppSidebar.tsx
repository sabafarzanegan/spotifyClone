import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import RightSide from "./RightSide";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between py-2">
          <Home className="w-4 h-4" />
          <Link to="/" className="font-semibold">
            خانه
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <RightSide />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
