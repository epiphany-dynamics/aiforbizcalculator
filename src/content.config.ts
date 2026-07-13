import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    focusKeyword: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageWidth: z.number().int().positive().optional(),
    imageHeight: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
    networkLinks: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      site: z.enum(['ed', 'fss', 'calc', 'help', 'hype']),
    })).max(4).optional(),
  }),
});

export const collections = { blog };
