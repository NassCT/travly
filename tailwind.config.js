/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorG: "#0bb87d",
        colorB: "#0b1b2b",
        colorW: "#e5e5e5",
        colorG2: "#61616b",
        colorR: "#f23f43",
        colorGr: "#495057",
      },
    },
  },
  plugins: [],
  purge: false,
};
