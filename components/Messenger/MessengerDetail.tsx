import Image from 'next/image';
import React from 'react';
import noavatar from '@/public/images/noavatar.png';
import { Info, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export const MessengerDetail = () => {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="w-full h-[75px] justify-between items-center border border-b-[1px]">
        <div className="w-full h-[56px] bg-inherit flex flex-row justify-start items-center px-4 py-2 gap-x-4">
          <Image
            src={noavatar}
            width={44}
            height={44}
            alt={`profile picture`}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center h-[36px] py-2 text-sm self-stretch">
            <p className="font-bold">Pham Cong Chanh</p>
            <p className="font-medium dark:text-neutral-400">Active 34m ago</p>
          </div>
        </div>
        <Phone
          width={10}
          height={10}
        />
        <Video
          width={10}
          height={10}
        />
        <Info
          width={10}
          height={10}
        />
      </div>
      <div className="mt-5 w-full h-full flex flex-row">
        <div className="w-full h-[254px] flex flex-col items-center">
          <Image
            src={noavatar}
            width={96}
            height={96}
            alt={`profile picture`}
            className="rounded-full object-cover"
          />
          <p className="font-bold">Pham Cong Chanh</p>
          <p className="font-medium dark:text-neutral-400">pcc.chanh235</p>
          <Link
            href="/"
            className={buttonVariants({
              variant: 'ghost',
              size: 'lg',
            })}
          >
            {' '}
            View profile
          </Link>
        </div>
        Messenger Content
      </div>
      <div className="">Messenger Textbox</div>
    </section>
  );
};
