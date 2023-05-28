/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        'sm': '0px',
        'md': '620px',
        'lg': '820px',
        'xl': '1270px',
      },
      extend: {},
    },
    plugins: [],
  }