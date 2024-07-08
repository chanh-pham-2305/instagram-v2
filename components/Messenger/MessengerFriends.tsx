import { User } from 'next-auth';
import React from 'react';
import { SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/index';
export const MessengerFriends = () => {
  return (
    <section className="w-[396px] h-full border border-r-[1px] border-[#F2F2F2]">
      <div className="flex flex-row justify-around">
        <p className="text-[16px] font-semibold">chanh.pcc235</p>
        <Button>
          <SquarePen />
        </Button>
      </div>
      <div className="flex flex-row text-[14px]">
        <p className="font-bold">Messages</p>
        <p className="dark:text-neutral-400">Request</p>
      </div>
      <div className="w-full flex flex-row justify-start items-center p-2 gap-x-4">
        
      </div>
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
