import { Card } from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';

import { PostWithExtras } from '@/lib/definitions';
import { fetchProfile } from '@/lib/data';
import { auth } from '@/auth';

import {
  UserAvatar,
  Timestamp,
  PostActions,
  PostOptions,
  ProfilePreview,
  Comments,
} from '@/components/index';

export const Post = async ({ post }: { post: PostWithExtras }) => {
  const session = await auth();
  const userId = session?.user?.id;
  const username = post.user.username;
  const profile = await fetchProfile(username!);
  if (!session?.user) return null;

  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <UserAvatar userAvatar={post.user} />
          <div className="text-sm">
            <p className="space-x-1">
              <span className="font-semibold">{username}</span>
              <span className="font-medium text-neutral-500 dark:text-neutral-400 text-xs">•</span>
              <Timestamp createdAt={post.createdAt} />
            </p>
            <p className="text-xs text-black dark:text-white font-medium">VN</p>
          </div>
        </div>

        <PostOptions
          post={post}
          userId={userId}
        />
      </div>

      <Card className="relative h-[450px] w-full max-w-[468px] overflow-hidden rounded-none sm:rounded-md">
        <Image
          src={post.fileUrl}
          alt="Post Image"
          fill
          sizes='w-[468px]'
          priority
          className="sm:rounded-md object-cover"
        />
      </Card>

      <PostActions
        post={post}
        userId={userId}
        className="px-3 sm:px-0"
      />

      {post.caption && (
        <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
          <ProfilePreview
            user={post!.user}
            profile={profile!}
          >
            <Link
              href={`/${username}`}
              className="font-bold"
            >
              {username}
            </Link>
          </ProfilePreview>
          <p>{post.caption}</p>
        </div>
      )}

      <Comments
        postId={post.id}
        comments={post.comments}
        user={session.user}
      />
    </div>
  );
};
