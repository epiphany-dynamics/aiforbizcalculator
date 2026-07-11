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
    draft: z.boolean().default(false),
    networkLinks: z.array(z.object({
      title: z.string(),
      url: z.string(),
      site: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
