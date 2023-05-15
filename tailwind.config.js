/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      pop: ["Poppins", "sans-serif"],
    },
    screens: {
      md: "576px",
      lg: "1144px",
    },
    extend: {},
  },
  plugins: [],
};
