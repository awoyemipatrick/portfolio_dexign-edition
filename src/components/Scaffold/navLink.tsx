
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LinkItem } from "../../../types";

const NavLinks = ({ item }: { item: LinkItem }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={item.href}
        className={`min-w-[100px] px-4 py-2 mx-1 rounded-2xl text-sm text-center transition-all duration-200 transform hover:scale-105 hover:font-bold 
          ${pathname === item.href ? "bg-indigo-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"}`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default NavLinks;