export type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'w-full';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'h-full';
export type Color =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'gray'
  | 'black'
  | 'white'
  | 'slate'
  | 'none';

export interface ICta {
  id: string;
  url: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  anchor?: string;
  target?: string;
}
