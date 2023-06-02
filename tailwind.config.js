/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geologica: ["Geologica", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#20B486",
        secondary: "#536E96",
        tertiary:"#E9F8F3B2"
      },
    },
  },
  plugins: [],
};
