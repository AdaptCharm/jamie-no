const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  },
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
      spacing: {
        30: '7.5rem',
        150: '37.5rem',
      },
      inset: {
        '1/5': '20%',
      },
      transitionTimingFunction: {
        default: 'ease',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
      },
      boxShadow: {
        minimalistic: 'var(--shadow-minimalistic)',
        smallest: 'var(--shadow-smallest)',
        small: 'var(--shadow-small)',
        medium: 'var(--shadow-medium)',
        large: 'var(--shadow-large)',
        1: 'var(--shadow-1)',
      },
      gridTemplateColumns: {
        navbar: '1fr minmax(auto, 880px) 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
