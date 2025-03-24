import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type CartHeaderButtonProps = {
  href: string;
  quantity: number;
};

export function CartHeaderButton({ href, quantity }: CartHeaderButtonProps) {
  return (
    <Link className="group relative" href={href}>
      <ShoppingBagIcon className="text-primary-700 group-hover:text-primary-900 h-7 w-7" />
      {quantity ? (
        <span className="text-primary-700 group-hover:text-primary-900 absolute left-[11px] top-[10px] text-xs">
          {quantity}
        </span>
      ) : null}
    </Link>
  );
}
