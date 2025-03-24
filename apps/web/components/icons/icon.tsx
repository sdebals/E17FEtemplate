import { type SVGProps } from 'react';
import type { IconName } from './names';
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
