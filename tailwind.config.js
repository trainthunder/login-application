/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": '"Nunito Sans"',
        "protest-guerrilla": '"Protest Guerrilla"',
      },
      colors: {
        stateblue: "#6264d5",
      },
    },
  },
  plugins: [],
};
