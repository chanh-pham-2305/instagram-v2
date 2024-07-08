import { notFound } from 'next/navigation';

import { fetchPostById } from '@/lib/data';

import { PostPreview } from '@/components/index';

type Props = {
  params: {
    id: string;
  };
};

const PostModal = async ({ params: { id } }: Props) => {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <PostPreview
      id={id}
      post={post}
    />
  );
};

export default PostModal;
