import {
  type CartsForCustomerQuery,
  type CartsForCustomerQueryVariables,
  CartsForCustomer
} from '@repo/commercetools/gql-types';
import ctQuery from '@repo/commercetools/query';
import { unstable_cache } from 'next/cache';

// export const getCartsForCustomer = (userId: string) => {
export const getCartsForCustomer = unstable_cache(
  async (userId: string) => {
    return await ctQuery<CartsForCustomerQuery, CartsForCustomerQueryVariables>(CartsForCustomer, {
      where: `customerId="${userId}"`,
      locale: 'en-GB'
    });
  },
  ['getCartsForCustomer'],
  {
    tags: ['cart']
  }
);
//   return cartsForCustomer();
// };
