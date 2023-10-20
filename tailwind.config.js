/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'content': 'var(--bg-color)'
      },
      borderRadius: {
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}

