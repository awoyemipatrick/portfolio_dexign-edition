"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DayIcon, NightIcon } from "@/icons/icons";


const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Dark mode button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className=""
      >
        {theme === "dark" ? (
          <NightIcon className=" rounded-full" />
        ) : (
          <DayIcon className=" rounded-full " />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;