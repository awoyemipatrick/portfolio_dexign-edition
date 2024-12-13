'use client'
import React, { useState } from "react";
import Logo from "./logo";
import Links from "./links";
import { CloseIcon, DayIcon, MenuIcon, NightIcon } from "../../../icons/icons";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between gap-8 py-4 px-4 md:px-8 shadow-md transition-colors">
      <div>
        <Logo />
      </div>
      <div className="hidden md:block">
        <Links />
      </div>
      <div className="flex items-center gap-4">
           {/* Theme Toggle */}
           <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <NightIcon/> : <DayIcon/>}
        </button>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-center bg-gray-200 dark:bg-gray-700 rounded-full"
            aria-label="Open Menu"
          >
           {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 h-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-transform">
          <Links />
        </div>
      )}
    </header>
  );
};

export default Navbar;