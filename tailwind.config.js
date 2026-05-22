/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aurora-blue': '#1e3a8a',
        'aurora-purple': '#7c3aed',
        'aurora-green': '#10b981',
      },
    },
  },
  plugins: [],
}