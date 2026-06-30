import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1A1A2E",
        plum: "#2D1B3D",
        gold: "#C9963A",
        parchment: "#F5EDE0",
        mauve: "#7B4E6B",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        superwide: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;