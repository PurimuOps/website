/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF', // Le Blanc de Gojo
          dark: '#0A0A0A',   // Un noir profond
        },
        foreground: {
          light: '#171717', // Un gris-noir pour le texte
          dark: '#E5E5E5',   // Un blanc cassé pour le texte
        },
        card: {
          light: '#F5F5F5',   // Fond des cartes en clair (gris très clair)
          dark: '#1F1F1F',   // Fond des cartes en sombre (gris foncé)
        },
        primary: {
          DEFAULT: '#00A9FF', // Le Bleu Infini de Gojo
          foreground: '#FFFFFF', // Texte pour les boutons primaires
        },
        secondary: {
          DEFAULT: '#0055A4', // Le Bleu Corporate de S3NS
          foreground: '#FFFFFF',
        },
        gojo: {
          red: '#EF4444',
          purple: '#8B5CF6',
        },
        google: {
          blue: '#4285F4',
          red: '#DB4437',
          green: '#22C55E',
          orange: '#F97316',
        },
      },
    },
  },
  plugins: [],
}