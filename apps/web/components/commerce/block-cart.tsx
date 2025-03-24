import { Cart, type ICartProps } from '@repo/ui/cart';
import ctQuery from '@repo/commercetools/query';
import {
  CartById,
  type CartByIdQuery,
  type CartByIdQueryVariables
} from '@repo/commercetools/gql-types';

export async function BlockCart() {
  const cart = await ctQuery<CartByIdQuery, CartByIdQueryVariables>(CartById, {
    cartId: '133ad2eb-90bf-4fa7-b88f-05b61619c52f'
  });
  const cartProps: ICartProps = {
    title: 'Cart',
    orderItems:
      cart.cart?.lineItems.map((item) => ({
        name: item.nameAllLocales[0]?.value ?? 'Product name fallback',
        price: item.price?.value.centAmount,
        quantity: item.quantity
      })) ?? [],
    text: 'This is your cart'
  };

  return <Cart {...cartProps} />;
}
