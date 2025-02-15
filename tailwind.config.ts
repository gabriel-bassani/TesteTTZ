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
        custom_light_blue: "#a1e6ee",
        custom_dark_blue: "#1aa8c3",
        custom_light_grey: "#b4bcb4",
        custom_grey: "#74737c",
        custom_dark_grey: "#37414d",
        custom_text_blue: "#bcdbe2",
      },
    },
  },
  plugins: [],
} satisfies Config;
