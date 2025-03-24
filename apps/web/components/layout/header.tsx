import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';

import type { ISbStory } from '@storyblok/react/rsc';

import { locales } from '@/i18n/locales';
import { mapStoryblokImage, mapLinks } from '@repo/storyblok/utils';
import { CartHeaderButton } from '@repo/ui/cart-header-button';
import { AccountDropdown, LanguageDropdown, Header as UiHeader } from '@repo/ui/header';
import { RichText } from '@repo/storyblok/rich-text';
import { HeaderBanner } from './header-banner';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { getCartsForCustomer } from '@/lib/commercetools/queries';
import { SearchActionButton } from '@repo/ui/search-action-button';

export async function Header({
  siteSettings,
  locale
}: {
  siteSettings?: ISbStory['data'];
  locale: string;
}) {
  const cookieStore = await cookies();
  const session = await getServerSession(authOptions);
  const cartsForCustomers = session?.user?.id
    ? await getCartsForCustomer(session?.user?.id)
    : undefined;
  const quantitiesInCarts = cartsForCustomers?.carts.results.map((cart) =>
    cart?.lineItems.reduce((acc, item) => acc + item.quantity, 0)
  )?.[0];
  const t = await getTranslations({ locale, namespace: 'header' });

  const siteLogo = mapStoryblokImage(siteSettings?.story?.content?.siteLogo);
  const mainMenuLinks = mapLinks(siteSettings?.story?.content?.headerLinks);

  const userNavigation = [
    { label: 'Login', href: `/${locale}/account/login` },
    { label: 'Create account', href: `/${locale}/account/create` }
  ];

  // Depending on the needs, you can change/add more elements here or an empty array
  // You should also have your own logic from web/components that wrap the UI components
  // Perhaps using context providers, etc.
  const actionComponents = [
    <SearchActionButton href="/search" key="search" />,
    <LanguageDropdown
      key="language"
      activeLanguage={locale}
      languages={locales.map((loc) => ({ id: loc, name: t(`language.${loc}`) }))}
      labels={{ open: t('language.open'), language: t(`language.language`) }}
    />,
    <AccountDropdown
      key="account"
      loggedIn={false}
      userNavigation={userNavigation}
      labels={{ open: t('user.open'), account: t('user.account') }}
    />,
    <CartHeaderButton key="cart" href="/cart" quantity={quantitiesInCarts ?? 0} />
  ];

  const headerProps = {
    siteName: siteSettings?.story?.content?.siteName,
    logo: {
      src: siteLogo?.src || '',
      alt: siteLogo?.alt || siteSettings?.story?.content?.siteName || '',
      width: 450,
      height: 180
    },
    mainMenuLinks: mainMenuLinks || [],
    labels: {
      navLabel: t('labels.navLabel'),
      open: t('labels.open'),
      close: t('labels.close')
    },
    actionComponents
  };

  const banner = siteSettings?.story?.content?.banner;
  const date = siteSettings?.story?.published_at?.replace(/[-:.TZ]/g, '');
  const cookie = cookieStore.get(`banner-${date}`)!;

  return (
    <>
      {banner && !cookie?.value && (
        <HeaderBanner
          text={<RichText document={banner} />}
          labels={{ dismiss: t('banner.dismiss') }}
          cookieName={`banner-${date}`}
        />
      )}
      <UiHeader {...headerProps} />
    </>
  );
}
