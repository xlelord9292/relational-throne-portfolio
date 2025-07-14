import { siteUrl } from "../lib/constants";
import type { MetadataRoute } from "next";

export const revalidate = 1800; // 30 minutes - adjust as needed

export default function sitemap(): MetadataRoute.Sitemap {
  // Only landing and projects pages
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 2,
    },
  ];
}
