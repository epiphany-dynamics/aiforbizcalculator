import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    focusKeyword: z.string(),
    tags: z.array(z.string()).min(3).max(8).optional(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageWidth: z.number().int().positive().optional(),
    imageHeight: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
    noindex: z.boolean().optional(),
    networkLinks: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      site: z.enum(['ed', 'fss', 'calc', 'help', 'hype']),
    })).max(4).optional(),
    editorial: z.object({
      kind: z.enum(['guide', 'comparison', 'research']),
      takeaways: z.tuple([
        z.string().trim().min(1),
        z.string().trim().min(1),
        z.string().trim().min(1),
      ]),
      stats: z.array(z.object({
        value: z.string().trim().min(1),
        label: z.string().trim().min(1),
        sourceName: z.string().trim().min(1),
        sourceUrl: z.string().url().refine((url) => url.startsWith('https://')),
        sourceDate: z.string().trim().min(1),
      })).optional(),
      methodology: z.string().trim().min(1).optional(),
      verifiedAt: z.string().trim().min(1).optional(),
    }).optional(),
  }),
});

export const collections = { blog };
