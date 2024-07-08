import Link from 'next/link';
import React from 'react';
import { useCommentsContext } from './CommentProvider';

export const CommentList = ({ postId }: { postId: string }) => {
  const { optimisticComments } = useCommentsContext();
  const commentsCount = optimisticComments.length;
  return (
    <>
      {commentsCount > 1 && (
        <Link
          scroll={false}
          href={`/p/${postId}`}
          className="text-sm font-medium text-neutral-500"
        >
          View all {commentsCount} comments
        </Link>
      )}

      {optimisticComments.slice(0, 3).map((comment, i) => {
        const username = comment.user?.username;

        return (
          <div
            key={i}
            className="text-sm flex items-center space-x-2 font-medium"
          >
            <Link
              href={`/${username}`}
              className="font-semibold"
            >
              {username}
            </Link>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
};
