import Link from "next/link";

import { links } from ".";

export default function NavLinks() {
  return (
    <ul className="flex list-none items-center gap-7 text-sm font-medium md:gap-8">
      {links.map(({ title, href }, i) => (
        <li key={i}>
          <Link className="transition-all hover:text-zinc-600" href={href}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
