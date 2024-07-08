'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

import { usePathname, useRouter } from 'next/navigation';

import useMount from '@/hooks/useMount';
import { FollowingWithExtras } from '@/lib/definitions';

import { Following } from '@/components/index';

export const FollowingModal = ({
  following,
  username,
}: {
  following: FollowingWithExtras[] | undefined;
  username: string;
}) => {
  const mount = useMount();
  const pathname = usePathname();
  const router = useRouter();
  const isFollowingPage = pathname === `/${username}/following`;

  if (!mount) return null;

  return (
    <Dialog
      open={isFollowingPage}
      onOpenChange={(isOpen) => !isOpen && router.back()}
    >
      <DialogContent className="dialogContent">
        <DialogHeader className="border-b border-zinc-300 dark:border-neutral-700 py-2 w-full">
          <DialogTitle className="mx-auto font-bold text-base">Following</DialogTitle>
        </DialogHeader>

        {following?.length === 0 && <p>This user has no following.</p>}

        <ScrollArea className="min-h-fit max-h-[350px]">
          {following?.map((following) => (
            <Following
              key={following.followingId}
              following={following}
            />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
