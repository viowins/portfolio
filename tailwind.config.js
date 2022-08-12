/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn_50: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.5" },
        },
        fadeOut_50: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn_50: "fadeIn_50 0.3s ease-in normal",
        fadeOut_50: "fadeOut_50 0.3s ease-in normal",
      },
    },
  },
  plugins: [],
};
