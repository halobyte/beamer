"use client";

import React from "react";
import { Bell, PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button as _Button } from "@beamer/ui/components/button";
import { useSidebar } from "@beamer/ui/components/sidebar";

type ButtonProps = React.ComponentProps<typeof _Button>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <_Button {...props} variant="outline" size="icon">
      {children}
    </_Button>
  );
}

export function SidebarToggle(_: ButtonProps) {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Button onClick={toggleSidebar}>
      {state === "expanded" ? <PanelLeftClose /> : <PanelLeftOpen />}
      <span className="sr-only"> Toggle sidebar</span>
    </Button>
  );
}

export function NotificationsAreaTrigger(props: ButtonProps) {
  return (
    <Button {...props}>
      <Bell />
    </Button>
  );
}
