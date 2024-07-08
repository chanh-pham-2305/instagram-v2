import { UserWithExtras } from '@/lib/definitions';
import React from 'react';
import { UserAvatar } from '@/components/UserAvatar';

export const ProfileInfor = ({ profile }: { profile: UserWithExtras }) => {
  return (
    <section className="w-full flex flex-row justify-start items-center p-2 gap-x-4">
      <UserAvatar
        userAvatar={profile}
        className="h-14 w-14"
      />
      <div className="flex flex-col text-[16px]">
        <p className="font-extrabold">{profile!.username}</p>
        <p className="text-sm font-medium dark:text-neutral-400">{profile!.name}</p>
      </div>
    </section>
  );
};
