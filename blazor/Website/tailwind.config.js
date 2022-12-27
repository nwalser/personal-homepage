/** @type {import('tailwindcss').Config} */

module.exports = {
  safelist: [
    {
      pattern: /./,
    },
  ],
  purge: {
    content: ["./**/*.{razor,html,cshtml}"]
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
