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
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        // --- Namibian Desert Palette (Lighter) ---
        // Primary colors
        sand: {
          50: '#FDF9F3',    // Lightest sand
          100: '#FAF1E4',   // Light sand
          200: '#F5E6D3',   // Pale sand
          300: '#E8D0B7',   // Desert sand
          400: '#D4B896',   // Medium sand
          500: '#C5995C',   // Rich sand (from lion)
          600: '#B8844A',   // Deep sand
          700: '#A16B35',   // Dark sand
          800: '#7A4F28',   // Burnt sand
          900: '#5C3A1F'    // Darkest sand
        },
        
        // Stone/Rock colors
        stone: {
          50: '#F8F7F6',    // Lightest stone
          100: '#F0EFED',   // Light stone
          200: '#E5E4E1',   // Pale stone
          300: '#D1CFCA',   // Light gray stone
          400: '#B5B3AD',   // Medium stone
          500: '#8C9193',   // Battleship (existing)
          600: '#75787A',   // Dark stone
          700: '#5E6163',   // Darker stone
          800: '#494C4D',   // Deep stone
          900: '#363839'    // Darkest stone
        },

        // Earth/Clay colors
        earth: {
          50: '#FBF8F5',    // Lightest earth
          100: '#F4EFEA',   // Light earth
          200: '#EAE0D6',   // Pale earth
          300: '#D8C7B8',   // Light clay
          400: '#C0A898',   // Medium clay
          500: '#857366',   // Cinereous (existing)
          600: '#6D5F54',   // Dark clay
          700: '#5A4B42',   // Darker earth
          800: '#453831',   // Deep earth
          900: '#342822'    // Darkest earth
        },

        // Sky/Water colors
        sky: {
          50: '#F7F9FA',    // Lightest sky
          100: '#EDF2F4',   // Light sky
          200: '#DDE6EA',   // Pale sky
          300: '#C1CDD4',   // Light blue-gray
          400: '#9AAEB8',   // Medium sky
          500: '#656D78',   // Paynes gray (existing)
          600: '#525A63',   // Dark sky
          700: '#42474E',   // Darker sky
          800: '#32363A',   // Deep sky
          900: '#252829'    // Darkest sky
        },

        // Accent colors
        sunset: {
          50: '#FEF7F0',    // Lightest sunset
          100: '#FDEBE0',   // Light sunset
          200: '#FBD1C0',   // Pale sunset
          300: '#F7B29A',   // Light orange
          400: '#F08A6B',   // Medium sunset
          500: '#EA7E18',   // Tangerine (existing)
          600: '#D36A15',   // Dark sunset
          700: '#B55612',   // Darker orange
          800: '#94430E',   // Deep sunset
          900: '#75340B'    // Darkest sunset
        },

        // Neutral colors (lighter versions)
        neutral: {
          50: '#FEFEFE',    // White (existing)
          100: '#F9F9F9',   // Near white
          200: '#F2F2F2',   // Light gray
          300: '#E8E8E8',   // Medium light gray
          400: '#D7D8DA',   // Platinum (existing)
          500: '#B5B7B9',   // Silver (existing)
          600: '#8C9193',   // Battleship (existing)
          700: '#656668',   // Medium gray
          800: '#404243',   // Onyx (existing)
          900: '#0E0D0D'    // Night (existing)
        }
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
