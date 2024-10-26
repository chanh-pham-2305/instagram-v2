'use server';
import React from 'react';
import { Post } from './Post';
import { fetchPosts } from '@/lib/data';
import { PostWithExtras } from '@/lib/definitions';
import LoadMore from './LoadMore';
export const Posts = async () => {
  const QUANTITY = 2;
  const posts = await fetchPosts(0, QUANTITY);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post: PostWithExtras) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      <LoadMore />
    </>
  );
};
