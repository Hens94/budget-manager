import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: " #308e87",
      secondary: "#f39159",
      success: "#3eb95f",
      info: "#02a2b9",
      warning: "#ea9200",
      danger: "#e74b2b",
      body: "#f9f7f6",
      muted: "#aaa3a0",
      "font-color": "#292929",
    },
    extend: {
      colors: { ...colors },
      gridTemplateRows: {
        layout: "77px 1fr",
      },
      gridTemplateColumns: {
        layout: "253px 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
