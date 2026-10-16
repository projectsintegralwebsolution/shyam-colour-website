import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shyamcolour.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/oem-private-label`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quality-assurance`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: "2026-10-12T00:00:00.000Z",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: "2026-10-12T00:00:00.000Z",
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
