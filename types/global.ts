export interface NavLink {
  label: string;
  href: string;
}

export interface TrustItem {
  label: string;
  value: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  iconKey: string;
}

export interface ImageCaption {
  src: string;
  alt: string;
  caption?: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface CtaLink {
  label: string;
  href: string;
  type: "tel" | "whatsapp" | "internal";
}