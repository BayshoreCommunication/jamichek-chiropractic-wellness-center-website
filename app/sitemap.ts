import type { MetadataRoute } from "next";
import { buildDynamicSitemap } from "@/lib/sitemapDiscovery";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildDynamicSitemap();
}
