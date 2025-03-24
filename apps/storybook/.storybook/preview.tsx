import React from 'react';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import Layout from '../app/layout';

initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        small: { name: 'Small', styles: { width: '640px', height: '800px' } },
        large: { name: 'Large', styles: { width: '1024px', height: '1000px' } }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    test: {
      // This is needed until Next will update to the React 19 beta: https://github.com/vercel/next.js/pull/65058
      // In the React 19 beta ErrorBoundary errors (such as redirect) are only logged, and not thrown.
      dangerouslyIgnoreUnhandledErrors: true
    },
    // Sort stories in the order you want they to be listed in the sidebar
    options: {
      storySort: {
        order: ['Intro', 'Help', 'Foundations', 'Layout', 'Blocks', 'Pages', '*']
      }
    },
    nextjs: { appDirectory: true }
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    )
  ],
  loaders: [mswLoader]
};

export default preview;
