import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.NEXT_PUBLIC_ORIGIN,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: new URL("/legal/privacy-policy", env.NEXT_PUBLIC_ORIGIN).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: new URL("/legal/terms-of-use", env.NEXT_PUBLIC_ORIGIN).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
