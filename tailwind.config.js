/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-purple": "#d8b5ce",
        "cust-yellow": "#f4d92c",
        "cust-red": "#fb3e35",
        "cust-light-blue": "#CEF3EB",
        "cust-aqua": "#42C4CC",
      },
      fontFamily: {
        Amatic: ["Amatic SC", "cursive"],
        Bebas: ["Bebas Neue", "cursive"],
        Crimson: ["Crimson Text", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "book-cover": "url('/public/images/balloon.png')",
      },
    },
  },
  plugins: [],
};
