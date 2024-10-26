import Image from 'next/image';
import React from 'react';
import noavatar from '@/public/images/noavatar.png';
import { buttonVariants } from '@/components/ui/button';

export const MessengerFriendItem = () => {
  return (
    <div className="w-full h-[72px] bg-inherit hover:bg-[#121212] flex flex-row justify-start items-center px-5 py-2 gap-x-3">
      <Image
        src={noavatar}
        width={56}
        height={56}
        alt={`profile picture`}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col justify-center items-start h-[36px] text-xs gap-y-2">
          <p className="font-bold">addc_ie</p>
          <p className="font-medium dark:text-neutral-400">Active 2h ago</p>
      </div>
    </div>
  );
};