import type { LucideIcon } from "lucide-react";

export interface ServiceCard {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface SupplyService {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
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