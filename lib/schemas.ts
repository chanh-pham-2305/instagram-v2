import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z.string().url(),
  caption: z.string().optional(),
});

export const CreatePost = PostSchema.omit({ id: true });
export const UpdatePost = PostSchema;
export const DeletePost = PostSchema.pick({ id: true });

export const LikeSchema = z.object({
  postId: z.string(),
});

export const BookmarkSchema = z.object({
  postId: z.string(),
});

export const CommentSchema = z.object({
  id: z.string(),
  body: z.string(),
  postId: z.string(),
});

export const CreateComment = CommentSchema.omit({ id: true });
export const UpdateComment = CommentSchema;
export const DeleteComment = CommentSchema.pick({ id: true });

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  bio: z.string().max(150).optional(),
  websiteURL: z.string().optional(),
  gender: z.string().optional(),
});

export const UpdateUser = UserSchema;
export const DeleteUser = UserSchema.pick({ id: true });
export const FollowUser = UserSchema.pick({ id: true });

export const ConversationSchema = z.object({
  id: z.string(),
});

export const CreateConversation = ConversationSchema.omit({ id: true });
export const UpdateConversation = ConversationSchema;
export const DeleteConversation = ConversationSchema.pick({ id: true });

export const MessageSchema = z.object({
  id: z.string(),
  message: z.string(),
  conversationId: z.string(),
});

export const CreateMessage = MessageSchema.omit({ id: true });
export const UpdateMessage = MessageSchema;
export const DeleteMessage = MessageSchema.pick({ id: true });
