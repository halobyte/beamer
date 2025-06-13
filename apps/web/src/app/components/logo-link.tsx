import Link from "next/link";

import BeamerLogo from "@beamer/ui/components/beamer-icon";

export default function LogoLink() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <BeamerLogo className="size-6 fill-sky-700" />
      <span className="text-xl font-medium tracking-tight">Beamer</span>
    </Link>
  );
}
