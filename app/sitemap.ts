import { MetadataRoute } from "next";
import GetAllPostData from "@/lib/GetPostData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.jachimekchiro.com";

  // Base pages of the site
  const staticRoutes = [
    "",
    "/contact",
    "/help",
    "/services",
    "/team",
    "/the-wellness-journal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Handcrafted/static blog posts under the-wellness-journal
  const staticBlogSlugs = [
    "benefits-of-regular-chiropractic-care",
    "the-role-of-chiropractic-care",
    "what-causes-sciatic-nerve-pain",
    "how-chiropractic-treatment-helps-reduce-inflammation-and-improve-mobility",
    "can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain",
    "what-supplements-help-with-weight-loss",
    "chiropractic-therapy-slip-fall-recovery",
  ];

  const staticBlogRoutes = staticBlogSlugs.map((slug) => ({
    url: `${baseUrl}/the-wellness-journal/${slug}`,
    lastModified: new Date("2026-06-08"), // approximate/fallback baseline date
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamically fetched blog posts from backend API
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const postData = await GetAllPostData();
    const posts = postData?.data || [];
    dynamicBlogRoutes = posts
      .filter((post: any) => post && post.slug && post.published !== false)
      .map((post: any) => {
        const rawDate = post.updatedAt || post.createdAt || post.publishedAt;
        return {
          url: `${baseUrl}/the-wellness-journal/${post.slug}`,
          lastModified: rawDate ? new Date(rawDate) : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        };
      });
  } catch (error) {
    console.error("Error generating sitemap dynamic routes:", error);
  }

  return [...staticRoutes, ...staticBlogRoutes, ...dynamicBlogRoutes];
}
