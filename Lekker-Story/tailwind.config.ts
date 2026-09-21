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
        wajan: "#3A2318",
        gosong: "#B4682A",
        mentega: "#E8A93B",
        kertas: "#F3EBD9",
        tinta: "#C43A2F",
        coklat: "#241611",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-public-sans)", "system-ui", "sans-serif"],
        aksen: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "lekker-fold": "lekkerFold 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        lekkerFold: {
          "0%": { clipPath: "ellipse(50% 50% at 50% 50%)", opacity: "0" },
          "100%": { clipPath: "ellipse(50% 50% at 50% 50%)", opacity: "1" },
        },
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
