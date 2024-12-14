"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  // To ensure the theme matches on both server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // To prevent client rendering until hydration matches
    return <div className="invisible">{children}</div>;
  }

  return (
    <NextThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemeProvider>
  );
};

export default Provider;
