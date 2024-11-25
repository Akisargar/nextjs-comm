import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blur-blue": "#83CD281A", // Add the base color
        "custom-green": "#83CD28B2",
        "para-green": "#83CD28",
      },
    },
  },
  plugins: [],
} satisfies Config;
