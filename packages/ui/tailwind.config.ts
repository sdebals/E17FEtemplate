/***import type { Config } from 'tailwindcss';**/
import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  content: ['./src/**/*.tsx', '../../packages/storyblok/src/**/*.{ts,tsx}'],
 
};

export default config;
