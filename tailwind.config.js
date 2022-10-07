const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        play: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        brush: ['Alex Brush', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        westar: {
          50: '#FDFDFC',
          100: '#F8F8F6',
          200: '#F4F3F0',
          300: '#EEECE8',
          400: '#E7E5DF',
          500: '#E2DFD8',
          600: '#BCB5A4',
          700: '#978C73',
          800: '#665E4C',
          900: '#322E25'
        },
        coral: {
          50: '#F9F7F5',
          100: '#F3F0EC',
          200: '#EAE3DC',
          300: '#DED4C9',
          400: '#D5C7B9',
          500: '#CAB9A7',
          600: '#AE9579',
          700: '#896F52',
          800: '#5C4B38',
          900: '#2D241B'
        },
        xanadu: {
          50: '#F1F3F2',
          100: '#E4E7E4',
          200: '#C8D0CA',
          300: '#ADB8AF',
          400: '#92A095',
          500: '#77897B',
          600: '#5F6D62',
          700: '#475249',
          800: '#2F3731',
          900: '#181B18'
        },
        lunar: {
          50: '#E8EDE8',
          100: '#D4DDD5',
          200: '#A7B9A8',
          300: '#7C987E',
          400: '#556C57',
          500: '#344235',
          600: '#283329',
          700: '#1F2820',
          800: '#141A15',
          900: '#0B0E0B'
        }
      }
    }
  },
  plugins: []
}
