import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    keyword: z.string(),
    emoji: z.string(),
    order: z.number(),
    updated: z.coerce.date(),
    /** The stay funnel: every guide pushes readers to a collection page. */
    funnel: z.object({
      headline: z.string(),
      cta: z.string(),
      collection: z.string(),
    }),
    /** Show the month-by-month grid ("Going in January? →"). */
    months: z.enum(['surf', 'weather']).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { guides };
