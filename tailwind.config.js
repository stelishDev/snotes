/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.tsx", "./app/**/*.{ts,tsx}",  "./components/**/*.{ts,tsx}"],
  darkMode: 'class',
  // presets: [require('nativewind/tailwind-config')],
  theme: {
    extend: {},
  },
  plugins: [],
}

