const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        primary: 'var(--background)',
        secondary: 'var(--foreground)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        minimalistic: 'var(--shadow-minimalistic)',
        smallest: 'var(--shadow-smallest)',
        small: 'var(--shadow-small)',
        medium: 'var(--shadow-medium)',
        large: 'var(--shadow-large)',
        1: 'var(--shadow-1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
