import { CacheHandler } from '@neshca/cache-handler';
import createLruHandler from '@neshca/cache-handler/local-lru';
import createRedisHandler from '@neshca/cache-handler/redis-stack';
import { createClient } from 'redis';

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const config = {
  host: REDIS_HOST,
  port: REDIS_PORT ? parseInt(REDIS_PORT) : undefined,
  password: REDIS_PASSWORD
};

CacheHandler.onCreation(async ({ buildId }) => {
  let client;

  try {
    // Create a Redis client.
    client = createClient(config);

    // Redis won't work without error handling.
    client.on('error', (err) => console.error('[REDIS]: Client Error', err));
  } catch (error) {
    console.warn('[REDIS] Failed to create Redis client:', error);
  }

  if (client) {
    try {
      console.info(`[REDIS] Connecting Redis client on ${REDIS_HOST}:${REDIS_PORT} ...`);

      // Wait for the client to connect.
      // Caveat: This will block the server from starting until the client is connected.
      // And there is no timeout. Make your own timeout if needed.
      await client.connect();
      console.info('[REDIS] Redis client connected.');
    } catch (error) {
      console.warn('[REDIS] Failed to connect Redis client:', error);
      console.warn('[REDIS] Disconnecting the Redis client...');
      // Try to disconnect the client to stop it from reconnecting.
      client
        .disconnect()
        .then(() => {
          console.info('[REDIS] Redis client disconnected.');
        })
        .catch(() => {
          console.warn('[REDIS] Failed to quit the Redis client after failing to connect.');
        });
    }
  }

  /** @type {import("@neshca/cache-handler").Handler | null} */
  let handler;

  if (client?.isReady) {
    // Create the `redis-stack` Handler if the client is available and connected.
    handler = await createRedisHandler({
      client,
      keyPrefix: `next:cache:${buildId}:`,
      timeoutMs: 1000
    });
  } else {
    // Fallback to LRU handler if Redis client is not available.
    // The application will still work, but the cache will be in memory only and not shared.
    handler = createLruHandler();
    console.warn('[REDIS] Falling back to LRU handler because Redis client is not available.');
  }

  return {
    handlers: [handler],
    ttl: { estimateExpireAge: (staleAge) => staleAge * 2 } // 2x the stale age
  };
});

export default CacheHandler;
