import { authOptions } from '@/app/api/auth/authOptions';
import ProductCard from '@repo/ui/product-card';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { removeLineItemFromCart } from './actions';
import { getCartsForCustomer } from '../../../../lib/commercetools/queries';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Cart() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login?callbackUrl=/cart');
  }

  const cartsForCustomer = await getCartsForCustomer(session.user?.id);

  return (
    <div className="flex flex-col gap-y-4 px-4">
      <h1 className="text-center text-2xl font-bold">Your carts</h1>
      {cartsForCustomer.carts.results.flatMap((el) => el.lineItems).length === 0 ? (
        <span className="text-center">No carts yet</span>
      ) : (
        cartsForCustomer.carts.results.map((cart) => (
          <div key={cart.id}>
            {cart.lineItems.map((lineItem) => (
              <ProductCard
                isInCart
                key={lineItem.id}
                sku={lineItem.variant?.sku || ''}
                name={lineItem.name}
                quantity={lineItem.quantity}
                removeLineItemFromCartAction={async () => {
                  'use server';
                  await removeLineItemFromCart(lineItem.id, cart.id);
                }}
              />
            ))}
          </div>
        ))
      )}
      <Link className="text-center underline" href="/products">
        Add products now
      </Link>
    </div>
  );
}
