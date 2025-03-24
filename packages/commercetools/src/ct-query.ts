import type { GraphQLVariablesMap } from '@commercetools/platform-sdk';
import type { DocumentNode } from 'graphql';
import { apiRoot, projectKey } from './client';
import { CTGraphQLError } from './ct-error';

// ctQuery can be used with SSR
// use fetchCtData on client side

export default async function ctQuery<TData, TVariables extends GraphQLVariablesMap>(
  query: DocumentNode,
  variables?: TVariables
): Promise<TData> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const queryBody = query.loc?.source.body!;

  const response = await apiRoot
    .withProjectKey({ projectKey })
    .graphql()
    .post({
      body: { query: queryBody, variables }
    })
    .execute();
  if (response.statusCode !== 200 || response.body.errors) {
    throw new CTGraphQLError(response.body.errors);
  }

  return response.body.data;
}
