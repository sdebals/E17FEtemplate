import type { GraphQLError } from '@commercetools/platform-sdk';

export class CTGraphQLError extends Error {
  public graphqlErrors: GraphQLError[] | undefined;

  constructor(graphqlErrors?: GraphQLError[]) {
    super(
      graphqlErrors?.map((error) => error.message).join('\n') ?? 'Unable to execute graphql query'
    );
    this.graphqlErrors = graphqlErrors;
  }
}
