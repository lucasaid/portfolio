import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const links = z.object({ live: z.string().optional(), github: z.string().optional() });

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    // Must be a full YAML timestamp with offset, e.g. 2024-08-12T13:00:00+10:00.
    // Offset-less "2024-08-12 13:00" stays a string and is rejected, rather than
    // being parsed in whatever timezone the build machine happens to be in.
    date: z.date(),
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
