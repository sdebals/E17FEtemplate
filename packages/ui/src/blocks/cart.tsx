'use client';

import clsx from 'clsx';
import type { ReactNode } from 'react';

export interface ICart {
  question: string;
  answer: string | ReactNode;
}

export interface ICartProps {
  title?: string;
  text?: ReactNode | string;
  orderItems: {
    name: string;
    price: number;
    quantity: number;
  }[];
  className?: string;
}

export function Cart({ className, title, text, orderItems }: ICartProps) {
  return (
    <div className={clsx(className)}>
      {title ? <h2>{title}</h2> : null}
      {text ? <div>{text}</div> : null}
      <ul>
        {orderItems.map((orderItem) => (
          <li key={orderItem.name}>
            <div>{orderItem.name}</div>
            <div>{orderItem.price}</div>
            <div>{orderItem.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
