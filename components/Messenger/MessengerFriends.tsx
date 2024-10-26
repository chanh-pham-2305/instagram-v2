'use client';
import React, { useState } from 'react';
import { SquarePen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

import { MessengerFriendItem } from './MessengerFriendItem';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
type MessengerFriendProps = {
  onOpen: () => void;
}
export const MessengerFriends = ({onOpen}:MessengerFriendProps) => {
  const { data: session } = useSession();
  if (!session) notFound();
  const user = session.user;
  // console.log(user);
  return (
    <section className="w-[398px] ml-[72px] h-full border-r-[1px] border-[#F2F2F2]">
      <div className="w-full h-[75px] flex flex-row justify-between items-end px-5 py-3">
        <p className="text-[16px] font-semibold">{user.username}</p>
        <SquarePen
          onClick={onOpen}
          className="w-10 h-10 p-2"
        />
      </div>
      <ScrollArea className="h-[calc(100vh-75px)]">
        <div className="w-full h-[140px] border">friends active</div>
        <div className="w-full h-[44px] flex flex-row justify-between items-center px-5">
          <p className="text-sm font-bold">Messages</p>
          <p className="text-xs font-medium dark:text-neutral-400">Request</p>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-y-4">
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
          <MessengerFriendItem />
        </div>
      </ScrollArea>
    </section>
  );
};
// export const MessengerFriends = ({ user }: { user: User }) => {
//   return (
//     <section className="w-[400px] h-full relative border border-r-[2px] border-[#F2F2F2] dark:text-white">
//       <div className="flex flex-row justify-around ">
//         <p className="text-[16px] font-semibold">{user.username}</p>
//         <Button>
//           <SquarePen />
//         </Button>
//       </div>
//       <div className="flex flex-row text-[14px]">
//         <p className="font-bold">Messages</p>
//         <p className="dark:text-neutral-400">Request</p>
//       </div>
//       <div className="w-full flex flex-row justify-start items-center p-2 gap-x-4">
//         <UserAvatar
//           userAvatar={user}
//           className="h-14 w-14"
//         />
//         <div className="flex flex-col text-[16px]">
//           <p className="font-extrabold">{user.username}</p>
//           <p className="text-sm font-medium dark:text-neutral-400">Active 13h ago</p>
//         </div>
//       </div>
//     </section>
//   );
// };
