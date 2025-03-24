import Layout from '@repo/site-protection/layout';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
