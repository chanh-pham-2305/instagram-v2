import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

import useMount from '@/hooks/useMount';
import { PostWithExtras } from '@/lib/definitions';

import {
  UserAvatar,
  ViewPostButton,
  PostActions,
  PostCaption,
  CommentForm,
} from '@/components/index';

import CommentsContextProvider from '../Comment/CommentProvider';
import { ShowAllComment } from '../Comment/ShowAllComment';

export const PostPreview = ({ id, post }: { id: string; post: PostWithExtras }) => {
  const pathname = usePathname();
  const isPostModal = pathname === `/p/${id}`;
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  const inputRef = useRef<HTMLInputElement>(null);
  const username = post.user.username;
  const comments = post.comments;
  const href = `/${username}`;
  const postId = id;

  const mount = useMount();
  if (!mount) return null;
  return (
    <CommentsContextProvider
      comments={comments}
      user={user!}
    >
      <Dialog
        open={isPostModal}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent className="flex gap-0 flex-col md:flex-row items-start p-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px] lg:max-h-[700px] xl:max-h-[800px]">
          <div className="flex flex-col justify-between md:h-full md:order-2 w-full max-w-md">
            <DialogHeader className="flex border-b space-y-0 space-x-2.5 flex-row items-center py-4 pl-3.5 pr-6">
              <Link href={href}>
                <UserAvatar userAvatar={post.user} />
              </Link>
              <Link
                href={href}
                className="font-semibold text-sm"
              >
                {username}
              </Link>
            </DialogHeader>

            <ScrollArea className="hidden md:inline border-b flex-1 py-1.5">
              <PostCaption post={post} />
              <ShowAllComment inputRef={inputRef} />
            </ScrollArea>

            <ViewPostButton className="hidden md:flex border-b" />

            <div className="px-2 hidden md:block mt-auto border-b p-2.5">
              <PostActions
                post={post}
                userId={user?.id}
              />
              <time className="text-[11px]  uppercase text-zinc-500 font-medium">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <CommentForm
              postId={postId}
              comments={comments}
              user={user}
              className="hidden md:inline-flex"
            />
          </div>

          <div className="relative overflow-hidden h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] max-w-3xl w-full">
            <Image
              src={post.fileUrl}
              fill
              objectFit="cover"
              alt="Post Image"
              className="md:rounded-l-md object-cover"
            />
          </div>

          <PostActions
            post={post}
            userId={user?.id}
            className="md:hidden border-b p-2.5"
          />
          <CommentForm
            postId={id}
            comments={comments}
            user={user}
            className="md:hidden"
            inputRef={inputRef}
          />
          <ViewPostButton className="md:hidden" />
        </DialogContent>
      </Dialog>
    </CommentsContextProvider>
  );
};
