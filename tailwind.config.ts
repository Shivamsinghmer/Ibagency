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
        bg: "#FAFAF8",
        fg: "#0D0D0D",
        muted: "#6B6B6B",
        border: "#E8E8E4",
        "accent-pink": "#FF4D8D",
        "accent-teal": "#00C9A7",
        "accent-purple": "#7B5EA7",
        "accent-blue": "#4B8BF5",
        "card-teal": "#EBF9F5",
        "card-pink": "#FFF0F5",
        "card-purple": "#F0EDFF",
        "card-dark": "#111111",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)"],
        sans: ["var(--font-dm-sans)"],
        mono: ["var(--font-dm-mono)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
