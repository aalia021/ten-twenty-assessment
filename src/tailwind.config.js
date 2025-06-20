// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan all JS/React files
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes 'Work Sans' the first font in the 'sans' stack.
        // Tailwind's font-sans utility (and often global base font) will now use Work Sans.
        sans: ["Work Sans", "sans-serif"],
      },
      keyframes: {
        "border-timer": {
          "0%": { clipPath: "inset(0 100% 100% 0)" },
          "25%": { clipPath: "inset(0 0 100% 0)" },
          "50%": { clipPath: "inset(0 0 0 0)" },
          "75%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(100% 100% 0 0)" },
        },
      },
      animation: {
        "border-timer": "border-timer 5s linear forwards",
      },
    },
  },
  plugins: [],
};
