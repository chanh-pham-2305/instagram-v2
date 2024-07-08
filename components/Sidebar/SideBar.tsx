'use client';
import React, { useEffect, memo } from 'react';

import { cn } from '@/lib/utils';

import { MoreOption } from './MoreOption';
import NavContent from './NavContent';
import Drawer from './Drawer';
import { DRAWER, useDrawer } from './SideBarProvider';
import LogoButton from './LogoButton';
import useComponentVisible from '@/hooks/useComponentVisible';
const SideBar = () => {
  const { drawer, handleDrawer } = useDrawer();

  console.log('rerender');
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  const isOpenDrawer = drawer === 2 || drawer === 3;

  // console.log(isComponentVisible)
  useEffect(() => {
    // check first render or close drawer
    if (!isComponentVisible) {
      handleDrawer(4);
    }
    if (isOpenDrawer) {
      setIsComponentVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComponentVisible, isOpenDrawer]);

  return (
    <section
      ref={ref}
      className={cn('sidebar', { 'md:w-[468px] xl:w-[468px]': isOpenDrawer })}
    >
      <nav className={cn('sidebar-content', { 'w-[72px]': isOpenDrawer })}>
        <LogoButton />
        <NavContent />
        <MoreOption />
      </nav>
      {isOpenDrawer && <Drawer />}
    </section>
  );
};
export default memo(SideBar);