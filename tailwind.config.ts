import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // --- Palette 1 ---
        platinum: '#D7D8DA',
        night: '#0E0D0D',
        silver: '#B5B7B9',
        battleship: '#8C9193',
        tangerine: '#EA7E18',
        vanDyke: '#3A312B',
        antiflash: '#EDEDED',
        onyx: '#404243',
        white: '#FEFEFE',
        ochre: '#C97718',

        // --- Palette 2 ---
        nightAlt: '#0E0E0E',
        cinereous: '#857366',
        frenchGray: '#A5A4A7',
        lion: '#C5995C',
        timberwolf: '#CFCDCA',
        paynesGray: '#656D78',
        black: '#000000'
      },

      backgroundImage: {
        // Gradients from palette #1
        'gradient-top':
          'linear-gradient(0deg, #D7D8DA, #0E0D0D, #B5B7B9, #8C9193, #EA7E18, #3A312B, #EDEDED, #404243, #FEFEFE, #C97718)',
        'gradient-right':
          'linear-gradient(90deg, #D7D8DA, #0E0D0D, #B5B7B9, #8C9193, #EA7E18, #3A312B, #EDEDED, #404243, #FEFEFE, #C97718)',
        'gradient-bottom':
          'linear-gradient(180deg, #D7D8DA, #0E0D0D, #B5B7B9, #8C9193, #EA7E18, #3A312B, #EDEDED, #404243, #FEFEFE, #C97718)',
        'gradient-left':
          'linear-gradient(270deg, #D7D8DA, #0E0D0D, #B5B7B9, #8C9193, #EA7E18, #3A312B, #EDEDED, #404243, #FEFEFE, #C97718)',
        'gradient-radial':
          'radial-gradient(#D7D8DA, #0E0D0D, #B5B7B9, #8C9193, #EA7E18, #3A312B, #EDEDED, #404243, #FEFEFE, #C97718)',

        // Gradients from palette #2
        'gradient2-top':
          'linear-gradient(0deg, #0E0E0E, #857366, #A5A4A7, #FEFEFE, #C5995C, #FFFFFF, #CFCDCA, #656D78, #000000)',
        'gradient2-right':
          'linear-gradient(90deg, #0E0E0E, #857366, #A5A4A7, #FEFEFE, #C5995C, #FFFFFF, #CFCDCA, #656D78, #000000)',
        'gradient2-bottom':
          'linear-gradient(180deg, #0E0E0E, #857366, #A5A4A7, #FEFEFE, #C5995C, #FFFFFF, #CFCDCA, #656D78, #000000)',
        'gradient2-left':
          'linear-gradient(270deg, #0E0E0E, #857366, #A5A4A7, #FEFEFE, #C5995C, #FFFFFF, #CFCDCA, #656D78, #000000)',
        'gradient2-radial':
          'radial-gradient(#0E0E0E, #857366, #A5A4A7, #FEFEFE, #C5995C, #FFFFFF, #CFCDCA, #656D78, #000000)'
      }
    }
  },
  plugins: []
};

export default config;
