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
    <div className={`w-2/5 text-xl flex flex-col gap-2 ${styles["navbar"]}`}>
      <div className="w-full flex gap-2 justify-between">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex gap-1 justify-center items-center ${
              styles.link
            } ${pathname === href ? styles.active : ""}`}
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
          <div className="relative flex w-full overflow-x-hidden text-white">
            <div className="animate-marquee whitespace-nowrap">
              <span>
                A passionate and assertive curation of all copywriting that exudes
                cachet.&nbsp;
              </span>
            </div>
            <div className="absolute top-0 inline-block animate-marquee2 whitespace-nowrap">
              <span>
                A passionate and assertive curation of all copywriting that exudes
                cachet.&nbsp;
              </span>
            </div>
          </div>

          <div className="w-full flex gap-2 justify-between text-white">
            <div className="flex-1 flex justify-center items-center">
              Visions
            </div>
            <div className="flex-1 flex justify-center items-center">
              Mission
            </div>
            <div className="flex-1 flex justify-center items-center">
              Valeurs
            </div>
          </div>
        </>
      )}
    </div>
  );
}
