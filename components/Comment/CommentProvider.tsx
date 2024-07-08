'use client';

import { CommentWithExtras } from '@/lib/definitions';
import { User } from 'next-auth';
import { createContext, useOptimistic, useContext } from 'react';

type CommentContextType = {
  optimisticComments: CommentWithExtras[];
  addOptimisticComment: (comment: string) => void;
};

// export const CommentsContext = createContext<CommentContextType | undefined>(undefined);
export const CommentsContext = createContext<CommentContextType>({} as CommentContextType);

export default function CommentsContextProvider({
  children,
  comments,
  user,
}: {
  children: React.ReactNode;
  comments: CommentWithExtras[];
  user: User;
}) {
  const [optimisticComments, addOptimisticComment] = useOptimistic<CommentWithExtras[]>(
    comments,
    // @ts-ignore
    (state: Comment[], newComment: string) => [{ body: newComment, user: user }, ...state],
  );

  return (
    <CommentsContext.Provider value={{ optimisticComments, addOptimisticComment }}>
      {children}
    </CommentsContext.Provider>
  );
}

export function useCommentsContext() {
  const context = useContext(CommentsContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
}
