'use client'
import Image from 'next/image';
import React from 'react';
import noavatar from '@/public/images/noavatar.png';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import MessengerInput from './MessengerInput';
import { MessengerHeader } from './MessengerHeader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Chat } from './Chat';

export const MessengerDetail = ({username}:{username:string}) => {
  return (
    <section className="w-full h-full flex-1 flex flex-col items-center">
      <MessengerHeader username={username}/>
      <div className="mt-5 w-full h-[calc(100vh-192px)]">
        <ScrollArea className="h-full flex flex-col gap-y-4 px-4">
          <div className="w-full h-[254px] flex flex-col items-center p-5 gap-y-2">
            <Image
              src={noavatar}
              width={96}
              height={96}
              alt={`profile picture`}
              className="rounded-full object-cover"
            />
            <p className="font-bold text-md">Pham Cong Chanh</p>
            <p className="font-medium text-xs dark:text-neutral-400">pcc.chanh235</p>
            <Link
              href="/"
              className={buttonVariants({
                variant: 'secondary',
                size: 'sm',
                className: 'mt-4',
              })}
            >
              View profile
            </Link>
          </div>
          <Chat />
          <Chat />
          <Chat />
          <Chat position="end" />
          <Chat position="end" />
          <Chat position="end" />
          <Chat />
          <Chat position="end" />
          <Chat />
          <Chat position="end" />
          <Chat />
          <Chat />
          <Chat position="end" />
          <Chat position="end" />
          <Chat position="end" />
          <Chat />
          <Chat />
          <Chat position="end" />
          <Chat position="end" />
          <Chat position="end" />
          <Chat />
          <Chat />
          <Chat position="end" />
          <Chat position="end" />
          <Chat position="end" />
        </ScrollArea>
      </div>
      <MessengerInput />
    </section>
  );
};
