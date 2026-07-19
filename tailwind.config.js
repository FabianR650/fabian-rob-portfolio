/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./styles/globals.css",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
      },

      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },

        cloudFloat: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },

        rocketLift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-120%)" },
        },

        smokePulse: {
          "0%, 100%": { opacity: 0.8, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(1.1)" },
        },

        starsTwinkle: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
        },

        pulseSlow: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
        },

        laptopOpen: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-110deg)" },
        },

        laptopClose: {
          "0%": { transform: "rotateX(-110deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        cloudFloat: "cloudFloat 25s linear infinite",

        rocketLift: "rocketLift 6s ease-in-out infinite",
        smokePulse: "smokePulse 2s ease-in-out infinite",

        starsTwinkle: "starsTwinkle 3s ease-in-out infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",

        laptopOpen: "laptopOpen 0.6s ease-out forwards",
        laptopClose: "laptopClose 0.6s ease-out forwards",
      },
    },
  },

  plugins: [],
};
