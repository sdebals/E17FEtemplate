import type { ReactNode } from 'react';

export async function RichTextBlock({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-hidden bg-white py-32 text-gray-700">
      <div className="rich-text prose [&_h2]:text-primary-700 [&_h3]:text-primary-700 mx-auto w-full max-w-5xl [&_h4]:text-gray-700">
        {children}
      </div>
    </div>
  );
}
