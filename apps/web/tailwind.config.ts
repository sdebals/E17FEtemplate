import type { Config } from 'tailwindcss';
import preset from '@repo/ui/tailwind.config';

const config: Pick<Config, 'presets' | 'content' | 'theme'> = {
  content: [
    './app/**/*.tsx',
    './components/**/*.tsx',
    '../../packages/storyblok/src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../packages/site-protection/src/**/*.{ts,tsx}'
  ],
  presets: [preset]
};

export default config;
