'use server';

import prisma from '@/lib/prisma';
import { getUserId } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  CreateComment,
  DeleteComment,
  CreatePost,
  DeletePost,
  UpdatePost,
  LikeSchema,
  BookmarkSchema,
  FollowUser,
  UpdateUser,
  CreateMessage,
  DeleteMessage,
} from './schemas';
import { User } from '@prisma/client';

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();

  const validatedFields = CreatePost.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Post.',
    };
  }

  const { fileUrl, caption } = validatedFields.data;

  try {
    await prisma.post.create({
      data: {
        caption,
        fileUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Post.',
    };
  }

  revalidatePath('/');
  redirect('/');
}

export async function deletePost(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeletePost.parse({
    id: formData.get('id'),
  });

  const post = await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    revalidatePath('/');
    return { message: 'Deleted Post.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Post.' };
  }
}

export async function updatePost(values: z.infer<typeof UpdatePost>) {
  const userId = await getUserId();

  const validatedFields = UpdatePost.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Post.',
    };
  }

  const { id, fileUrl, caption } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  try {
    await prisma.post.update({
      where: {
        id,
      },
      data: {
        fileUrl,
        caption,
      },
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Update Post.' };
  }

  revalidatePath('/');
  redirect('/');
}

export async function likePost(value: FormDataEntryValue | null) {
  const userId = await getUserId();

  const validatedFields = LikeSchema.safeParse({ postId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Like Post.',
    };
  }

  const { postId } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  const like = await prisma.like.findUnique({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
  });

  if (like) {
    try {
      await prisma.like.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
      revalidatePath('/');
      return { message: 'Unliked Post.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Unlike Post.' };
    }
  }

  try {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath('/');
    return { message: 'Liked Post.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Like Post.' };
  }
}

export async function bookmarkPost(value: FormDataEntryValue | null) {
  const userId = await getUserId();

  const validatedFields = BookmarkSchema.safeParse({ postId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Bookmark Post.',
    };
  }

  const { postId } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error('Post not found.');
  }

  const bookmark = await prisma.savedPost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
  });

  if (bookmark) {
    try {
      await prisma.savedPost.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
      revalidatePath('/');
      return { message: 'Unbookmarked Post.' };
    } catch (error) {
      return {
        message: 'Database Error: Failed to Unbookmark Post.',
      };
    }
  }

  try {
    await prisma.savedPost.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath('/');
    return { message: 'Bookmarked Post.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Bookmark Post.',
    };
  }
}

export async function createComment(values: z.infer<typeof CreateComment>) {
  const userId = await getUserId();

  const validatedFields = CreateComment.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Comment.',
    };
  }

  const { postId, body } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  try {
    await prisma.comment.create({
      data: {
        body,
        postId,
        userId,
      },
    });
    revalidatePath('/');
    return { message: 'Created Comment.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Create Comment.' };
  }
}

export async function deleteComment(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeleteComment.parse({
    id: formData.get('id'),
  });

  const comment = await prisma.comment.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!comment) {
    throw new Error('Comment not found');
  }

  try {
    await prisma.comment.delete({
      where: {
        id,
      },
    });
    revalidatePath('/');
    return { message: 'Deleted Comment.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Comment.' };
  }
}

export async function updateProfile(values: z.infer<typeof UpdateUser>) {
  const userId = await getUserId();

  const validatedFields = UpdateUser.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Profile.',
    };
  }

  const { bio, gender, image, name, username, websiteURL } = validatedFields.data;

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        name,
        image,
        bio,
        gender,
        websiteURL,
      },
    });
    revalidatePath('/');
    return { message: 'Updated Profile.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Update Profile.' };
  }
}

export async function followUser(formData: FormData) {
  const userId = await getUserId();

  const { id } = FollowUser.parse({
    id: formData.get('id'),
  });

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const follows = await prisma.follows.findUnique({
    where: {
      followerId_followingId: {
        followerId: userId,
        followingId: id,
      },
    },
  });

  //un-follow user
  if (follows) {
    try {
      await prisma.follows.delete({
        where: {
          followerId_followingId: {
            followerId: userId,
            followingId: id,
          },
        },
      });
      revalidatePath('/');
      return { message: 'Unfollowed User.' };
    } catch (error) {
      return {
        message: 'Database Error: Failed to Unfollow User.',
      };
    }
  }

  //follow user
  try {
    await prisma.follows.create({
      data: {
        followerId: userId,
        followingId: id,
      },
    });
    revalidatePath('/');
    return { message: 'Followed User.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Follow User.',
    };
  }
}

export async function createConversation(user1: User, user2: User){
  console.log(`user 1: ${user1}; user 2: ${user2}`)
  revalidatePath('/direct/t');
}

export async function createMessage(values: z.infer<typeof CreateMessage>) {
  const userId = await getUserId();

  const validatedFields = CreateMessage.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Message.',
    };
  }


}
