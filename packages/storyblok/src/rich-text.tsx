import Link from 'next/link';
import { StoryblokComponent } from '@storyblok/react/rsc';

import {
  render,
  MARK_LINK,
  type RenderOptions,
  NODE_IMAGE
} from 'storyblok-rich-text-react-renderer';
import { SbImage } from './image';
import type { RichtextStoryblok } from '../generated/component-types-sb';

interface IRichTextProps {
  document?: RichtextStoryblok;
  resolvers?: {
    blokResolvers?: RenderOptions['blokResolvers'];
    markResolvers?: RenderOptions['markResolvers'];
    nodeResolvers?: RenderOptions['nodeResolvers'];
  };
  lang?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bridgeOptions?: any;
}

export async function RichText({
  document,
  lang = '',
  resolvers = {},
  bridgeOptions = {}
}: IRichTextProps) {
  if (!document?.content) {
    return null;
  }

  const { blokResolvers, markResolvers, nodeResolvers } = resolvers;

  const defaultMarkResolvers: RenderOptions['markResolvers'] = {
    [MARK_LINK]: (children, props) => {
      const { linktype, href, target, anchor } = props;

      const linkProps: Record<string, string> = {};

      if (!href) {
        return <>{children}</>;
      }

      if (linktype === 'email') {
        return <a href={`mailto:${href}`}>{children}</a>;
      }

      if (href.match(/^(https?:)?\/\//)) {
        return (
          <a href={`${href}${anchor ? `#${anchor}` : ''}`} target="_blank">
            {children}
          </a>
        );
      }

      if (target) {
        linkProps['target'] = target;
      }

      let parsedHref = href;

      if (anchor) {
        parsedHref = `${parsedHref}#${anchor}`;
      }

      if (lang && !parsedHref.startsWith(`/${lang}`)) {
        parsedHref = `/${lang}/${parsedHref}`;
      }

      return (
        <Link href={parsedHref.replace(/\/\//g, '')} {...linkProps}>
          {children}
        </Link>
      );
    }
  };

  const defaultNodeResolvers: RenderOptions['nodeResolvers'] = {
    [NODE_IMAGE]: (_, props) => {
      // @ts-expect-error - id is present but not defined in the type definition!
      const { id, src, alt = '', title } = props;

      if (!src) {
        return null;
      }

      return (
        <>
          <SbImage
            src={src}
            alt={alt}
            width={960}
            height={540}
            className="ui-image"
            aria-describedby={`img-${id}`}
          />
          {title && (
            <span id={`img-${id}`} className="ui-caption">
              {title}
            </span>
          )}
        </>
      );
    }
  };

  const defaultBlokResolvers: RenderOptions['blokResolvers'] = {};

  return render(document, {
    markResolvers: { ...defaultMarkResolvers, ...markResolvers },
    nodeResolvers: { ...defaultNodeResolvers, ...nodeResolvers },
    blokResolvers: { ...defaultBlokResolvers, ...blokResolvers },
    defaultBlokResolver: (name, props) => {
      const blok = { ...props, component: name };

      return (
        <StoryblokComponent
          blok={blok}
          key={props._uid}
          lang={lang}
          bridgeOptions={bridgeOptions}
        />
      );
    }
  });
}
