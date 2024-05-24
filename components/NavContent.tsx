import React from 'react';
import { sidebarLinks } from '@/constants';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavContent = () => {
  const pathname = usePathname();
  return (
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
  );
};
