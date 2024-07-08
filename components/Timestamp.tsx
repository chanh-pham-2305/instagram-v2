import React from 'react';
import { cn } from '@/lib/utils';
import ReactTimeago from 'react-timeago';

type Props = {
  createdAt: Date;
  className?: string;
};

export const Timestamp = ({ createdAt, className }: Props) => {
  return (
    <ReactTimeago
      className={cn('font-medium text-neutral-500 dark:text-neutral-400 text-xs', className)}
      date={createdAt}
      formatter={(value, unit, suffix, epochMiliseconds, nextFormatter) => {
        // Example: if its 7 min, return "7m", if its 7 hours, return "7h" like that
        const timeUnit = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
        if (unit && timeUnit.includes(unit)) {
          return `${value}${unit[0]}`;
        } else {
          return nextFormatter?.(value, unit, suffix, epochMiliseconds);
        }
      }}
    />
  );
};
