import type { MetadataRoute } from "next"
import { areaRoutes } from "@/lib/city-data"
import { neighborhoods } from "@/lib/neighborhood-data"
import { posts } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://real-estate-site-six.vercel.app"

  const areaPages = areaRoutes.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    priority: 0.7 as const,
  }))

  const neighborhoodPages = neighborhoods.map((n) => ({
    url: `${baseUrl}/areas/${n.citySlug}/${n.slug}`,
    priority: 0.6 as const,
  }))

  const blogPages = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    priority: 0.5 as const,
  }))

  return [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/blog`, priority: 0.6 },
    { url: `${baseUrl}/consultation`, priority: 0.6 },
    { url: `${baseUrl}/free-valuation`, priority: 0.8 },
    ...areaPages,
    ...neighborhoodPages,
    ...blogPages,
  ]
}
