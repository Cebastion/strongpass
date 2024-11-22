import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "rgb(38, 47, 51)",
          hover: "rgb(64, 128, 119)",
          gray_custom: "#7A7E80",
          custom_dark_purple: "rgb(60, 15, 60)",
          custom_gray_second: "rgb(122, 126, 128)",
        },
        borderColor: {
          custom: "rgb(64, 128, 119)",
          hover: "rgb(27, 107, 96)",
        },
        bg: {
          custom_green: "rgb(64, 128, 119)",
          custom_beige: "rgb(243, 223, 195)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
