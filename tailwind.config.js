/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#110d0d",
        secondary: "#FFF6DC",
        tertiary: "#7a4939",
        "black-100": "#40261d",
        "black-200": "#0c0705",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #5e2216",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};