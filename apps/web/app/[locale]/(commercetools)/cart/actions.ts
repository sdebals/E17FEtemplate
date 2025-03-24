'use server';

import { authOptions } from '@/app/api/auth/authOptions';
import {
  type CreateCartAndAddProductMutation,
  CreateCartAndAddProduct,
  type CreateCartAndAddProductMutationVariables,
  GetCartById,
  type GetCartByIdQuery,
  type GetCartByIdQueryVariables,
  type RemoveLineItemFromCartMutation,
  type RemoveLineItemFromCartMutationVariables,
  RemoveLineItemFromCart,
  type AddProductToCartMutation,
  AddProductToCart,
  type AddProductToCartMutationVariables,
  type ChangeQuantityProductMutation,
  type ChangeQuantityProductMutationVariables,
  ChangeQuantityProduct
} from '@repo/commercetools/gql-types';
import ctQuery from '@repo/commercetools/query';
import { getServerSession } from 'next-auth/next';
import { revalidateTag } from 'next/cache';
import { getCartsForCustomer } from '../../../../lib/commercetools/queries';

export const addProductToCart = async (productSku: string, quantity: number) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  const cartsForCustomer = await getCartsForCustomer(session.user?.id);
  let res;
  if (cartsForCustomer.carts.results.length === 0) {
    res = await ctQuery<CreateCartAndAddProductMutation, CreateCartAndAddProductMutationVariables>(
      CreateCartAndAddProduct,
      {
        quantity,
        customerId: session?.user?.id,
        currency: 'USD',
        locale: 'en-GB',
        productSku
      }
    );
  } else {
    const currentCart = cartsForCustomer.carts.results[0];
    if (currentCart?.lineItems.some((lineItem) => lineItem.variant?.sku === productSku)) {
      const currentLineItem = currentCart?.lineItems.find(
        (lineItem) => lineItem.variant?.sku === productSku
      );
      res = await ctQuery<ChangeQuantityProductMutation, ChangeQuantityProductMutationVariables>(
        ChangeQuantityProduct,
        {
          cartId: cartsForCustomer.carts.results[0]!.id,
          version: cartsForCustomer.carts.results[0]!.version,
          lineItemId: currentLineItem!.id,
          quantity: currentLineItem!.quantity + 1
        }
      );
    } else {
      res = await ctQuery<AddProductToCartMutation, AddProductToCartMutationVariables>(
        AddProductToCart,
        {
          id: cartsForCustomer.carts.results[0]!.id,
          version: cartsForCustomer.carts.results[0]!.version,
          productSku
        }
      );
    }
  }

  revalidateTag('cart');
  return res;
};

export const removeLineItemFromCart = async (lineItemId: string, cartId: string) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }
  let resCartById;
  try {
    resCartById = await ctQuery<GetCartByIdQuery, GetCartByIdQueryVariables>(GetCartById, {
      cartId
    });
  } catch (e) {
    console.error(e);
  }

  if (!resCartById || !resCartById.cart || resCartById.cart.customerId !== session?.user?.id) {
    throw new Error('Cart not found');
  }
  try {
    const res = await ctQuery<
      RemoveLineItemFromCartMutation,
      RemoveLineItemFromCartMutationVariables
    >(RemoveLineItemFromCart, {
      id: cartId,
      lineItemId,
      version: resCartById.cart.version
    });
    revalidateTag('cart');
    return res.updateCart?.version;
  } catch (e) {
    console.error(e);
    return 'Error while removing item from cart';
  }
};
