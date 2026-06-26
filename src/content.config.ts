import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const features = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string(),
    order: z.number(),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/use-cases' }),
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  features,
  useCases,
};
