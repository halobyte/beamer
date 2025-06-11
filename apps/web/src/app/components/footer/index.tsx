import Link from "next/link";

import LogoLink from "../logo-link";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col justify-between border-t bg-zinc-50 *:p-8 *:px-4 *:sm:p-10">
      <section className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex flex-col items-center sm:items-baseline">
          <LogoLink />
          <p className="text-sm font-medium text-zinc-600">
            Email campagins made easy - for everyone.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-xs *:text-center sm:flex-row sm:gap-5">
          <span>Copyright (c) 2025 Beamer. All Rights Reserved.</span>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Terms of use</Link>
        </div>
      </section>
    </footer>
  );
}
