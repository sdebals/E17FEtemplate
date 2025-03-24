import type { ISbStoryData } from '@storyblok/react/rsc';
import type { AssetStoryblok, MultilinkStoryblok } from '../generated/component-types-sb';
import { createHmac } from 'crypto';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assign(obj: any, keyPath: string[], value: any): void {
  const lastKeyIndex = keyPath.length - 1;
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = keyPath[i];
    if (key && !(key in obj)) {
      obj[key] = {};
    }
    if (key) {
      obj = obj[key];
    }
  }
  if (keyPath?.[lastKeyIndex]) {
    obj[keyPath[lastKeyIndex]] = value;
  }
}

/**
 * Removes the base path from a given full path.
 *
 * @param {string} fullPath - The full path from which the base path needs to be removed.
 * @param {string} basePath - The base path to be removed.
 * @return {string} The remaining path after removing the base path. If the full path does not start with the base path, the full path is returned as is.
 */
export function removeBasePath(fullPath: string, basePath: string): string {
  // Ensure basePath starts with "/" and does not end with "/"
  basePath = '/' + basePath.replace(/^\/|\/$/g, '');

  if (fullPath.startsWith(basePath)) {
    // Remove the basePath and return the remaining path
    return fullPath.substring(basePath.length) || '/';
  }

  return fullPath;
}

export function mapStoryblokImage(image?: AssetStoryblok) {
  if (!image) {
    return;
  }

  return {
    src: image.filename,
    alt: image.alt || '',
    width: image.width,
    height: image.height,
    title: image.title
  };
}

export function mapCta(cta: Exclude<MultilinkStoryblok, { linktype?: 'asset' }>) {
  let url = cta.cached_url || cta.url || '#';

  if (cta.linktype === 'asset') {
    url = cta.link.url;
  }

  if (cta.linktype === 'email') {
    url = `mailto:${url}`;
  }

  if (url === 'homepage') {
    url = '/';
  }

  return {
    id: cta.id || url,
    title: cta.title,
    url,
    target: cta.target
  };
}

export function mapLinks(links?: ISbStoryData[]) {
  return (
    links
      ?.map((link) => ({
        label: link.content?.label,
        href: link.content?.link.cached_url || link.content?.link.url,
        icon: link.content?.icon
      }))
      ?.filter((link) => link.label && link.href) || []
  );
}

export function getSignature(body: string, webhookSecret: string) {
  return createHmac('sha1', webhookSecret).update(body).digest('hex');
}

export function isValidSignature(body: string, signature: string, webhookSecret: string) {
  return getSignature(body, webhookSecret) === signature;
}
