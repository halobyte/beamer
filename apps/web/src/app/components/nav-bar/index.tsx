import {
  CircleDollarSign,
  Puzzle,
  TableOfContents,
  Trophy,
} from "lucide-react";

import { Separator } from "@beamer/ui/components/separator";

import LogoLink from "../logo-link";
import DashboardRedirect from "./dashboard-redirect";
import NavLinks from "./nav-links";
import { SidebarToggle } from "./sidebar-toggle";

export const links = [
  { title: "Features", href: "/#features", icon: Puzzle },
  { title: "Why Beamer", href: "/#why-beamer", icon: Trophy },
  { title: "Pricing", href: "/#pricing", icon: CircleDollarSign },
  { title: "FAQ", href: "/#faq", icon: TableOfContents },
] as const;

export default function NavBar() {
  return (
    <header className="sticky top-0 z-100 flex items-center justify-between border-b bg-white/80 p-3 px-6 backdrop-blur-sm">
      <section className="flex items-center">
        <div className="flex items-center sm:hidden">
          <SidebarToggle />
          <Separator orientation="vertical" className="mx-3 !h-5" />
        </div>
        <LogoLink />
      </section>

      <nav className="hidden sm:flex">
        <NavLinks />
      </nav>

      <section>
        <DashboardRedirect />
      </section>
    </header>
  );
}
