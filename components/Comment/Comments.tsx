'use client';

import { User } from 'next-auth';

import { CommentWithExtras } from '@/lib/definitions';
import { CommentForm } from '@/components/index';
import CommentsContextProvider from './CommentProvider';
import { CommentList } from './CommentList';
import SideBar from '../Sidebar/SideBar';

export const Comments = ({
  postId,
  comments,
  user,
}: {
  postId: string;
  comments: CommentWithExtras[];
  user?: User | null;
}) => {
  return (
    <CommentsContextProvider
      comments={comments}
      user={user!}
    >
      <div className="space-x-0.5 px-3 sm:px-0">
        <CommentList postId={postId} />

        <CommentForm
          postId={postId}
          comments={comments}
          user={user}
        />
      </div>
    </CommentsContextProvider>
  );
};
