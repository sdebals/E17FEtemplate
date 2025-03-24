'use client';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Link from 'next/link';

import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface ILocale {
  id: string;
  name: string;
}

export interface ILanguageDropdownProps {
  languages: ILocale[];
  activeLanguage?: string;
  labels?: Record<'open' | 'language', string>;
  currentPath?: string;
}

export function LanguageDropdown({
  languages,
  activeLanguage,
  currentPath = '',
  labels = {
    open: 'Open language menu',
    language: 'Language'
  }
}: ILanguageDropdownProps) {
  return (
    <>
      <Menu as="div" className="relative ml-3 hidden md:flex">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">{labels.open}</span>
            <div className="text-primary-700 hover:text-primary-900 flex items-center space-x-1 p-1 align-middle">
              <span className="sr-only">{labels.language}</span>
              <GlobeAltIcon aria-hidden="true" className="h-6 w-6" />
              {activeLanguage && <span className="text-sm">{activeLanguage}</span>}
            </div>
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
        >
          {languages?.map(({ name, id }) => (
            <MenuItem key={id}>
              <Link
                href={`/${id}/${currentPath}`}
                className={clsx(
                  'block px-4 py-2 text-sm data-focus:bg-gray-100',
                  id === activeLanguage ? 'pointer-events-none text-gray-400' : 'text-gray-700'
                )}
              >
                {name}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <div className="mt-3 space-y-1 lg:hidden">
        <div className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute -inset-1.5" />
          <div className="text-primary-700 hover:text-primary-900 flex items-center space-x-1 align-middle">
            <GlobeAltIcon aria-hidden="true" className="h-6 w-6" />
            <span className="text-sm">{labels.language}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1 pl-2 lg:hidden">
        {languages.map(({ name, id }) => (
          <Link
            key={name}
            href={`/${id}/${currentPath}`}
            className={clsx(
              'block py-1 pl-2 text-sm hover:bg-gray-100 hover:text-gray-800',
              id === activeLanguage ? 'pointer-events-none text-gray-400' : 'text-gray-700'
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
