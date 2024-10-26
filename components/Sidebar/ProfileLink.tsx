import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { User } from 'next-auth';
import { UserAvatar } from '@/components/index';
import { DRAWER, useDrawer } from './SideBarProvider';

export const ProfileLink = ({ user }: { user: User }) => {
  const pathname = usePathname();

  const href = `/${user.username}`;
  const isActive = pathname === href;
  const { drawer } = useDrawer();
  const isOpenDrawer = drawer === 2 || drawer === 3 || drawer === 5;

  return (
    <Link
      href={href}
      className={cn(buttonVariants({
        variant: 'ghost',
        className: 'sidebar-link group',
        size: 'lg',
      }),{'w-12': isOpenDrawer})}
    >
      <UserAvatar
        userAvatar={user}
        className={`w-6 h-6 ${isActive && 'border-2 border-white'}`}
      />

      <p
        className={`${cn('hidden xl:pl-4 xl:block', {
          'font-extrabold': isActive,
          '!hidden xl:pl-0': isOpenDrawer,
        })}`}
      >
        Profile
      </p>
    </Link>
  );
};
