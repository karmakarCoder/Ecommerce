/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      DMsans: "var(--DMsans)",
    },
    extend: {
      colors: {
        primaryFontColor: "var(--primaryFontColor)",
        secondaryFontColor: "var(--secondaryFontColor)",
        thirdFontColor: "var(--thirdFontCOlor)",
        secondaryBgColor: "var(--secondaryBgColor)",
        primaryBgColor: "var(--primaryBgColor)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
