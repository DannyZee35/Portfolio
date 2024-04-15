/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "line": "rgba(255,255,255,.1)",
          "gradient":"linear-gradient(90deg, rgba(175,255,255,1) 0%, rgba(15,130,130,1) 100%)",
          "button": "linear-gradient(90deg, rgba(13,110,110,1) 0%, rgba(74,157,156,1) 100%)",
          "button-hover": "linear-gradient(90deg, rgba(0, 50, 50, 1) 0%, rgba(0, 100, 100, 1) 100%)"

      }, 
      colors:{
        green:"#AFFFFF"
      }
    },
  },
  plugins: [],
};
