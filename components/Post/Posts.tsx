import React from 'react';

import { fetchPosts } from '@/lib/data';

import { Post } from './Post';

export const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
};
