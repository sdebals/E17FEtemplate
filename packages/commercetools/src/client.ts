import {
  createClient,
  createHttpClient,
  createAuthForClientCredentialsFlow
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

require('dotenv').config({ path: '../.env.local' });

export const projectKey = process.env.COMMERCETOOLS_PROJECT_KEY!;

const getClient = () => {
  const authMiddleware = createAuthForClientCredentialsFlow({
    host: process.env.COMMERCETOOLS_AUTH_URL!,
    projectKey,
    scopes: process.env.COMMERCETOOLS_SCOPES?.split(' ') ?? [],
    credentials: {
      clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
      clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!
    },
    fetch
  });

  const httpMiddleware = createHttpClient({
    host: process.env.COMMERCETOOLS_API_URL!,
    fetch
  });

  const ctpClient = createClient({
    middlewares: [authMiddleware, httpMiddleware]
  });

  return ctpClient;
};

export const apiRoot = createApiBuilderFromCtpClient(getClient());
