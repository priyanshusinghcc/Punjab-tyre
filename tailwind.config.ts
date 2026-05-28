import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E53935",
          black: "#111111",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        premium: "0 18px 40px rgba(0,0,0,0.12)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(229,57,53,0.25), transparent 32%), linear-gradient(135deg, rgba(17,17,17,0.96), rgba(17,17,17,0.72))"
      }
    }
  },
  plugins: []
};

export default config;
