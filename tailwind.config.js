/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "m-bg": "#100d0d",
        "m-wave": "rgba(141, 46, 170, 0.25)",
      },
      colors: {
        "m-purple": "#C778DD",
        "m-gray": "#ABB2BF",
      },
      backgroundImage: {
        "m-gradient": "linear-gradient(to right,#0ea5e9,#a855f7,#8b07b0eb)",
        "test-1": "linear-gradient(to right, #8e2de2, #4a00e0)",
        "test-2": "linear-gradient(to right, #7f00ff, #e100ff)",
        "test-3": "linear-gradient(to right, #9d50bb, #6e48aa)",
        "test-4": "linear-gradient(to right, #41295a, #2f0743)",
        "test-next": "linear-gradient(90deg,#007CF0,#00DFD8)",
        "test-dark-purple":
          "linear-gradient(to top, #0a0a0a, #2f0743, #0a0a0a)",
      },
      fontFamily: {
        fira: "Fira Code, monospace",
        inter: "Inter, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      boxShadow: {
        "m-box-shadow":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
      boxShadowColor: {
        "m-shadow-purple": "rgba(112, 27, 193, 0.65)",
        "m-shadow-hover": "rgba(133, 5, 255, 0.79)",
        "m-shadow-pink": "rgba(186, 19, 220, 0.83)",
        "m-shadow-card": "rgba(96, 5, 106, 0.84)",
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
        polygon: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%,70% 61%, 84% 59%,100% 52%,100% 100%,0% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%,67% 50%, 84% 45%,100% 46%,100% 100%,0% 100%)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        wave: "wave 10s -3s linear reverse infinite",
        levitation: "levitation 5s 1500ms linear reverse infinite",
        fromLeft: "fromLeft 1s linear",
        fromRight: "fromRight 700ms linear",
        gradient: "gradient 10s linear infinite",
        cardSkew: "cardSkew 8s linear reverse infinite",
        polygon: "polygon 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
