import { createClient, type RedisClientType } from 'redis';

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const config = {
  host: REDIS_HOST,
  port: REDIS_PORT ? parseInt(REDIS_PORT) : undefined,
  password: REDIS_PASSWORD
};

class RedisService {
  private static instance: RedisService;
  private client: RedisClientType;

  private constructor() {
    this.client = createClient(config);
    this.client.on('error', (err) => console.error('[Redis]: Client Error', err));
    console.info(`[REDIS] Connecting Redis client on ${REDIS_HOST}:${REDIS_PORT} ...`);
    this.client.connect();
  }

  public static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return RedisService.instance;
  }

  getClient() {
    return this.client;
  }
}

export const getRedisClient = () => RedisService.getInstance().getClient();
