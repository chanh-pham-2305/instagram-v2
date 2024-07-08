'use client';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

import { Loader2 } from 'lucide-react';

import { useForm } from 'react-hook-form';
import { useOptimistic, useTransition } from 'react';
import { User } from 'next-auth';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/lib/utils';
import { createComment } from '@/lib/actions';
import { CreateComment } from '@/lib/schemas';
import { CommentWithExtras } from '@/lib/definitions';
import { useCommentsContext } from './CommentProvider';

export const CommentForm = ({
  postId,
  comments,
  user,
  className,
  inputRef,
}: {
  postId: string;
  comments: CommentWithExtras[];
  user?: User | null;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}) => {
  const form = useForm<z.infer<typeof CreateComment>>({
    resolver: zodResolver(CreateComment),
    defaultValues: {
      body: '',
      postId,
    },
  });
  let [isPending, startTransition] = useTransition();
  const { addOptimisticComment } = useCommentsContext();
  const body = form.watch('body');
  const isSubmitting = form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (values) => {
          const valuesCopy = { ...values };
          form.reset();
          startTransition(() => {
            addOptimisticComment(valuesCopy.body);
          });

          await createComment(valuesCopy);
        })}
        className={cn(
          'border-b relative border-gray-200 dark:border-neutral-800 py-3 flex items-center space-x-2 w-full px-3',
          className,
        )}
      >
        {isSubmitting && (
          <div className="flex justify-center items-center w-full absolute">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => {
            return (
              <FormItem className="w-full flex">
                <FormControl>
                  <input
                    disabled={isSubmitting}
                    type="text"
                    placeholder="Add a comment..."
                    className="bg-transparent text-sm border-none focus:outline-none flex-1 dark:text-neutral-400 placeholder-neutral-400 font-medium disabled:opacity-30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {body.trim().length > 0 && (
          <button
            disabled={isSubmitting}
            type="submit"
            className="text-sky-500 text-sm font-semibold hover:text-sky-700 dark:hover:text-white disabled:cursor-not-allowed  dark:disabled:text-slate-500 disabled:text-sky-500/40 disabled:hover:text-sky-500/40 dark:disabled:hover:text-slate-500"
          >
            Post
          </button>
        )}
      </form>
    </Form>
  );
};
