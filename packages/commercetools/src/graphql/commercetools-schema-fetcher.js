const { buildClientSchema } = require('graphql');
const base64 = require('base-64');
require('dotenv').config({ path: '.env.local' });

module.exports = async (_, config) => {
  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');
  body.append('scope', process.env.COMMERCETOOLS_SCOPES);

  const tokenResponse = await fetch(`${process.env.COMMERCETOOLS_AUTH_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64.encode(
        `${process.env.COMMERCETOOLS_CLIENT_ID}:${process.env.COMMERCETOOLS_CLIENT_SECRET}`
      )}`
    },
    body
  });

  const json = await tokenResponse.json();

  const graphqlSchemaResponse = await fetch(
    `${process.env.COMMERCETOOLS_API_URL}/${process.env.COMMERCETOOLS_PROJECT_KEY}/graphql`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${json.access_token}`,
        'Content-Type': 'application/json'
      },
      body: '{"query":"query IntrospectionQuery{__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}"}'
    }
  );

  const schemaJson = await graphqlSchemaResponse.json();

  return buildClientSchema(schemaJson.data);
};
