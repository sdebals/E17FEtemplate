import clsx from 'clsx';
import { tv } from 'tailwind-variants';

export interface ISkeletonProps {
  className?: string;
}

const tvSkeleton = tv({
  slots: {
    container: 'max-w-sm animate-pulse'
  }
});

export async function Skeleton({ className }: ISkeletonProps) {
  const classes = tvSkeleton();

  return (
    <div role="status" className={clsx(classes.container(), className)}>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-300" />
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-300" />
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
      <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-300" />
      <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-300" />
      <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-300" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
