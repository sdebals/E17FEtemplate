import { headers } from 'next/headers';

import { rateLimiter } from '@repo/rate-limiter/redis';

const limiter = rateLimiter({
  limit: 5,
  time: 10
});

// Example for Redis rate limiter, adapt to your needs

export async function GET() {
  const headersList = await headers();

  const ip = (headersList.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] as string;

  try {
    await limiter.check(ip);
  } catch {
    return new Response('Too many requests', { status: 429 });
  }

  return new Response('OK');
}
