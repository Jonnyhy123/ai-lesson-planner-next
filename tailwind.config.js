/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#3C909A',
        'soft-coral': '#FFDEDE',
        'black': '#111111',
        'mint-green': '#96E2DC',
        'off-white': '#FEFBFB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}