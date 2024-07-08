import { Heart } from 'lucide-react';

import React, { useOptimistic } from 'react';

import { Like } from '@prisma/client';

import { likePost } from '@/lib/actions';
import { PostWithExtras } from '@/lib/definitions';
import { cn } from '@/lib/utils';

import { ActionIcon } from './ActionIcon';

type LinkButtonProps = { post: PostWithExtras; userId?: string };

export const LikeButton = ({ post, userId }: LinkButtonProps) => {
  const predicate = (like: Like) => like.userId === userId && like.postId === post.id;
  const [optimisticLikes, addOptimisticLike] = useOptimistic<Like[]>(
    post.likes,
    // @ts-ignore
    (state: Like[], newLike: Like) =>
      state.some(predicate) ? state.filter((like) => like.userId !== userId) : [...state, newLike],
  );
  return (
    <div className="flex flex-col">
      <form
        action={async (formData: FormData) => {
          const postId = formData.get('postId');
          addOptimisticLike({ postId, userId });
          await likePost(postId);
        }}
      >
        <input
          type="hidden"
          name="postId"
          value={post.id}
        />

        <ActionIcon>
          <Heart
            className={cn('h-6 w-6', {
              'text-red-500 fill-red-500': optimisticLikes.some(predicate),
            })}
          />
        </ActionIcon>
      </form>

      {optimisticLikes.length > 0 && (
        <p className="text-sm font-bold dark:text-white">
          {optimisticLikes.length} {optimisticLikes.length === 1 ? 'like' : 'likes'}
        </p>
      )}
    </div>
  );
};
