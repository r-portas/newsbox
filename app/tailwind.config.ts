import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-playfair-display)", "serif"],
    },
    fontSize: {
      body: ["16px", "170%"],
      title: ["18px", "18px"],
      "story-heading": ["36px", "150%"],
    },
  },
  plugins: [],
};
export default config;
