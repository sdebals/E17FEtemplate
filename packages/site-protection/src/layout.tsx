import { sans, mono } from '@repo/ui/fonts';
import { notFound } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  if (!process.env.SITE_PROTECTION_SECRET) {
    return notFound();
  }

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
