import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Before adding many programmatic URLs, follow `.agents/skills/brainstorming/SKILL.md` and prefer substantive glossary-style pages over thin permutations. */

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return [
    {
      url: `${base}/ar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
