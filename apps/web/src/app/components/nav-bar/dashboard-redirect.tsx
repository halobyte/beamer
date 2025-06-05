"use client";

import path from "node:path";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { CircleArrowRight, LogIn } from "lucide-react";

import { Button } from "@beamer/ui/components/button";

import { env } from "@/lib/env";

export default function DashboardRedirect() {
  const { isSignedIn } = useUser();

  return (
    <Button asChild>
      <Link
        href={
          isSignedIn
            ? env.NEXT_PUBLIC_DASHBOARD_URL
            : new URL("/auth/sign-in", env.NEXT_PUBLIC_DASHBOARD_URL)
        }
      >
        {isSignedIn ? (
          <>
            Go to dashboard <CircleArrowRight />
          </>
        ) : (
          <>
            Log in <LogIn />
          </>
        )}
      </Link>
    </Button>
  );
}
