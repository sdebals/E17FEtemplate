'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

export interface ICartActionButton {
  addToCartAction?: ((productSku: string, quantity: number) => Promise<void>) | undefined;
  quantity?: number;
  labels?: Record<'cart', string>;
  sku: string;
}

export function CartActionButton({
  addToCartAction,
  quantity = 0,
  sku,
  labels = {
    cart: 'Cart'
  }
}: ICartActionButton) {
  return (
    <button
      className="text-primary-700 hover:text-primary-900 relative flex items-center gap-x-0.5 rounded-full p-1"
      onClick={async () => {
        await addToCartAction?.(sku, 1);
        toast.success('Product added to cart');
      }}
    >
      <span className="sr-only">{labels.cart}</span>
      <ShoppingBagIcon aria-hidden="true" className="h-6 w-6" />
      {quantity > 0 && <span className="text-sm font-bold">{quantity}</span>}
    </button>
  );
}
