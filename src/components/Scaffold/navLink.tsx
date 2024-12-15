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
        className={`bg-[size:100%_200%] bg-top bg-customGradientDarkBg hover:bg-bottom dark:bg-[size:100%_200%] dark:bg-top dark:bg-customGradientLightBg dark:hover:bg-bottom px-4 py-2 mx-1 rounded-2xl text-sm text-center transition-all duration-1000 ease-out transform hover:scale-105 text-black 
       ${pathname === item.href ? "" : ""}`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default NavLinks;
