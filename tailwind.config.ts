import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/tsx/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
