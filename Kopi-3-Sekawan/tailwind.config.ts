import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oat: "#F7F3ED",
        cream: "#EFE8DE",
        "warm-stone": "#D8CEBE",
        espresso: {
          light: "#3E2C22",
          DEFAULT: "#281E18",
          dark: "#1A1412",
          card: "#241B17",
        },
        crema: {
          DEFAULT: "#D97724",
          hover: "#BF6318",
          light: "#FDF2E7",
        },
        sage: {
          DEFAULT: "#15803D",
          light: "#DCFCE7",
          dark: "#14532D",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
