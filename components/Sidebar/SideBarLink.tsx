import React, { memo } from 'react';
import { LucideIcon } from 'lucide-react';
import TooltipData from './TooltipData';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useDrawer, DRAWER } from './SideBarProvider';

type SideBarLinkProps = {
  name: string;
  href: string;
  icon: LucideIcon;
  type: string;
};

const SideBarLink = ({ item, pathname }: { item: SideBarLinkProps; pathname: string }) => {
  const { drawer } = useDrawer();
  const LinkIcon = item.icon;
  const typeLink = item.type;
  const isActive =
    (typeLink === 'Link' && pathname === item.href) || pathname.startsWith(`${item.href}/`);
  const isOpenDrawer = drawer === 2 || drawer === 3;
  return (
    <TooltipData
      data={item.name}
      className="xl:hidden"
    >
      <Link
        href={item.href}
        key={item.name}
        className={cn(buttonVariants({
          variant: 'ghost',
          className: 'sidebar-link group',
          size: 'lg',
        }),{'!w-12': isOpenDrawer})}
      >
        <LinkIcon
          className={cn('w-6 group-hover:scale-120', {
            'font-extrabold': isActive,
          })}
        />
        <p
          className={`${cn('hidden xl:pl-4 xl:block', {
            'font-extrabold': isActive,
            '!hidden': isOpenDrawer,
          })}`}
        >
          {item.name}
        </p>
      </Link>
    </TooltipData>
  );
};

export default memo(SideBarLink);
