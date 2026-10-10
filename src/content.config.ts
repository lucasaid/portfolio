import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const links = z.object({ live: z.string().optional(), github: z.string().optional() });

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    role: z.string(),
    outcome: z.string().optional(),
    tech: z.array(z.string()),
    featured: z.boolean().optional(),
    order: z.number().optional(),
    // Path relative to src/img; resolved by workImage() and skipped if missing
    image: z.string().optional(),
    links: links.optional(),
  }),
});

export const collections = { blog, work };
