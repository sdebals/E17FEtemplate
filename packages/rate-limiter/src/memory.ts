import { LRUCache } from 'lru-cache';

interface IRateLimitRule {
  time?: number; // The time window for which the rate limit applies (default is 60 seconds).
  limit?: number; // The maximum number of unique tokens allowed within a specified interval (default is 50)
}

export function rateLimiter(rule: IRateLimitRule) {
  const tokenCache = new LRUCache({
    max: rule?.limit || 50,
    ttl: (rule?.time || 60) * 1000
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];

        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }

        if (!tokenCount?.[0]) {
          tokenCount[0] = 0;
        }

        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        return isRateLimited ? reject() : resolve();
      })
  };
}
