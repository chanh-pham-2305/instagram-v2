import { PostsGrid } from '@/components/Post/PostsGrid';
import { fetchPostsByUsername } from '@/lib/data';
import React from 'react';

const ProfilePage = async ({ params: { username } }: { params: { username: string } }) => {
  const posts = await fetchPostsByUsername(username);

  return <PostsGrid posts={posts} />;
};

export default ProfilePage;
