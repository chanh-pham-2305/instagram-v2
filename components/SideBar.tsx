import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { MoreOption, SearchInput } from './index';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { buttonVariants } from './ui/button';
import { Instagram,Heart } from 'lucide-react';

export const SideBar = () => {
  const pathname = usePathname();
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
      <nav className="navContent">
        {sidebarLinks.map((item) => {
          const LinkIcon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              href={item.href}
              key={item.name}
              className={buttonVariants({
                variant: isActive ? 'secondary' : 'ghost',
                className: cn('sidebar-link group transition duration-500', {
                  'hidden md:flex': item.hideOnMobile,
                }),
                size: 'lg',
              })}
            >
              <LinkIcon
                className={cn('w-10 group-hover:scale-110', { 'font-extrabold': isActive })}
              />
              {/* ??? */}
              <p
                className={`${cn('hidden xl:block', {
                  'font-extrabold': isActive,
                })}`}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
      </nav>
      <div className="moreOption">
        <MoreOption />
      </div>
    </section>
  );
};
