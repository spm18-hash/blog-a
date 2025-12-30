import { defineCollection, type ImageFunction } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

export const blogSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: image(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: ({ image }) => blogSchema(image),
});

export const collections = { blog };
