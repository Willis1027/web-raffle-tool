/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "767px",
      lg: "1280px",
      xl: "1560px",
      "2xl": "1660px",
    },
    extend: {},
  },
  plugins: [],
};
