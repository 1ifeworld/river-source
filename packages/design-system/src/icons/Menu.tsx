import * as React from 'react';
import { cn } from '../utils';
import { type SvgProps } from './types';

export function Menu({
  width = '15',
  fill = '#393939',
  className,
}: SvgProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M2.8 3.425C2.59289 3.425 2.425 3.59289 2.425 3.8V4.2C2.425 4.40711 2.59289 4.575 2.8 4.575H12.2C12.4071 4.575 12.575 4.40711 12.575 4.2V3.8C12.575 3.59289 12.4071 3.425 12.2 3.425H2.8ZM2.8 6.925C2.59289 6.925 2.425 7.09289 2.425 7.3V7.7C2.425 7.90711 2.59289 8.075 2.8 8.075H12.2C12.4071 8.075 12.575 7.90711 12.575 7.7V7.3C12.575 7.09289 12.4071 6.925 12.2 6.925H2.8ZM2.8 10.425C2.59289 10.425 2.425 10.5929 2.425 10.8V11.2C2.425 11.4071 2.59289 11.575 2.8 11.575H12.2C12.4071 11.575 12.575 11.4071 12.575 11.2V10.8C12.575 10.5929 12.4071 10.425 12.2 10.425H2.8Z'
        fill={fill}
        stroke={fill}
        stroke-width='0.15'
      />
    </svg>
  );
}
