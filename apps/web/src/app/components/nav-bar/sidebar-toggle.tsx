"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@beamer/ui/components/button";
import { useSidebar } from "@beamer/ui/components/sidebar";

export function SidebarToggle(props: React.ComponentProps<typeof Button>) {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Button {...props} onClick={toggleSidebar} variant="outline" size="icon">
      {state === "expanded" ? <PanelLeftClose /> : <PanelLeftOpen />}
      <span className="sr-only"> Toggle sidebar</span>
    </Button>
  );
}
