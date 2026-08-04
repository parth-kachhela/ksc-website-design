import { siteConfig } from "@/lib/site-config";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Coconut Supplier Services", href: "/coconut-supplier-services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerServices = [
  { label: "Tender Coconut Supply", href: "/coconut-supplier-services#tender-coconut" },
  { label: "Bulk Coconut Orders", href: "/coconut-supplier-services#bulk-order" },
  { label: "Coconut Supply for Businesses", href: "/coconut-supplier-services#buyers" },
  { label: "Coconut Business Startup Sourcing", href: "/coconut-supplier-services#startup" },
] as const;

export const callHref = `tel:${siteConfig.phoneRaw}`;
export const mailHref = `mailto:${siteConfig.email}`;