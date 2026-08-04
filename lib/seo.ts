import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const siteUrl = siteConfig.domain;

export const defaultOpenGraphImage = `${siteUrl}/images/seo/kcs-og-image.jpg`;

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildSeoMetadata({
  title,
  description,
  path,
  keywords,
}: SeoOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: defaultOpenGraphImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOpenGraphImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}