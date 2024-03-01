import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#F9D40B',
        'black' : '#1E1F23',
        "semitransparent" : "rgba(255, 255, 255, 0.7)"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
