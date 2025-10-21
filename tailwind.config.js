/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Here we create two custom font families
        sans: ['var(--font-inter)'],      // For English text
        amiri: ['var(--font-amiri)'],     // For Arabic text
      },
    },
  },
  plugins: [],
};