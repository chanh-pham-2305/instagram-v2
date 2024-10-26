import { cn } from '@/lib/utils';
import { EllipsisVertical, Reply, Smile } from 'lucide-react';
import React from 'react';

type ChatProps = {
  position?: string;
};
export const Chat = ({ position = 'start' }: ChatProps) => {
  return (
    <section
      className={cn(
        'h-[32px] w-full dark:text-white rounded-lg group flex flex-row justify-start overflow-hidden mt-2',
        { 'flex-row-reverse': position === 'end' },
      )}
    >
      <p
        className={cn('h-full text-md bg-[#262626] px-2 rounded-lg flex items-center', {
          'bg-[#3797F0]': position === 'end',
        })}
      >
        Dang lam gi do?
      </p>
      <div
        className={cn(
          'h-full flex flex-row justify-start items-center opacity-0 group-hover:opacity-100',
          { 'flex-row-reverse': position === 'end' },
        )}
      >
        <Smile className="w-6 h-6 rounded-full p-1" />
        <Reply className="w-6 h-6 rounded-full p-1" />
        <EllipsisVertical className="w-6 h-6 rounded-full p-1" />
      </div>
    </section>
  );
};
