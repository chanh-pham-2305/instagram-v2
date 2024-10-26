import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { Info, Phone, Video } from 'lucide-react';
import noavatar from '@/public/images/noavatar.png';

export const MessengerHeader = ({username}:{username:string}) => {
  return (
    <section className="w-full h-[76px] flex flex-row justify-between items-center border border-b-[1px] p-2.5">
      <div className="h-[56px] flex flex-1 flex-row justify-start items-center py-2">
        <Image
          src={noavatar}
          width={44}
          height={44}
          alt={`profile picture`}
          className="rounded-full object-cover m-1.5"
        />
        <div className="flex flex-col justify-center h-[36px] px-2">
          <p className="font-bold text-sm">{username}</p>
          <p className="font-medium text-xs dark:text-neutral-400">Active 34m ago</p>
        </div>
      </div>
      <Link
        href='/direct/phone'
        className='w-10 h-10 flex justify-center items-center'
      >
      <Phone
        width={24}
        height={24}
      />
      </Link>
      <Link
        href='/direct/video'
        className='w-10 h-10 flex justify-center items-center'
      >
      <Video
        width={24}
        height={24}
      />
      </Link>
      <Link
        href='/direct/info'
        className='w-10 h-10 flex justify-center items-center'
      >
      <Info
        width={24}
        height={24}
      />
      </Link>
    </section>
  );
};
