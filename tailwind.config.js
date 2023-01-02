/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,tsx,jsx}",
    "./components/**/*.{html,js,tsx,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainblue: "#74b9ff",
      mainWhite: "#fff",
      mainred: "#ff2929",
    },
  },
  plugins: [],
};
