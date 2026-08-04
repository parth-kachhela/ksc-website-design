import type { LucideIcon } from "lucide-react";

export interface CoconutSizeGrade {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  suitableFor: string[];
  availabilityNote?: string;
  image?: string;
  imageAlt?: string;
  whatsappValue: string;
}

export interface CoconutTypeOption {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  availableGrades: string[];
  buyerExamples: string[];
  image: string;
  imageAlt: string;
  whatsappValue: string;
}

export interface SupplyService {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  inquiryType: string;
  supportedGrades?: string[];
}

export interface ServiceCard {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface BuyerType {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LocationCard {
  name: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}
