import { SidebarProvider } from "@beamer/ui/components/sidebar";

import { NavBar, Sidebar } from "./components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-sidebar h-screen overflow-hidden p-2">
      <SidebarProvider>
        <Sidebar />
        <div className="relative max-h-[calc(100vh-1rem)] w-full overflow-auto rounded-md border bg-white">
          <NavBar />
          <div className="p-4">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
