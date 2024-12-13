import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // These colors define the dark and light mode palettes for the design.

        // Dark Mode Focus
        darkNavy: "#0D1117", // Background
        offWhite: "#C9D1D9", // Text
        softGray: "#8B949E", // For subtext or subtle borders
        electricBlue: "#3B82F6", // Buttons, links
        tealCyan: "#10B981", // Hover states and highlights

        // Light Mode Focus
        softCream: "#FAF3E0", // Background
        charcoalGray: "#333533", // Primary text
        mutedGray: "#6B7280", // For subtext or subtle borders
        lightStoneGray: "#E5E5E5", // For dividers or muted backgrounds
        warmGold: "#D4A373", // Buttons, links
        sageGreen: "#A3B18A", // Secondary accents
      },
    },
  },
  plugins: [],
} satisfies Config;
