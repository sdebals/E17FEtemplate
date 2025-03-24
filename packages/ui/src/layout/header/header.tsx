'use client';

import { type ReactNode, useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export interface IHeaderProps {
  siteName: string;
  logo?: ImageProps;
  mainMenuLinks: {
    label: string;
    href: string;
  }[];
  actionComponents?: ReactNode[];
  labels: Record<'navLabel' | 'open' | 'close', string>;
}

export function Header({
  siteName,
  logo,
  mainMenuLinks,
  actionComponents,
  labels = {
    navLabel: 'Global',
    open: 'Open main menu',
    close: 'Close menu'
  }
}: IHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label={labels.navLabel}
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            {logo?.src && (
              <Image
                alt={logo.alt || ''}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto"
                priority
              />
            )}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{labels.open}</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {mainMenuLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-primary-700 hover:border-primary-700 text-sm font-semibold leading-6 hover:border-b"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center align-middle lg:flex lg:flex-1 lg:justify-end">
          {actionComponents}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{siteName}</span>
              {logo?.src && (
                <Image
                  alt={logo.alt || ''}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto"
                  priority
                  unoptimized
                />
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">{labels.close}</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainMenuLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-primary-700 -mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 hover:bg-gray-50"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-y-2 py-6">{actionComponents}</div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
