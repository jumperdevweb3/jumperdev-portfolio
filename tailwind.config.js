/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fill, 250px)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      dropShadow: {
        "4xl": [
          "0 15px 35px rgb(192 12 237 / 73%)",
          "0 45px 65px rgb(98 7 241 / 75%)",
        ],
        "5xl": [
          "0 15px 35px rgb(12 92 237 / 73%)",
          "0 45px 65px rgb(7 91 241 / 75%)",
        ],
        "6xl": [
          "0 15px 35px rgb(217 0 0 / 73%)",
          "0 45px 65px rgb(231 13 13 / 75%)",
        ],
      },
      backgroundColor: {
        "main-dark": "#100d0d",
        waves: "rgba(141, 46, 170, 0.25)",
      },
      colors: {
        "c-purple": "#C778DD",
        "c-gray": "#ABB2BF",
        "light-red": "rgb(212 49 49 / 45%)",
        "light-blue": "rgb(36 105 237 / 56%)",
      },
      backgroundImage: {
        "avatar-gradient": "linear-gradient(to right, #9d50bb, #6e48aa)",
        "cards-dark-purple":
          "linear-gradient(to top, #0a0a0a, #2f0743, #0a0a0a)",
        "cards-dark-blue":
          "linear-gradient(45deg, #0a0a0a, #14223ac9, #0a0a0a)",
        "cards-dark-red": "linear-gradient(45deg, #0a0a0a, #3a141bc9, #0a0a0a)",
      },
      fontFamily: {
        fira: "Fira Code, monospace",
        inter: "Inter, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      boxShadow: {
        "own-shadow":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
      boxShadowColor: {
        "avatar-hover": "rgb(223 7 115 / 79%)",
        pink: "rgba(186, 19, 220, 0.83)",
        scrolledItems: "rgba(96, 5, 106, 0.84)",
        blue: "rgb(36 105 237 / 44%)",
        "red-yt": "rgb(191 22 31 / 34%)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        wave: {
          "2%": { transform: "translateX(1)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(1)" },
        },
        levitation: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(7%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "levitation-sm": {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-4%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        cardSkew: {
          "0%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(10deg)" },
          "100%": { transform: "translateX(0deg)" },
        },
        cardSkewLow: {
          "0%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(6deg)" },
          "100%": { transform: "translateX(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        wave: "wave 10s -3s linear reverse infinite",
        levitation: "levitation 5s 1500ms linear reverse infinite",
        "levitation-sm": "levitation-sm 5s 1500ms linear reverse infinite",
        fromLeft: "fromLeft 1s linear",
        fromRight: "fromRight 700ms linear",
        cardSkew: "cardSkew 10s linear reverse infinite",
        cardSkewLow: "cardSkewLow 10s linear reverse infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
