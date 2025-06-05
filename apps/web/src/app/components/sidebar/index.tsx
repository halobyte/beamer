import { Bug, HelpCircle } from "lucide-react";

import BeamerIcon from "@beamer/ui/components/beamer-icon";
import {
  Sidebar as _Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@beamer/ui/components/sidebar";

import SidebarItems from "./sidebar-items";

export default function Sidebar() {
  return (
    <_Sidebar className="border-none">
      <SidebarContent>
        <SidebarHeader className="mt-[9px] flex h-[60px] flex-row items-center gap-3 border border-transparent px-3.5 *:cursor-default">
          <span className="relative inline-flex size-10 items-center justify-center rounded-md bg-gradient-to-b from-sky-700 via-sky-700 to-sky-800 text-yellow-300">
            <BeamerIcon className="absolute size-6 fill-white" />
          </span>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight">Beamer</h1>
            <a className="text-sidebar-foreground/70 text-sm font-medium">
              Easy email campaigns
            </a>
          </div>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Support</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full cursor-pointer">
                  <HelpCircle />
                  Get help
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="w-full cursor-pointer">
                  <Bug />
                  Report a bug
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarFooter>
    </_Sidebar>
  );
}
