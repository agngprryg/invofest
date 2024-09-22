/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
    colors: {
      primary: "#41C9E2",
      secondary: "#ace2e1",
      orange: "#ff5d20",
      gray: "#6c7481",
      blue: "#002248",
      white: "#ffffff",
      black: "#000000",
    },
  },

  plugins: [],
};
