/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "m-bg": "#1e1e1e",
        "m-wave": "rgba(141, 46, 170, 0.25)",
      },
      colors: {
        "m-purple": "#C778DD",
        "m-gray": "#ABB2BF",
      },
      fontFamily: {
        "fira-code": "Fira Code, monospace",
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
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        wave: "wave 10s -3s linear reverse infinite",
      },
    },
  },
  plugins: [],
};
