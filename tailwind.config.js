/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue, js}'],
    darkMode: false,
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }