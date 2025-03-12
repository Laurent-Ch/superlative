"use client";

import styles from "@/src/ui/styles/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/showcase", label: "Accueil" },
  { href: "/portfolio", label: "Archives" },
  { href: "/manifesto", label: "Manifesto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <nav className={`w-2/5 text-xl ${styles["navbar"]}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-1 ${styles.link} ${
              pathname === href ? styles.active : ""
            }`}
          >
            {label}
            <Image
              className={`self-start ${pathname === href ? "" : "invisible"}`}
              src="/logoPink.svg"
              alt=""
              width={5}
              height={5}
              sizes="90vw"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
