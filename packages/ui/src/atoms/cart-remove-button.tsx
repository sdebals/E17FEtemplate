'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

export interface ICartRemoveButton {
  removeFromCart?: () => Promise<void>;
}

export function CartRemoveButton({ removeFromCart }: ICartRemoveButton) {
  return (
    <button
      className="text-primary-700 hover:text-primary-900 relative flex items-center gap-x-0.5 rounded-full p-1"
      onClick={async () => {
        await removeFromCart?.();
        toast.success('Product removed from cart');
      }}
    >
      <TrashIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}
