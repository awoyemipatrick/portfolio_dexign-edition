'use client';
import React, { useState, useRef, useEffect } from 'react';
import Logo from './logo';
import Links from './links';
import { CloseIcon, MenuIcon } from '../../../icons/icons';
import ThemeSwitch from '../themeSwitch';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

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
        <div>
        <ThemeSwitch/>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-center rounded-full"
            aria-label="Open Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full shadow-lg transition-transform z-10"
        >
          <Links />
        </div>
      )}
    </header>
  );
};

export default Navbar;
