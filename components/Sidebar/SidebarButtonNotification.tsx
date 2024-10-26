import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import TooltipData from './TooltipData';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDrawer, DRAWER } from './SideBarProvider';

const SidebarButtonNotification = () => {
  // console.log('render noti');
  const { drawer, handleDrawer } = useDrawer();
  const handleClick = () => {
    // console.log('click Notification');

    if (drawer === 3) return handleDrawer(4);
    if (drawer === 1 || drawer === 2 || drawer === 4) return handleDrawer(3);
  };

  const isOpenNotification = drawer === 3;
  const isOpenDrawer = drawer === 2 || drawer === 3 || drawer === 5;

  return (
    <TooltipData
      data="Search"
      className="xl:hidden"
    >
      <Button
        onClick={handleClick}
        variant="ghost"
        size="lg"
        className={cn('sidebar-link group', {
          'border border-white !w-12': isOpenNotification,
        })}
      >
        <Heart className="w-6 group-hover:scale-120 " />

        <p className={cn('hidden xl:pl-4 xl:block', { '!hidden xl:pl-0': isOpenDrawer })}>
          Notification
        </p>
      </Button>
    </TooltipData>
  );
};
export default memo(SidebarButtonNotification);
