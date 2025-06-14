"use client";

import path from "path";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelTop } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@beamer/ui/components/breadcrumb";

function cleanupPageTitle(name: string) {
  const pageName = decodeURIComponent(name).replaceAll("-", " ");
  return pageName.includes(".")
    ? pageName
    : pageName.at(0)?.toUpperCase() + pageName.slice(1);
}

function getPartHref(pathnameSplit: string[], part: number) {
  return path.join("/", ...pathnameSplit.slice(0, part + 1));
}

function createBreadcrumbLink(pathnameSplit: string[], part: number) {
  return (
    <BreadcrumbLink asChild>
      <Link href={getPartHref(pathnameSplit, part)}>
        {cleanupPageTitle(pathnameSplit[part] ?? "")}
      </Link>
    </BreadcrumbLink>
  );
}

export function PageTitle() {
  const pathname = usePathname();
  if (!pathname) return <span></span>;

  const pathnameSplit = pathname.split("/").filter((p) => p.length > 0);
  const href =
    pathnameSplit.length > 0
      ? getPartHref(pathnameSplit, pathnameSplit.length - 1)
      : "/";

  const title =
    pathnameSplit.length > 0
      ? cleanupPageTitle(pathnameSplit[pathnameSplit.length - 1] ?? "")
      : cleanupPageTitle("overview");

  return (
    <Link
      href={href}
      className="hover:text-foreground text-muted-foreground truncate transition-colors"
    >
      {title}
    </Link>
  );
}

function _BreadcrumbList({ pathnameSplit }: { pathnameSplit: string[] }) {
  const length = pathnameSplit.length;

  if (length > 0)
    return (
      <>
        {pathnameSplit.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                {createBreadcrumbLink(pathnameSplit, i)}
              </BreadcrumbItem>
              {i < pathnameSplit.length - 1 && (
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </>
    );

  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Overview</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

const HEADER_SELECTOR = "header[data-id=app-header]" as const;

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathnameSplit = useMemo(
    () => (pathname ? pathname.split("/").filter((p) => p.length > 0) : []),
    [pathname],
  );

  useEffect(() => {
    if (pathnameSplit.length >= 2)
      document.querySelector(HEADER_SELECTOR)?.classList.add("mb-[30px]");

    return () => {
      document.querySelector(HEADER_SELECTOR)?.classList.remove("mb-[30px]");
    };
  }, [pathnameSplit]);

  if (!pathname) return <span></span>;

  if (pathnameSplit.length < 2) return null;

  return (
    <Breadcrumb className="absolute -z-10 flex w-full items-center gap-2 border-b bg-zinc-50 p-3 px-2 py-1 sm:px-4">
      <PanelTop size={15} className="text-muted-foreground shrink-0" />
      <BreadcrumbList className="wrap-normal thin-scrollbar max-w-[98%] flex-nowrap overflow-auto">
        <_BreadcrumbList pathnameSplit={pathnameSplit} />
      </BreadcrumbList>
    </Breadcrumb>
  );
}
