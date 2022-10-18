/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-purple": "#d8b5ce",
        "cust-dark-purple": "#7C2F9B",
        "cust-yellow": "#f4d92c",
        "cust-red": "#fb3e35",
        "cust-light-blue": "#CEF3EB",
        "cust-aqua": "#42C4CC",
        "cust-orange": "#F89864",
      },
      fontFamily: {
        Amatic: ["Amatic SC", "cursive"],
        Bebas: ["Bebas Neue", "cursive"],
        Crimson: ["Crimson Text", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
      // backgroundImage: {
      //   phone: "url('/public/images/phonecall.png')",
      // },
    },
  },
  plugins: [],
};
