import React, { memo } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { SearchInput } from './SearchInput';
import { cn } from '@/lib/utils';
import { NotificationItem } from '../Notification/NotificationItem';
import { useDrawer } from './SideBarProvider';

const Drawer = () => {
  console.log('render Drawer page')
  const { drawer } = useDrawer();
  const isSearchButton = drawer === 2;
  const isOpenDrawer = drawer === 2 || drawer === 3;

  return (
    <section
      className={cn(
        'h-full w-[396px] dark:bg-dark flex flex-col border-r-2 px-4 z-0 opacity-0 -translate-x-full transition-all duration-300 ease-in-out',
        { 'opacity-100 z-50 translate-x-0': isOpenDrawer },
      )}
    >
      <p className="px-6 my-6 font-bold text-2xl">{drawer}</p>
      <div className="w-full border-b-2 flex items-center justify-center">
        {isSearchButton && <SearchInput />}
      </div>
      <div className="my-2">
        <p className="my-2 font-semibold">{isSearchButton ? 'Recent' : 'This month'}</p>
        <ScrollArea className="h-[840px] w-full flex flex-col gap-y-2">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </ScrollArea>
      </div>
    </section>
  );
};

export default memo(Drawer);
