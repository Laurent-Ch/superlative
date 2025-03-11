"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const bgColor = pathname === "/" ? "bg-main-color" : "bg-red";

  return (
    <div className={`h-auto ${bgColor}`}>
      <h1>Navbar</h1>
    </div>
  );
}
