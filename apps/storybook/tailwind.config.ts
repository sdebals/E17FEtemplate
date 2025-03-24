import type { Config } from 'tailwindcss';
import preset from '@repo/ui/tailwind.config';

const config: Pick<Config, 'presets' | 'content'> = {
  content: [
    './docs/*.mdx',
    './stories/**/*.tsx',
    './app/**/*.tsx',
    '../../packages/storyblok/src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ],
  presets: [preset]
};

export default config;
