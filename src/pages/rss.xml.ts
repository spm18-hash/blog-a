import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const unsortedPosts = await getCollection("blog");
  const posts = unsortedPosts.sort(
    (a, b) => Number(b.data.publishDate) - Number(a.data.publishDate),
  );

  return rss({
    title: "Blog A Brown",
    description: "News and updates about brown things",
    site: (context.site as URL).href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
    })),
  });
};
