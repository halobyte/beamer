"use client";

import { useClerk } from "@clerk/nextjs";
import { CreditCard, LogOut, UserRound } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@beamer/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@beamer/ui/components/dropdown-menu";

export default function UserMenu() {
  const { signOut, user, openUserProfile } = useClerk();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-9 cursor-pointer shadow-sm transition-shadow hover:shadow-lg">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName ?? undefined} />
          <AvatarFallback>
            {user?.firstName?.at(0)}
            {user?.lastName?.at(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => openUserProfile()}>
          <UserRound />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <CreditCard />
          Subscription
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} variant="destructive">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
