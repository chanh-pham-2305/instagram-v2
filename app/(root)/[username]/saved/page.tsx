import { fetchSavedPostsByUsername } from '@/lib/data';

import { PostsGrid } from '@/components/Post/PostsGrid';

const SavedPosts = async ({ params: { username } }: { params: { username: string } }) => {
  const savedPosts = await fetchSavedPostsByUsername(username);
  const posts = savedPosts?.map((savedPost) => savedPost.post);
  return <PostsGrid posts={posts} />;
};

export default SavedPosts;
