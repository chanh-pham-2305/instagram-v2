import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { auth } from '@/auth';
import { fetchPostById } from '@/lib/data';

import { Post } from './Post';
import {
  UserAvatar,
  PostActions,
  PostCaption,
  PostOptions,
  CommentForm,
} from '@/components/index';
import CommentsContextProvider from '../Comment/CommentProvider';
import { ShowAllComment } from '../Comment/ShowAllComment';

export const PostDetail = async ({ id }: { id: string }) => {
  const post = await fetchPostById(id);
  const session = await auth();
  const postUsername = post?.user.username;
  const comments = post?.comments;
  const userId = session?.user.id;

  if (!post) {
    notFound();
  }

  return (
    <CommentsContextProvider comments={comments!} user={post.user}>
      <Card className="max-w-3xl lg:max-w-4xl hidden md:flex mx-auto">
        <div className="relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg w-full">
          <Image
            src={post.fileUrl}
            alt="Post preview"
            fill
            className="md:rounded-l-md object-cover"
          />
        </div>

        <div className="flex max-w-sm flex-col flex-1">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  className="font-semibold text-sm"
                  href={`/${postUsername}`}
                >
                  {postUsername}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex items-center space-x-2">
                  <UserAvatar
                    userAvatar={post.user}
                    className="h-14 w-14"
                  />
                  <div>
                    <p className="font-bold">{postUsername}</p>
                    <p className="text-sm font-medium dark:text-neutral-400">{post.user.name}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <PostOptions
              post={post}
              userId={userId}
            />
          </div>

          {post.comments.length > 0 && (
            <ScrollArea className="hidden md:inline py-1.5 flex-1">
              <PostCaption post={post} />
              <ShowAllComment />
            </ScrollArea>
          )}

          <div className="px-2 hidden md:block mt-auto border-y p-2.5">
            <PostActions
              post={post}
              userId={userId}
            />
            <time className="text-[11px] uppercase text-zinc-500 font-medium">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <CommentForm
            postId={id}
            comments={comments!}
            user={post.user}
            className="hidden md:inline-flex"
          />
        </div>
      </Card>
      <div className="md:hidden">
        <Post post={post} />
      </div>
    </CommentsContextProvider>
  );
};
