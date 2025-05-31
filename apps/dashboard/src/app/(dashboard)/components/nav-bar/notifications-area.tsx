import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@beamer/ui/components/sheet";

import { NotificationsAreaTrigger } from "./buttons";

export default function NotificationsArea() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <NotificationsAreaTrigger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
