import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { MoreHorizontal } from 'lucide-react';

import Link from 'next/link';

import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { deletePost } from '@/lib/actions';
import { PostWithExtras } from '@/lib/definitions';

import { SubmitButton } from '@/components/index';

type PostOptionsProps = {
  post: PostWithExtras;
  userId?: string;
  className?: string;
};

export const PostOptions = ({ post, userId, className }: PostOptionsProps) => {
  const isPostMine = post.userId === userId;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MoreHorizontal className={cn('h-5 w-5 cursor-pointer dark:text-neutral-400', className)} />
      </DialogTrigger>
      <DialogContent className="dialogContent">
        {isPostMine && (
          <form
            action={async (formData: FormData) => {
              const { message } = await deletePost(formData);
              toast(message);
            }}
            className="postOption"
          >
            <input
              type="hidden"
              name="id"
              value={post.id}
            />
            <SubmitButton className="text-red-500 font-bold disabled:cursor-not-allowed w-full p-3">
              Delete post
            </SubmitButton>
          </form>
        )}

        {isPostMine && (
          <Link
            scroll={false}
            href={`/p/${post.id}/edit`}
            className="postOption p-3"
          >
            Edit post
          </Link>
        )}

        <form
          action=""
          className="postOption border-0"
        >
          <button className="w-full p-3">Hide like count</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
