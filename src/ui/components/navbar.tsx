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
    <div className={`w-2/5 text-xl ${styles["navbar"]}`}>
      <div className="flex flex-row gap-6 justify-around">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 ${styles.link} ${
              pathname === href ? styles.active : ""
            }`}
          >
            <span className="w-[5px]" aria-hidden="true" />
            {label}
            {pathname === href ? (
              <Image
                className={`self-start ${pathname === href ? "" : "invisible"}`}
                src="/logoPink.svg"
                alt=""
                width={5}
                height={5}
                sizes="90vw"
              />
            ) : (
              <span className="w-[5px]" aria-hidden="true" />
            )}
          </Link>
        ))}
      </div>
      {pathname === "/manifesto" && (
        <>
          <div className="w-full overflow-hidden whitespace-nowrap text-white">
            <div className="inline-block animate-marquee">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </span>
            </div>
          </div>
          <div className="flex justify-around gap-2 text-white">
            <div>Visions</div>
            <div>Mission</div>
            <div>Valeurs</div>
          </div>
        </>
      )}
    </div>
  );
}
