import { MutationType } from './mutation-types';

export default async function mutateCtData<TResponse = unknown, TVariables = undefined>(
  url: MutationType,
  data: TVariables
): Promise<TResponse> {
  const response = await fetch(`/api/commercetools/mutation?type=${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : '{}'
  });
  if (!response.ok || response.status >= 400) {
    throw response;
  }
  const json = await response.json();
  return json as TResponse;
}
