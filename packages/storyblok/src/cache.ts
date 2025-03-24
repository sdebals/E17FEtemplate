import TTLCache from '@isaacs/ttlcache';

// Use a memory cache to reduce number of invocations to Storyblok me endpoint
export const globalTtlCache = new TTLCache({ max: 10, ttl: 60 * 1000 }); // 1 minute
