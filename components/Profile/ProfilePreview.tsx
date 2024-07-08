import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { UserWithExtras } from '@/lib/definitions';

import { User } from 'next-auth';
import React from 'react';

import { FollowButton, UserAvatar } from '@/components/index';
import Link from 'next/link';
import Image from 'next/image';

export const ProfilePreview = ({
  user,
  children,
  profile,
}: {
  user: User;
  children: React.ReactNode;
  profile: UserWithExtras;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='relative w-[360px] h-[300px]'>
        <div className='flex flex-col items-center w-full h-full rounded-lg !z-50 bg-popover'>
          <div className="w-full flex flex-row justify-start items-center p-2 gap-x-4">
            <UserAvatar
              userAvatar={user}
              className="h-14 w-14"
            />
            <div className="flex flex-col text-[16px]">
              <p className="font-extrabold">{profile!.username}</p>
              <p className="text-sm font-medium dark:text-neutral-400">{profile!.name}</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-around text-[16px] p-2">
            <p className="font-medium text-center">
              <strong>
                {profile.posts.length} <br />
                posts
              </strong>
            </p>
            <p className="font-medium text-center">
              <strong>
                {profile.followedBy.length} <br />
                followers
              </strong>
            </p>
            <p className="font-medium text-center">
              <strong>
                {profile.following.length} <br />
                following
              </strong>
            </p>
          </div>
          <div className="w-full h-[100px] grid grid-flow-col">
            {profile.posts.length === 0 && <p className="font-bold text-center"> No posts</p>}
            {profile.posts.slice(0, 3).map((post) => {
              return (
                <Link
                  href={`/p/${post.id}`}
                  key={post.id}
                  className="relative flex items-center justify-center rounded-sm w-[100px] h-[100px]"
                >
                  <Image
                    src={post.fileUrl}
                    fill
                    alt="Image post preview"
                    className="object-cover"
                  />
                </Link>
              );
            })}
          </div>
          <FollowButton className='w-full m-4' profileId={profile.id} />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
