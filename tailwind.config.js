/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blue-white-gradient': 'linear-gradient(to right, blue 50%, white 50%)'
      }
    }
  },
  plugins: [forms]
}
