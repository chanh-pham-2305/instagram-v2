'use client'
import React from 'react';
import { Comment } from './Comment';
import { useCommentsContext } from './CommentProvider';

export const ShowAllComment = ({ inputRef }: { inputRef?: React.RefObject<HTMLInputElement> }) => {
  const { optimisticComments } = useCommentsContext();
  return (
    <>
      {optimisticComments.length > 0 && (
        <>
          {optimisticComments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                inputRef={inputRef}
              />
            );
          })}
        </>
      )}
    </>
  );
};
