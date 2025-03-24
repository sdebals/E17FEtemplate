import { apiRoot } from '@repo/commercetools/client';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: ({ token, user }) => {
      return {
        ...token,
        id: user?.id ?? token.id ?? '',
        user
      };
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = (token.id as string) ?? '';
      }
      return session;
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email Address',
          type: 'text',
          placeholder: 'Email Address'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password'
        }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const authRequest = apiRoot
          .withProjectKey({ projectKey: process.env.COMMERCETOOLS_PROJECT_KEY! })
          .login()
          .post({
            body: {
              email: credentials.email,
              password: credentials.password
            }
          });

        const authResponse = await authRequest.execute();
        if (authResponse.statusCode?.toString().startsWith('2')) {
          return authResponse.body.customer;
        }
        return null;
      }
    })
  ]
};
