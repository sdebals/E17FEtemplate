import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

export async function PageComponent({
  blok,
  bridgeOptions = [],
  lang = 'en'
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blok: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bridgeOptions: any;
  lang: string;
}) {
  return (
    <div {...storyblokEditable(blok)}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {blok?.body?.map((nestedBlock: any) => {
        return (
          <StoryblokComponent
            blok={nestedBlock}
            key={nestedBlock._uid}
            lang={lang}
            bridgeOptions={bridgeOptions}
          />
        );
      })}
    </div>
  );
}
