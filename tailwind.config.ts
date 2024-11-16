import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#12130f",
          100: "#040403",
          200: "#080806",
          300: "#0b0c09",
          400: "#0f100d",
          500: "#12130f",
          600: "#454939",
          700: "#777e63",
          800: "#a6ac95",
          900: "#d2d5ca",
        },
        white_smoke: {
          DEFAULT: "#f2f4f3",
          100: "#2d3430",
          200: "#596961",
          300: "#899a91",
          400: "#bdc7c2",
          500: "#f2f4f3",
          600: "#f4f6f5",
          700: "#f7f8f7",
          800: "#f9fafa",
          900: "#fcfdfc",
        },
        argentinian_blue: {
          DEFAULT: "#35a7ff",
          100: "#00233d",
          200: "#00457a",
          300: "#0068b8",
          400: "#008bf5",
          500: "#35a7ff",
          600: "#5cb8ff",
          700: "#85caff",
          800: "#addcff",
          900: "#d6edff",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
