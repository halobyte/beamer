import { Separator } from "@beamer/ui/components/separator";
import { cn } from "@beamer/ui/utils";

import { Breadcrumbs, PageTitle } from "./breadcrumbs";
import { SidebarToggle } from "./buttons";
import NotificationsArea from "./notifications-area";
import UserMenu from "./user-menu";

function NavSection({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("flex items-center gap-3 sm:gap-5", className)}
    >
      {children}
    </section>
  );
}

export default function NavBar() {
  return (
    <header className="sticky top-0 flex items-center">
      <div className="relative w-full">
        <div className="z-10 flex w-full flex-nowrap items-center justify-between bg-white p-3 px-2 shadow-sm sm:px-4">
          <NavSection className="flex-1 overflow-hidden">
            <SidebarToggle />
            <Separator orientation="vertical" className="!h-5" />
            <PageTitle />
          </NavSection>

          <NavSection className="ml-5 w-fit shrink-0">
            <NotificationsArea />
            <UserMenu />
          </NavSection>
        </div>

        <Breadcrumbs />
      </div>
    </header>
  );
}
