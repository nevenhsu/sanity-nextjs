/** @type {import('tailwindcss/types/config').ThemeConfig} */
const theme = require('./theme/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme,
  plugins: [require('@tailwindcss/typography')],
}
