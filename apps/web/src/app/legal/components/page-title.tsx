"use client";

import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname = usePathname().slice(7);

  return (
    <h1 className="text-5xl font-bold tracking-tight capitalize">
      {pathname.replaceAll("-", " ")}
    </h1>
  );
}
