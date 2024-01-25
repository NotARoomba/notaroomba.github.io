import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/tsx/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter",
    },
    screens: {
      "2xs": "475px",
      xs: "600px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        rotateX: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(90deg)",
          },
        },
      },
      animation: {
        rotateX: "rotateX 1s ease-in-out 0s 1 normal forwards",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
} satisfies Config;
