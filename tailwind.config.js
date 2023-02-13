/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        bubble: "40% 60% 70% 30% / 40% 50% 60% 50%",
      },
      screens: {
        "sm-mob": { raw: "(max-height: 700px) and (min-width: 250px)" },
        "l-desktop": { raw: "(min-width: 1920px)" },
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fill, 250px)",
        "facts-md": "repeat(auto-fill, 300px)",
        "facts-sm": "repeat(auto-fill, 250px)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 6px 16px var(--tw-shadow-color)",
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
        // header: "rgb(57 39 95)",
      },
      colors: {
        "c-purple": "#C778DD",
        "c-gray": "#ABB2BF",
        "light-red": "rgb(212 49 49 / 45%)",
        "light-blue": "rgb(36 105 237 / 56%)",
        textGray: "#A3b3bc",
      },
      backgroundImage: {
        "avatar-gradient": "linear-gradient(to right, #9d50bb, #6e48aa)",
        "cards-dark-purple":
          "linear-gradient(to top, #0a0a0a, #2f0743, #0a0a0a)",
        "cards-dark-blue":
          "linear-gradient(45deg, #0a0a0a, #14223ac9, #0a0a0a)",
        "cards-dark-red": "linear-gradient(45deg, #0a0a0a, #3a141bc9, #0a0a0a)",
        shadows:
          "linear-gradient(to right,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0) 5%,rgba(0, 0, 0, 0) 95%,rgba(0, 0, 0, 1))",
        avatar: "url(/rocket.png)",
        "purple-radial":
          "radial-gradient(50% 50% at 50% 50%, #501b8ca1 0%, rgba(16, 14, 17, 0.14) 100%)",
        linearPurpleBack:
          "linear-gradient(230.52deg, #67299f -35.11%, #1C151E 88.15%)",
        linearDarkPurple:
          "linear-gradient(198.22deg, #0A0A0A 23.72%, #30143A 69.75%, #0A0A0A 107.1%)",
        linearTextDark:
          "linear-gradient(90deg, #9627ED 47.23%, #9C1A8F 87.48%)",
        // header: "linear-gradient(to right, #2e154a, #8248aa)",
        header: "linear-gradient(to right, #2e154a, #4c0779)",
      },
      fontFamily: {
        fira: "Fira Code, monospace",
        inter: "Inter, sans-serif",
        poppins: "Poppins, sans-serif",
        "open-sans": "'Open Sans', sans-serif",
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
        "levitation-reverse": {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(6%)" },
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
        blob: {
          "0%,100%": { borderRadius: "40% 60% 70% 30% / 40% 40% 60% 50%" },
          " 34%": {
            borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
          },
          "67%": {
            borderRadius: "100% 60% 60% 100% / 100% 100% 60% 60%",
          },
        },
        rotateFull: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        wave: "wave 10s -3s linear reverse infinite",
        levitation: "levitation 5s 1500ms linear reverse infinite",
        "levitation-sm": "levitation-sm 5s 1500ms linear reverse infinite",
        "levitation-reverse":
          "levitation-reverse 5s 1.5s 1500ms linear reverse infinite",
        fromLeft: "fromLeft 1s linear",
        fromRight: "fromRight 700ms linear",
        cardSkew: "cardSkew 10s linear reverse infinite",
        cardSkewLow: "cardSkewLow 10s linear reverse infinite",
        blob: "blob 3s linear infinite",
        rotateFull: "rotateFull 13s linear infinite",
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
