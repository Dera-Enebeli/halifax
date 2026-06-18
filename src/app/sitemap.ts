import type { MetadataRoute } from "next"
import { areaRoutes } from "@/lib/city-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://real-estate-site-six.vercel.app"

  const areaPages = areaRoutes.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    priority: 0.7 as const,
  }))

  return [
    {
      url: baseUrl,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/consultation`,
      priority: 0.6,
    },
    ...areaPages,
  ]
}
