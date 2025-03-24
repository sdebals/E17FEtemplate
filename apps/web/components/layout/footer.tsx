import type { ISbStory } from '@storyblok/react/rsc';

import { type IFooterProps, Footer as UiFooter } from '@repo/ui/footer';
import { mapLinks } from '@repo/storyblok/utils';

export async function Footer({ siteSettings }: { siteSettings?: ISbStory['data'] }) {
  const footerProps: IFooterProps = {
    message: siteSettings?.story?.content?.footerMessage,
    copyright: siteSettings?.story?.content?.footerCopyright,
    menuLinks: mapLinks(siteSettings?.story?.content?.footerLinks),
    socialLinks: mapLinks(siteSettings?.story?.content?.footerSocialLinks)
  };

  return <UiFooter {...footerProps} />;
}
