import { MessageCircle } from 'lucide-react';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { PostWithExtras } from '@/lib/definitions';

import { ActionIcon, ShareButton, LikeButton, BookmarkButton } from '@/components/index';

type PostActionsProps = {
  post: PostWithExtras;
  userId?: string;
  className?: string;
};

export const PostActions = ({ post, userId, className }: PostActionsProps) => {
  return (
    <div className={cn('relative flex items-start w-full gap-x-2', className)}>
      <LikeButton
        post={post}
        userId={userId}
      />
      <Link href={`/p/${post.id}`}>
        <ActionIcon>
          <MessageCircle className={'h-6 w-6'} />
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton
        post={post}
        userId={userId}
      />
    </div>
  );
};
