export const siteConfig = {
  name: "Kankeshwari Coconut Supplier",
  shortName: "KCS",
  domain: "https://kankeshwaricoconutsupplier.com",
  description:
    "Kankeshwari Coconut Supplier is a wholesale tender coconut supplier in Gadu, Junagadh, Gujarat, sourcing fresh coconuts directly from farms for bulk buyers.",
  phoneDisplay: "+91 63522 95050",
  phoneRaw: "916352295050",
  email: "kcsgadu@gmail.com",
  addressShort: "Gadu, Junagadh, Gujarat - 362255",
  addressFull:
    "At Gadu -District Junagadh, Gujarat - 362255",
  city: "Gadu",
  district: "Junagadh",
  state: "Gujarat",
  postalCode: "362255",
  country: "India",
  whatsappUrl: "https://wa.me/916352295050",
  googleMapsQuery:
    "Kankeshwari Coconut Supplier, Gadu Chorvad Highway, Junagadh, Gujarat 362255",
  rating: "5.0",
  reviewCount: 34,
  instagramUsername: "kcsgadu",
  instagramUrl: "https://www.instagram.com/kcsgadu",
} as const;

export type SiteConfig = typeof siteConfig;
