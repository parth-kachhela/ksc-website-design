import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.domain;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WholesaleStore"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: baseUrl,
    logo: `${baseUrl}/images/brand/kcs-logo.png`,
    image: `${baseUrl}/images/seo/kcs-og-image.jpg`,
    telephone: "+91-63522-95050",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gadu - Chorvad Highway, Opposite Vishanvel Road, Patiya",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Place", name: "Gadu" },
      { "@type": "Place", name: "Chorvad" },
      { "@type": "Place", name: "Junagadh" },
      { "@type": "Place", name: "Gujarat" },
      { "@type": "Place", name: "India" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: `${siteConfig.reviewCount}`,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: baseUrl,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Coconut Supply",
    provider: { "@type": "LocalBusiness", name: siteConfig.name, url: baseUrl },
    areaServed: ["Gadu", "Chorvad", "Junagadh", "Gujarat", "India"],
    description:
      "Wholesale tender coconut and size-graded coconut supply based on preferred size grade, bulk quantity, delivery destination and supply frequency. Sourced directly from farms in Gadu and the coastal areas near Somnath, Junagadh, Gujarat.",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function videoObjectSchema(options?: {
  name?: string;
  description?: string;
  thumbnailUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: options?.name ?? "Coconut Garden and Supply Journey - Kankeshwari Coconut Supplier",
    description:
      options?.description ??
      "Explore the coconut gardens and natural growing environment connected with supply from Kankeshwari Coconut Supplier.",
    thumbnailUrl:
      options?.thumbnailUrl ?? `${baseUrl}/images/video/coconut-garden-poster.jpg`,
    uploadDate: "2025-01-01",
  };
}

export function jsonLdScript(blocks: object[]) {
  return blocks.map((block, index) => ({ "@@jsonld": block, key: index }));
}