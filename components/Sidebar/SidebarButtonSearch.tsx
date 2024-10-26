import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import TooltipData from './TooltipData';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDrawer } from './SideBarProvider';
import { usePathname } from 'next/navigation';

const SidebarButtonSearch = () => {
  // console.log('render search');
  const pathname = usePathname();
  const { drawer, handleDrawer } = useDrawer();
  const handleClick = () => {
    // console.log('click Search button');
    if (drawer === 2) return handleDrawer(4);
    if (drawer === 1 || drawer === 3 || drawer === 4) return handleDrawer(2);
  };
  const isOpenSearch = drawer === 2;
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
          'border border-white !w-12': isOpenSearch,
        })}
      >
        <Search className="w-6 group-hover:scale-120 " />
        <p className={cn('hidden xl:pl-4 xl:block', { '!hidden xl:pl-0': isOpenDrawer })}>Search</p>
      </Button>
    </TooltipData>
  );
};
export default memo(SidebarButtonSearch);
