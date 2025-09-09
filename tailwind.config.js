/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Important pour le changement de thème
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          '500': '#06B6D4', // Votre "Bleu Gojo"
          '400': '#22D3EE', // Une version plus claire pour le survol (hover)
        },
      },
    },
  },
  plugins: [],
}