import React,{memo} from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { sidebarLinks } from '@/constants';

import SideBarLink from './SideBarLink';
import SidebarButtonNotification from './SidebarButtonNotification';
import SidebarButtonSearch from './SidebarButtonSearch';
import { ProfileLink } from './ProfileLink';

const NavContent = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav className='w-full flex flex-col justify-start flex-auto gap-y-2'>
      {sidebarLinks.map((item) => {
        const isLink = item.type === 'Link';
        const isSearch = item.type === 'Button' && item.name === 'Search';
        return isLink ? (
          <SideBarLink
            key={item.name}
            item={item}
            pathname={pathname}
          />
        ) : isSearch ? (
          <SidebarButtonSearch key={item.name} />
        ) : (
          <SidebarButtonNotification key={item.name} />
        );
      })}
      {user && <ProfileLink user={user} />}
    </nav>
  );
};

export default memo(NavContent)
