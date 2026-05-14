import type { MetadataRoute } from "next";

const siteUrl = "https://kalashbijukchhe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
