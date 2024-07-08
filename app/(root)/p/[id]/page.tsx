import { Separator } from '@/components/ui/separator';

import { Suspense } from 'react';

import { PostDetailSkeleton } from '@/components/Skeletons';
import { PostDetail } from '@/components/Post/PostDetail';
import { MorePosts } from '@/components/Post/MorePosts';

const PostDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<PostDetailSkeleton />}>
        <PostDetail id={id} />
      </Suspense>

      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />

      <Suspense>
        <MorePosts postId={id} />
      </Suspense>
    </div>
  );
};
export default PostDetailPage;
