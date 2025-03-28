import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  plugins: [require('@tailwindcss/typography')]
};

export default config;
