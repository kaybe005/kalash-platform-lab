import type { MetadataRoute } from "next";

const siteUrl = "https://kalashbijukchhe.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
