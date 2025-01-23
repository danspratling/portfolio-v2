const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        "2xl": "1280px",
      },
      colors: {
        gray: colors.slate,
        primary: "#6ce5b1",
        secondary: "#f3eeea",
        accent: "#ed8299",
        highlight: "#5e54c9",
        inverted: "#031926",
        "inverted-muted": "#4d4d4d",
        neutral: "#ffffff",
        "neutral-muted": "#fbf7f3",
        "code-1": "#5e54c9",
        "code-2": "#ef476f",
        "code-3": "#9f7aea",
        "code-4": "#e53e3e",
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
      },
      boxShadow: {
        xl: "6px 12px 24px 0 rgba(0,0,0,0.03)",
      },
      maxWidth: {
        0: 0,
        "screen-xs": 600,
      },
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        "6xl": "4.25rem",
      },
      inset: {
        "1/2": "50%",
      },
      transitionProperty: {
        background: "background-color",
      },
      translate: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      scale: {
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
      gridTemplateColumns: {
        masonry: "repeat(2, minmax(16em, 1fr))",
      },
    },
  },
  variants: {
    opacity: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "group-focus",
      "focus-within",
    ],
    boxShadow: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "group-focus",
      "focus-within",
      "dark",
    ],
    pointerEvents: ["responsive", "group-hover", "group-focus", "focus-within"],
    translate: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "group-focus",
      "focus-within",
    ],
    textDecoration: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "group-focus",
      "focus-within",
    ],
  },
  plugins: [require("@tailwindcss/typography")],
}
