import clsx from 'clsx';
import type { ReactNode } from 'react';

export async function ColorCards() {
  return (
    <section className="mt-48 flex flex-col flex-wrap gap-x-16 gap-y-16 lg:flex-row">
      <div className="border bg-sky-950 p-16">bg-primary</div>
      <div className="bg-primary-100 border p-16">bg-primary-100</div>
      <h1 className="text-primary">Heading 1</h1>
    </section>
  );
}
