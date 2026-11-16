import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { insights, services, site } from "@/lib/content";

const lastModified = new Date("2026-11-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/pricing/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/case-studies/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/blogs/`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/${s.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articles: MetadataRoute.Sitemap = insights.map((a) => ({
    url: `${site.url}/blogs/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${site.url}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...core, ...servicePages, ...articles, ...legal];
}
