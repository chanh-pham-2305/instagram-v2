import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { FollowerWithExtras } from '@/lib/definitions';

import { UserAvatar, FollowButton } from '@/components/index';

export const Follower = ({ follower }: { follower: FollowerWithExtras }) => {
  const { data: session } = useSession();
  const isFollower = follower.follower.followedBy.some(
    (user) => user.followerId === session?.user.id,
  );
  const isCurrentUser = session?.user.id === follower.followerId;

  if (!session) return null;
  return (
    <div className="p-4 flex items-center justify-between gap-x-3">
      <Link
        href={`/${follower.follower.username}`}
        className="flex items-center gap-x-3"
      >
        <UserAvatar
          user={follower.follower}
          className="h-10 w-10"
        />
        <p className="font-bold text-sm">{follower.follower.username}</p>
      </Link>
      {!isCurrentUser && (
        <FollowButton
          profileId={follower.followerId}
          isFollowing={isFollower}
          buttonClassName={isFollower ? 'bg-neutral-700 dark:hover:bg-neutral-700/40' : ''}
        />
      )}
    </div>
  );
};
