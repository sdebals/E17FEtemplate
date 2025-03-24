import { lazy, Suspense } from 'react';

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: 'x' | 'instagram' | 'facebook' | 'youtube' | 'linkedin' | 'github';
}

const iconMap: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [_key in IIconProps['name']]: () => Promise<{ default: any }>;
} = {
  github: () => import('./icons/GithubIcon'),
  instagram: () => import('./icons/InstagramIcon'),
  x: () => import('./icons/XIcon'),
  youtube: () => import('./icons/YoutubeIcon'),
  linkedin: () => import('./icons/LinkedinIcon'),
  facebook: () => import('./icons/FacebookIcon')
};

/**
 * A React component that lazily loads and renders an icon based on the provided name.
 *
 * @param {IIconProps} name - The name of the icon to render (e.g. "github", "instagram", etc.)
 * @param {React.SVGProps<SVGSVGElement>} props - Additional props to pass to the rendered icon component
 * @return {JSX.Element} The rendered icon component, or a fallback loading animation if the icon is not yet loaded
 */
export function Icon({ name, ...props }: IIconProps) {
  const IconComponent = lazy(iconMap[name]);

  return (
    <Suspense
      fallback={
        <span className="inline-flex h-8 w-8 animate-ping rounded-full bg-gray-300 opacity-75"></span>
      }
    >
      <IconComponent {...props} />
    </Suspense>
  );
}
