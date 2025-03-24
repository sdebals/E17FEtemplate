import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

const redisConfig = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return commitHash;
  },
  cacheHandler: require.resolve('./cache-handler.mjs'),
  cacheMaxMemorySize: 0
};

function withRedisCacheHandler(nextConfig) {
  return {
    ...nextConfig,
    ...redisConfig
  };
}

export default withRedisCacheHandler;
