/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D36",
        "navy-soft": "#16304F",
        gold: "#C9A66B",
        "gold-deep": "#A8864E",
        cream: "#F7F3EC",
        "cream-deep": "#EFE8DC",
        ink: "#1C2430",
        mute: "#5C6675",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
