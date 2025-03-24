import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  content: ['./src/**/*.tsx', '../../packages/storyblok/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'], // if you change fonts here, also change it in next layout
        mono: ['var(--font-mono)']
      },
      colors: {
        primary: {
          DEFAULT: '#1acd81',
          '50': '#effef7',
          '100': '#dafeef',
          '200': '#b8fadd',
          '300': '#81f4c3',
          '400': '#43e5a0',
          '500': '#1acd81',
          '600': '#0fa968',
          '700': '#108554',
          '800': '#126945',
          '900': '#11563a',
          '950': '#03301f'
        },
        secondary: {
          DEFAULT: '#c0cb17',
          '50': '#fefde7',
          '100': '#fcfccb',
          '200': '#f8f99d',
          '300': '#edf165',
          '400': '#dee536',
          '500': '#c0cb17',
          '600': '#9aa60e',
          '700': '#717b10',
          '800': '#5a6212',
          '900': '#4b5314',
          '950': '#282e05'
        }
      },
      keyframes: {
        pulse: {
          0: { opacity: '1' },
          50: { opacity: '0.5' },
          100: { opacity: '1' }
        }
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100vw'
          }
        }
      }
    }
  },
  plugins: [...sharedConfig.plugins]
};

export default config;
