'use client';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';
import { UserIcon as UserIconSolid } from '@heroicons/react/24/solid';

export interface IAccountDropdownProps {
  userNavigation: {
    label: string;
    href: string;
    onClick?: () => void;
  }[];
  labels?: Record<'open' | 'account', string>;
  loggedIn?: boolean;
}

export function AccountDropdown({
  userNavigation,
  loggedIn = false,
  labels = {
    open: 'Open user menu',
    account: 'Account'
  }
}: IAccountDropdownProps) {
  return (
    <>
      <Menu as="div" className="relative ml-3 hidden md:flex">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">{labels.open}</span>
            <div className="text-primary-700 hover:text-primary-900 p-1">
              <span className="sr-only">{labels.account}</span>
              {loggedIn ? (
                <UserIconSolid aria-hidden="true" className="h-6 w-6" />
              ) : (
                <UserIcon aria-hidden="true" className="h-6 w-6" />
              )}
            </div>
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
        >
          {userNavigation?.map(({ label, href, onClick }) => (
            <MenuItem key={label}>
              <Link
                href={href}
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                onClick={() => onClick?.()}
              >
                {label}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <div className="mt-3 space-y-1 lg:hidden">
        <div className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">{labels.open}</span>
          <div className="text-primary-700 hover:text-primary-900 flex items-center space-x-1 align-middle">
            {loggedIn ? (
              <UserIconSolid aria-hidden="true" className="h-6 w-6" />
            ) : (
              <UserIcon aria-hidden="true" className="h-6 w-6" />
            )}
            <span className="text-sm">{labels.account}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1 pl-2 lg:hidden">
        {userNavigation.map(({ label, href, onClick }) => (
          <Link
            key={label}
            href={href}
            className="block py-2 pl-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            onClick={() => onClick?.()}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
