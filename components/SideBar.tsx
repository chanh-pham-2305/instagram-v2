import Link from 'next/link';
import React from 'react';
import { MoreOption, NavContent, ProfileLink, SearchInput } from './index';
import { Instagram,Heart } from 'lucide-react';
import { auth } from '@/auth';

export const SideBar = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <section className="sidebar">
      <div className="topNav">
        <Link
          href="/"
        >
          <h1 className="text-[16px] font-extrabold ml-4 max-[560px]:ml-2 max-[560px]:text-[10px] ">Instagram v2</h1>
        </Link>
        <div className='right-topNav'>
          <SearchInput />
          <Heart className='w-10 px-2 hover:scale-110 cursor-pointer'/>
        </div>
      </div>
      <Link
        href="/"
        className="sidebar-logo"
      >
        <Instagram className="w-10" />
        <h1 className="hidden text-[16px] font-extrabold xl:block">Instagram v2</h1>
      </Link>
      <NavContent />
      <div className='w-full flex flex-row gap-3 xl:!justify-start'>
        {user && <ProfileLink user={user} />}
      </div>
      <div className="moreOption">
        <MoreOption />
      </div>
    </section>
  );
};
