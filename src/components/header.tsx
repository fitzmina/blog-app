"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create",
    label: "Create Post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      {/* <Image
        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
        alt="logo"
        className="w-[2.1rem] h-[2.1rem]"
        width="35"
        height="35"
      /> */}
      <Link href={"/"}>
        <h1
          className="font-extrabold text-lg 
      bg-gradient-to-b from-zinc-400 to-zinc-800
      bg-clip-text text-transparent
      "
        >
          Fitz Blog App
        </h1>
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[.9rem]">
          {navLinks.map((link) => (
            <li key={link.label} className="">
              <Link
                href={link.href}
                className={`
                ${pathname === link.href ? "text-zinc-800" : "text-zinc-400"}
                cursor-pointer`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
