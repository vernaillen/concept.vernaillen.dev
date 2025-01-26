import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    './app/app.vue',
    './app/assets/svg/*.svg',
    './app/components/*.vue',
    './app/components/**/*.vue',
    './app/content/**/*.{md,yml}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      neutral: colors.neutral,
      red: colors.red,
      green: colors.green,
      purple: colors.purple
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        white: '#FFFFFF',
        black: '#0c0c0d',
        dark: '#333333',
        vernaillen: {
          DEFAULT: '#9c8e1b',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02'
        },
        java: {
          DEFAULT: '#3a75b0',
          400: '#3a75b0',
          500: '#3a75b0'
        },
        springframework: {
          DEFAULT: '#6db33f',
          400: '#6db33f',
          500: '#6db33f'
        },
        nuxt: {
          DEFAULT: '#00c16a',
          400: '#00dc82',
          500: '#00c16a'
        },
        vue: {
          DEFAULT: '#42b883',
          400: '#42b883',
          500: '#42b883'
        },
        docker: {
          DEFAULT: '#1d63ed',
          400: '#1d63ed',
          500: '#1d63ed'
        },
        kubernetes: {
          DEFAULT: '#326de6',
          400: '#326de6',
          500: '#326de6'
        },
        jenkins: {
          DEFAULT: '#4b758b',
          400: '#4b758b',
          500: '#4b758b'
        },
        liferay: {
          DEFAULT: '#0b63ce',
          400: '#0b63ce',
          500: '#0b63ce'
        },
        angular: {
          DEFAULT: '#dd0031',
          400: '#dd0031',
          500: '#dd0031'
        }
      }
    }
  }
}
