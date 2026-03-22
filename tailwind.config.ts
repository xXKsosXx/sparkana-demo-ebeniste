import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0bf5e",
        "primary-container": "#281b00",
        surface: "#210f07",
        "surface-container": "#2f1a12",
        "surface-container-low": "#2a170f",
        "surface-container-high": "#3b251c",
        "surface-container-highest": "#472f26",
        "surface-bright": "#4c342a",
        "on-surface": "#ffdbce",
        "on-surface-variant": "#d3c3be",
        secondary: "#c8c6c2",
        tertiary: "#d2c4bb",
        outline: "#9c8e89",
        "outline-variant": "#504440",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
