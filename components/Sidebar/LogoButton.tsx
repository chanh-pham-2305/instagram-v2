import React, { memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { DRAWER, useDrawer } from './SideBarProvider';

const LogoButton = () => {
  const { drawer } = useDrawer();
  return (
    <Link
      href="/"
      className={buttonVariants({
        className: cn('hidden md:mt-2 md:sidebar-link group',{'xl:w-12': drawer !== 4}),
        variant: 'ghost',
        size: 'lg',
      })}
    >
      <Instagram
        className={cn('w-6 group-hover:scale-120 xl:hidden', { '!block': drawer !== 4 })}
      />
      <h1
        className={cn('text-[14px] font-extrabold md:hidden xl:block', {
          '!hidden': drawer !== 4,
        })}
      >
        Instagram v2
      </h1>
    </Link>
  );
};

export default memo(LogoButton);
