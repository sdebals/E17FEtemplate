import { Meta, StoryObj } from '@storybook/react';

import { Hero, IHeroProps } from '@repo/ui/hero';
import { mockImageHero } from '../mocks/images';

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Hero',
  // @ts-expect-error Storybook keeps typing error with async components
  component: Hero,
  args: {} satisfies Meta<typeof Hero>
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    eyebrow: 'Quae vero auctorem tractata ab fiducia',
    heading: 'Ab illo tempore, ab est sed immemorabili.',
    height: 'md',
    image: mockImageHero,
    text: (
      <p>
        Contra legem facit qui id facit quod lex prohibet. Prima luce, cum quibus mons aliud
        consensu ab eo. Petierunt <em>uti sibi concilium totius</em>
        Galliae in diem certam <strong>indicere</strong>.
      </p>
    ),
    cta1: {
      id: 'cta1',
      url: '#',
      title: 'Learn more'
    },
    cta2: {
      id: 'cta2',
      url: '#',
      title: 'Contact us'
    }
  } as IHeroProps
};

export const WithoutCtas: Story = {
  args: {
    eyebrow: 'Quae vero auctorem tractata ab fiducia',
    heading: 'Ab illo tempore, ab est sed immemorabili.',
    height: 'md',
    image: mockImageHero,
    text: (
      <p>
        Contra legem facit qui id facit quod lex prohibet. Prima luce, cum quibus mons aliud
        consensu ab eo. Petierunt uti sibi concilium totius Galliae in diem certam indicere.
      </p>
    )
  } as IHeroProps
};

export const WithXlHeight: Story = {
  args: {
    eyebrow: 'Quae vero auctorem tractata ab fiducia',
    heading: 'Ab illo tempore, ab est sed immemorabili.',
    height: 'xl',
    image: mockImageHero,
    text: (
      <p>
        Contra legem facit qui id facit quod lex prohibet. Prima luce, cum quibus mons aliud
        consensu ab eo. Petierunt uti sibi concilium totius Galliae in diem certam indicere.
      </p>
    )
  } as IHeroProps
};
