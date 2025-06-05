import Link from "next/link";
import {
  CircleDollarSign,
  Puzzle,
  TableOfContents,
  Trophy,
} from "lucide-react";

import BeamerLogo from "@beamer/ui/components/beamer-icon";
import { Separator } from "@beamer/ui/components/separator";

import DashboardRedirect from "./dashboard-redirect";
import NavLinks from "./nav-links";
import { SidebarToggle } from "./sidebar-toggle";

export const links = [
  { title: "Features", href: "/#features", icon: Puzzle },
  { title: "Pricing", href: "/#pricing", icon: CircleDollarSign },
  { title: "Why Beamer", href: "/#why-beamer", icon: Trophy },
  { title: "FAQ", href: "/#faq", icon: TableOfContents },
] as const;

export default function NavBar() {
  return (
    <header className="sticky top-0 flex items-center justify-between border border-b bg-white/80 p-3 backdrop:blur-lg">
      <section className="flex items-center">
        <div className="flex items-center sm:hidden">
          <SidebarToggle />
          <Separator orientation="vertical" className="mx-3 !h-5" />
        </div>
        <Link href="/" className="flex items-center gap-1.5">
          <BeamerLogo className="size-5 fill-sky-700" />
          <span className="font-semibold tracking-tight">Beamer</span>
        </Link>
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
