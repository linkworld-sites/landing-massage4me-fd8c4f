import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/book"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = getPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
