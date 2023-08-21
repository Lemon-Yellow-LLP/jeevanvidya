/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#E33439',
          black: '#373435',
        },
        'gold': '#FFD63E',
        secondary: { green: '#147257', blue: '#065381' },
        'dark-white': '#F5F5F5',
      },
    },
    boxShadow: {
      primary: '',
      secondary: '0px 4px 44px 0px rgba(50, 103, 227, 0.08)',
      modal: '0px 8px 11px -4px #0000000D',
      calendar: '0px 4px 14px 0px #0000001A',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [],
};
