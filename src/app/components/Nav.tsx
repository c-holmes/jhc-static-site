"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/visual-offerings": {
    name: "Visual Offerings",
  },
  "/contact": {
    name: "Contact",
  },
};

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Janet Holmes Consulting Logo"
            width={175}
            height={500}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-15 h-15 justify-center text-sm text-jhcteal-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          title="Toggle navigation"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium text-lg md:text-xl p-4 md:p-0 mt-4 bg-black md:space-x-8 md:flex-row md:mt-0 md:bg-white  ">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`block py-2 px-3 rounded-sm md:p-0 hover:underline ${
                    isActive
                      ? "bg-jhcteal-100 md:bg-transparent md:text-jhcteal-100"
                      : "text-white md:text-black "
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
