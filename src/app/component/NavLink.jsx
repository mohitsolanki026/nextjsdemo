"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`py-3 transition-all hover:scale-100 ease-in-out duration-300 cursor-pointer ${className} ${
        href === usePathname() ? "font-bold underline" : ""
      }`}
    >
      {children}
    </Link>
  );
};
