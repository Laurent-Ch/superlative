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
    <div className={`w-2/6 text-xl ${styles["navbar"]}`}>
      <div className="flex flex-row">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 ${styles.link} ${
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
      </div>
      {pathname === "/manifesto" && (
        <>
          <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex justify-around gap-2">
            <div>Visions</div>
            <div>Mission</div>
            <div>Valeurs</div>
          </div>
        </>
      )}
    </div>
  );
}
