import Link from 'next/link';
import { Icon, type IIconProps } from '../../atoms/icons';

export interface IFooterProps {
  menuLinks?: { label: string; href: string }[];
  socialLinks?: { label: string; href: string; icon: IIconProps['name'] }[];
  message?: string;
  copyright?: string;
}

export async function Footer({ menuLinks, socialLinks, message, copyright }: IFooterProps) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
          {menuLinks?.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialLinks?.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{label}</span>
              <Icon name={icon} className="h-8 w-8" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-gray-500">{message}</p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">{copyright}</p>
      </div>
    </footer>
  );
}
