import { getRedisClient } from '@repo/redis/client';

const redis = getRedisClient();

interface IRateLimitRule {
  time?: number; // number of seconds
  limit?: number; // max number of requests to accept in a time frame
}

export function rateLimiter({ time = 60, limit = 10 }: IRateLimitRule) {
  return {
    check: async (token: string): Promise<void> => {
      const key = `rateLimit:${token}`;

      const multi = redis.multi().incr(key).expire(key, time);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [requests] = (await multi.exec()) as [number, any];

      if (requests > limit) {
        throw new Error('Rate limit exceeded');
      }
    }
  };
}
