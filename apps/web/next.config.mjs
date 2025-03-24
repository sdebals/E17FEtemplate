import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withRedisCacheHandler from '@repo/redis/next-config';
// Enable if using Sentry, otherwise can be removed
// import { withSentryConfig } from '@repo/sentry/next-config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/storyblok'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  experimental: {
    instrumentationHook: process.env.SENTRY_ENABLED === 'true'
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (isServer) {
      // Sentry when consumed in Client components is triggering errors in the console
      // https://github.com/getsentry/sentry-javascript/issues/12077
      config.ignoreWarnings = [
        { module: /@opentelemetry\/instrumentation/, message: /Critical dependency/ }
      ];
    }
    return config;
  }
};

const withNextIntl = createNextIntlPlugin();

let config = withNextIntl(nextConfig);

// If Redis is enabled, enable cache handler
if (process.env.REDIS_HOST) {
  config = withRedisCacheHandler(config);
}

// Uncomment if using Sentry
// withSentryConfig will check if Sentry is enabled and initialize it if it is
// if (process.env.SENTRY_ENABLED === 'true') {
//   config = withSentryConfig(config);
// }

// If ANALYZE is set to true, enable bundle analyzer
if (process.env.ANALYZE) {
  config = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(config);
}

export default config;
