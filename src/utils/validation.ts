import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  date: z.string().datetime(),
  slug: z.string().min(1, 'Slug is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.object({
    url: z.string().url(),
    alt: z.string().optional()
  }).optional()
});

export function validatePost(post: unknown) {
  return PostSchema.parse(post);
}
