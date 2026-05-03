"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const nav = [
    {
      name: "Cabins",
      href: "/cabins",
    },
    {
      name: "About ",
      href: "/about",
    },
    {
      name: "Guest area",
      href: "/account",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {nav.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${pathName === item.href ? "text-accent-400" : ""}  hover:text-accent-400 transition-colors`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
