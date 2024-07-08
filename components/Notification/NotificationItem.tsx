import Image from 'next/image';
import React from 'react';
import noavatar from '@/public/images/noavatar.png';
import { SubmitButton } from '../CustomButton/SubmitButton';
import { buttonVariants } from '@/components/ui/button';

export const NotificationItem = () => {
  return (
    <div className="w-full h-[60px] bg-inherit hover:bg-[#121212] flex flex-row justify-between items-center px-4 py-2 gap-x-4">
      <Image
        src={noavatar}
        width={44}
        height={44}
        alt={`profile picture`}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col justify-center h-[36px] py-2 text-sm">
        <p className="">
          <span className="font-bold">addc_ie</span>
          <span className="font-semibold"> &nbsp;started following you.</span>
        <span className="font-medium dark:text-neutral-400">&nbsp;4w</span>
        </p>
      </div>
      <SubmitButton
        className={buttonVariants({
          variant: 'default', //#1877F2
          size: 'sm',
        })}
      >
        Follow
      </SubmitButton>
    </div>
  );
};
