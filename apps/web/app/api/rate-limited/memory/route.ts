import { headers } from 'next/headers';

import { rateLimiter } from '@repo/rate-limiter/memory';

const limiter = rateLimiter({
  time: 10
});

// Example for Memory cache rate limiter, adapt to your needs

export async function GET() {
  const headersList = await headers();

  const ip = (headersList.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] as string;

  try {
    await limiter.check(10, ip);
  } catch {
    return new Response('Too many requests', { status: 429 });
  }

  return new Response('OK');
}
