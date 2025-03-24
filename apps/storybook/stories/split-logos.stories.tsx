import { Meta, StoryObj } from '@storybook/react';

import { SplitLogos } from '@repo/ui/split-logos';
import { mockedLogos } from '../mocks/images';

const meta = {
  title: 'Blocks/SplitLogos',
  component: SplitLogos,
  args: {} satisfies Meta<typeof SplitLogos>
};

export default meta;

type Story = StoryObj<typeof SplitLogos>;

export const Default: Story = {
  args: {
    title: 'Trusted by the most innovative teams',
    text: (
      <p>
        Fabio vel iudice vincam, sunt in culpa qui officia. Prima luce, cum quibus mons aliud
        consensu ab eo. Nihil hic munitissimus habendi senatus locus, nihil horum?
      </p>
    ),
    logos: mockedLogos,
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
  }
};
