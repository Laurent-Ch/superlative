"use client";

import styles from "@/src/ui/styles/navbar.module.scss";

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
            className={`${styles.link} ${
              pathname === href ? styles.active : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
