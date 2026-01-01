import { defineCollection, type ImageFunction } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

import authors from "./data/authors/authors.json";

export const blogSchema = (image: ImageFunction) =>
  z.object({
    title: z.string().describe("The title of the blog post"),
    description: z.string().describe("A brief description of the blog post"),
    publishDate: z.coerce
      .date()
      .describe("The date the blog post was published"),
    authors: z
      .enum(
        Object.keys(authors) as [
          keyof typeof authors,
          ...(keyof typeof authors)[],
        ],
      )
      .array()
      .describe("The authors of the blog post"),
    image: image(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: ({ image }) => blogSchema(image),
});

export const collections = { blog };
