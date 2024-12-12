
import React from "react";
import { siteConfig } from "../../../config/site";
import NavLinks from "./navLink";

const Links = () => {
  return (
    <nav>
      <ul className="flex flex-col top-6 gap-8 md:flex-row items-center md:gap-4">
        {siteConfig.navItems.map((nav) => (
          <li key={nav.label} className=" my-2 md:my-0">
            <NavLinks item={nav} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
