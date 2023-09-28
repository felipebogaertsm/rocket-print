import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s ease-in-out infinite",
        glow: "glow 1s ease-in-out infinite",
        typewriter: "typewriter 2s steps(6), blink 1s infinite",
      },
      keyframes: {
        typewriter: {
          from: {
            width: "0",
          },
          to: {
            width: "6ch",
          },
        },
        blink: {
          from: {
            "border-right-color": "transparent",
          },
          to: {
            "border-right-color": "black",
          },
        },
        glow: {
          "0%, 100%": {
            opacity: "100%",
          },
          "50%": {
            opacity: "50%",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
