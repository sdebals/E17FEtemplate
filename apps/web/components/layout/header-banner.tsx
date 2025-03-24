'use client';

import { type ReactNode, useState } from 'react';

import { Banner } from '@repo/ui/header';

import actionDismissBanner from '@/actions/dismiss-banner';

export function HeaderBanner({
  text,
  labels,
  cookieName
}: {
  text?: ReactNode | string;
  labels: Record<'dismiss', string>;
  cookieName: string;
}) {
  const [visible, setVisible] = useState(true);

  const handleDismiss = async () => {
    setVisible(false);
    await actionDismissBanner({ cookieName });
  };

  if (!visible) {
    return null;
  }

  return <Banner text={text} labels={{ dismiss: labels.dismiss }} onClose={handleDismiss} />;
}
