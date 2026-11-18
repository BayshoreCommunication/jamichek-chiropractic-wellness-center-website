import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

export const SITE_BASE_URL = "https://www.jachimekchiro.com";

const BLOG_API_URL =
  process.env.SITEMAP_BLOG_API_URL ||
  "https://backend-jamichek-chiropractic-welln.vercel.app/site/blog";

const PAGE_FILE_NAMES = new Set([
  "page.tsx",
  "page.jsx",
  "page.ts",
  "page.js",
]);

const BLOG_FILE_EXTENSIONS = new Set([".tsx", ".jsx", ".ts", ".js"]);

const EXCLUDED_APP_SEGMENTS = new Set(["api", "private"]);

const FALLBACK_APP_ROUTES = [
  "",
  "/contact",
  "/help",
  "/services",
  "/team",
  "/the-wellness-journal",
];

type SitemapEntry = MetadataRoute.Sitemap[number];

type StaticBlogMeta = {
  slug: string;
  published: boolean;
  lastModified: Date;
};

/**
 * Parses a date input into a valid Date instance, falling back when missing or invalid.
 */
function toValidDate(value: unknown, fallback: Date = new Date()): Date {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? fallback : value;
  }

  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return fallback;
}

/**
 * Strips leading/trailing slashes and whitespace from a blog slug.
 */
function normalizeSlug(rawSlug: unknown): string {
  if (typeof rawSlug !== "string") return "";
  return rawSlug.trim().replace(/^\/+|\/+$/g, "");
}

/**
 * Safely reads file modification time, falling back to the current date.
 */
function getFileMtime(filePath: string): Date {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date();
  }
}

/**
 * Checks whether an App Router directory segment should be skipped from static sitemap discovery.
 */
function shouldSkipSegment(segment: string): boolean {
  if (EXCLUDED_APP_SEGMENTS.has(segment)) return true;
  if (segment.startsWith("_") || segment.startsWith("@")) return true;
  // Skip dynamic route segments ([slug], [...slug], [[...slug]]) and intercepting routes ((.), (..), (...))
  if (segment.startsWith("[") || /^\(\.+\)/.test(segment)) return true;
  return false;
}

/**
 * Recursively discovers static App Router page routes under `app/`.
 */
export function discoverAppRoutes(
  appDir: string = path.join(process.cwd(), "app")
): SitemapEntry[] {
  const discovered: SitemapEntry[] = [];

  function walk(currentDir: string, urlSegments: string[]) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    const pageFile = entries.find(
      (entry) => entry.isFile() && PAGE_FILE_NAMES.has(entry.name)
    );
    if (pageFile) {
      const routePath =
        urlSegments.length === 0 ? "" : `/${urlSegments.join("/")}`;
      const fullPath = path.join(currentDir, pageFile.name);
      discovered.push({
        url: `${SITE_BASE_URL}${routePath}`,
        lastModified: getFileMtime(fullPath),
        changeFrequency: "weekly",
        priority: routePath === "" ? 1.0 : 0.8,
      });
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (shouldSkipSegment(entry.name)) continue;

      // Strip Next.js route groups such as `(marketing)` from the public URL path.
      const isRouteGroup =
        entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextSegments = isRouteGroup
        ? urlSegments
        : [...urlSegments, entry.name];

      walk(path.join(currentDir, entry.name), nextSegments);
    }
  }

  walk(appDir, []);

  if (discovered.length > 0) {
    return discovered;
  }

  const now = new Date();
  return FALLBACK_APP_ROUTES.map((routePath) => ({
    url: `${SITE_BASE_URL}${routePath}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: routePath === "" ? 1.0 : 0.8,
  }));
}

/**
 * Extracts exported blog metadata fields (`slug`, `published`, and dates) from a static blog file.
 */
export function parseStaticBlogMetadata(
  source: string,
  filePath: string
): StaticBlogMeta | null {
  // Read only the metadata header region so large JSX sections aren't scanned unnecessarily.
  const head = source.slice(0, 6000);
  const slugMatch = head.match(/\bslug\s*:\s*["'`]([^"'`]+)["'`]/);
  const slug = normalizeSlug(slugMatch?.[1]);
  if (!slug) return null;

  const publishedMatch = head.match(/\bpublished\s*:\s*(true|false)\b/);
  const published = publishedMatch ? publishedMatch[1] !== "false" : true;

  const updatedMatch = head.match(/\bupdatedAt\s*:\s*["'`]([^"'`]+)["'`]/);
  const dateMatch = head.match(/\bdate\s*:\s*["'`]([^"'`]+)["'`]/);
  const createdMatch = head.match(/\bcreatedAt\s*:\s*["'`]([^"'`]+)["'`]/);

  const rawDate = updatedMatch?.[1] || dateMatch?.[1] || createdMatch?.[1];
  const lastModified = toValidDate(rawDate, getFileMtime(filePath));

  return { slug, published, lastModified };
}

/**
 * Discovers all published static blog posts under `components/static-blogs/blogs/`.
 */
export function discoverStaticBlogRoutes(
  blogsDir: string = path.join(process.cwd(), "components", "static-blogs", "blogs")
): SitemapEntry[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(blogsDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const routes: SitemapEntry[] = [];

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name);
    if (!BLOG_FILE_EXTENSIONS.has(ext)) continue;

    const fullPath = path.join(blogsDir, entry.name);
    let content: string;
    try {
      content = fs.readFileSync(fullPath, "utf-8");
    } catch {
      continue;
    }

    const meta = parseStaticBlogMetadata(content, fullPath);
    if (!meta || !meta.published) continue;

    routes.push({
      url: `${SITE_BASE_URL}/the-wellness-journal/${encodeURIComponent(meta.slug)}`,
      lastModified: meta.lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}

/**
 * Fetches published blog posts from the backend CMS API without caching so new URLs appear immediately.
 */
export async function fetchDynamicBlogRoutes(): Promise<SitemapEntry[]> {
  try {
    const response = await fetch(BLOG_API_URL, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      throw new Error(`Blog API responded with status ${response.status}`);
    }

    const payload = await response.json();
    const posts = Array.isArray(payload?.data) ? payload.data : [];

    const routes: SitemapEntry[] = [];
    for (const post of posts) {
      if (!post || post.published === false) continue;
      const slug = normalizeSlug(post.slug);
      if (!slug) continue;

      const rawDate =
        post.updatedAt || post.createdAt || post.publishedAt || post.date;

      routes.push({
        url: `${SITE_BASE_URL}/the-wellness-journal/${encodeURIComponent(slug)}`,
        lastModified: toValidDate(rawDate),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    return routes;
  } catch (error) {
    console.error("Error fetching dynamic blog routes for sitemap:", error);
    return [];
  }
}

/**
 * Combines discovered app pages, static blogs, and live CMS blogs into a deduplicated sitemap.
 */
export async function buildDynamicSitemap(): Promise<MetadataRoute.Sitemap> {
  const [appRoutes, staticBlogRoutes, dynamicBlogRoutes] = await Promise.all([
    Promise.resolve(discoverAppRoutes()),
    Promise.resolve(discoverStaticBlogRoutes()),
    fetchDynamicBlogRoutes(),
  ]);

  const byUrl = new Map<string, SitemapEntry>();

  const upsertEntry = (entry: SitemapEntry) => {
    const existing = byUrl.get(entry.url);
    if (!existing) {
      byUrl.set(entry.url, entry);
      return;
    }

    const existingTime = toValidDate(existing.lastModified, new Date(0)).getTime();
    const nextTime = toValidDate(entry.lastModified, new Date(0)).getTime();
    if (nextTime > existingTime) {
      byUrl.set(entry.url, entry);
    }
  };

  for (const entry of appRoutes) upsertEntry(entry);
  for (const entry of staticBlogRoutes) upsertEntry(entry);
  for (const entry of dynamicBlogRoutes) upsertEntry(entry);

  return Array.from(byUrl.values());
}
