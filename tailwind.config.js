/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#64F28C",
        secondary: "#FDE68A",
      },
      textColor: {
        primary: "#EF4444",
        secondary: "#FFC24B",
      },
    },
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "578px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
