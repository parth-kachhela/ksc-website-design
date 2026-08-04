import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";

import type { ServiceCard } from "@/types/service";
import type { FaqItem } from "@/types/service";
import type { Review } from "@/types/review";
import type { TrustItem } from "@/types/global";

export const hero = {
  eyebrow: "Bulk Tender & Green Coconut Supply",
  title: "Trusted Coconut Supplier in Gadu, Chorvad & Across Gujarat",
  description:
    "Kankeshwari Coconut Supplier provides quality tender and green coconuts for bulk buyers, retailers, distributors and businesses. Based near the Gadu\u2013Chorvad Highway in Junagadh, we focus on dependable communication, quality supply and timely service.",
  primaryCta: "Get Bulk Supply Quote",
  secondaryCta: "Talk with us",
  trustLine: "Rated 5.0 by customers on Google",
};

export const trustItems: TrustItem[] = [
  { value: "5.0", label: "Google Rating" },
  { value: "34", label: "Customer Reviews" },
  { value: "Gadu", label: "Located in Junagadh" },
  { value: "Bulk", label: "Coconut Supply" },
  { value: "Direct", label: "Phone & WhatsApp" },
];

export const supplyCards: ServiceCard[] = [
  {
    title: "Tender Coconut Supply",
    description:
      "Fresh tender coconuts suitable for customers looking for refreshing coconut water and dependable bulk availability.",
    ctaLabel: "Inquire for Tender Coconut",
  },
  {
    title: "Green Coconut Supply",
    description:
      "Quality green coconut supply for retailers, distributors, fruit sellers and other business requirements.",
    ctaLabel: "Discuss Green Coconut Supply",
  },
  {
    title: "Size-Graded Coconut Supply",
    description:
      "Discuss Big–Small, Small–Big, Medium Size and Small Size coconut requirements by type and quantity.",
    ctaLabel: "Discuss Size-Based Supply",
  },
  {
    title: "Bulk Coconut Orders",
    description:
      "Direct inquiry support for quantity, size, location and delivery-related requirements for larger coconut orders.",
    ctaLabel: "Request Bulk Supply",
  },
];

export const benefits = [
  {
    title: "Quality-Focused Supply",
    description:
      "Customer reviews repeatedly highlight coconut quality.",
  },
  {
    title: "Clear Communication",
    description:
      "Buyers can discuss quantity, location and requirements directly by call or WhatsApp.",
  },
  {
    title: "Timely Service",
    description: "Customer feedback mentions reliable and timely supply.",
  },
  {
    title: "Strategic Location",
    description:
      "Located at Gadu, near Chorvad Highway in Junagadh, Gujarat.",
  },
  {
    title: "Bulk Order Support",
    description:
      "Suitable for retailers, distributors, businesses and buyers with recurring requirements.",
  },
  {
    title: "Flexible Order Planning",
    description:
      "Buyers can discuss one-time, scheduled or recurring coconut supply based on their business needs.",
  },
];

export const supplyNote =
  "Supply availability depends on quantity, location and current stock. Contact the supplier for confirmation.";

export const gardenStory = {
  eyebrow: "Coconut Garden & Sourcing",

  title: "From Coconut Gardens to Reliable Supply",

  description:
    "Quality coconut supply begins at the source. Discover the natural coconut-growing environment, careful sourcing process and supply journey followed by Kankeshwari Coconut Supplier.",

  highlights: [
    "Coconuts sourced from trusted growing regions.",
    "Careful selection based on freshness and quality.",
    "Suitable supply support for retail and bulk requirements.",
    "Direct communication for quantity and delivery planning.",
  ],

  note:
    "Our sourcing journey is connected to Gujarat’s coconut-growing region. Every order is handled with attention to freshness, quality and dependable supply.",

  videoTitle: "Coconut Garden and Supply Journey",

  videoSubtitle:
    "A closer look at the natural source and journey behind our coconut supply.",
};

export const galleryImages = [
  {
    src: "/images/gallery/garden-1.svg",
    alt: "Green coconut garden near Gadu Junagadh Gujarat",
    caption: "Coconut garden near Gadu, Junagadh",
  },
  {
    src: "/images/gallery/garden-2.svg",
    alt: "Fresh tender coconuts prepared for bulk supply",
    caption: "Fresh tender coconuts for bulk supply",
  },
  {
    src: "/images/gallery/garden-3.svg",
    alt: "Coconut trees in the Gadu Chorvad region",
    caption: "Coconut trees in the Gadu Chorvad region",
  },
  {
    src: "/images/gallery/garden-4.svg",
    alt: "Green coconuts sourced for wholesale buyers",
    caption: "Green coconuts sourced for wholesale buyers",
  },
];

export const processSteps = [
  {
    title: "Share Your Requirement",
    description:
      "Tell us the coconut type, required quantity and delivery location.",
  },
  {
    title: "Confirm Availability",
    description:
      "The supplier reviews current availability and requirement details.",
  },
  {
    title: "Discuss Supply Details",
    description:
      "Quantity, timing and location-related information is confirmed directly.",
  },
  {
    title: "Complete Your Order",
    description:
      "Proceed after the final supply details are mutually confirmed.",
  },
];

export const serviceAreaTitle =
  "Coconut Supplier in Gadu, Chorvad and Junagadh";

export const serviceAreaParagraphs = [
  "Kankeshwari Coconut Supplier is based in Gadu, located in the Junagadh district of Gujarat, with close association with the Chorvad Highway. The location places the supplier close to the region's coconut-growing areas, which supports inquiries from buyers looking for a coconut supplier in Gadu, a coconut supplier in Chorvad and a coconut supplier in Junagadh.",
  "The business accepts direct bulk coconut inquiries for tender and green coconuts. Retailers, distributors, fruit sellers and businesses planning regular supply can share their required coconut type, quantity and delivery location. Because each requirement differs, buyers are encouraged to confirm current availability and delivery-related details directly with the supplier.",
  "For buyers searching for a bulk coconut supplier in Gujarat or a tender coconut supplier, Kankeshwari Coconut Supplier offers direct phone and WhatsApp support. Contact the supplier to discuss your quantity, location and expected requirement. Supply options depend on quantity and destination, so confirming the details directly helps buyers plan their sourcing.",
];

export const startupSection = {
  eyebrow: "Coconut Business Startup",
  title: "Planning a Coconut Business Startup?",
  description:
    "Starting a coconut-selling or distribution business requires a dependable sourcing connection. Share your expected quantity, business location and coconut requirement with Kankeshwari Coconut Supplier to discuss available bulk sourcing options.",
  points: [
    "Discuss expected quantity",
    "Share your city or delivery location",
    "Confirm coconut type and availability",
  ],
  ctaLabel: "Discuss Your Startup Requirement",
};

export const reviews: Review[] = [
  { name: "Kartik Saharan", text: "Very good quality.", initials: "KS" },
  {
    name: "Mrinal Singh",
    text: "Very good communication with the supplier and supply was also very nice and on time.",
    initials: "MS",
  },
  { name: "Tarang Ram", text: "Super quality.", initials: "TR" },
  { name: "Chhagan Suthar", text: "Superb quality.", initials: "CS" },
  { name: "Sumar Khan", text: "Best quality.", initials: "BK" },
  { name: "Aditya Baweja", text: "Very good quality coconut.", initials: "AB" },
  { name: "Rakesh Bansal", text: "Good service.", initials: "RB" },
];

export const reviewDisclosure =
  "Review count and rating shown are based on available Google business information and may change over time.";

export const faqs: FaqItem[] = [
  {
    question: "Where is Kankeshwari Coconut Supplier located?",
    answer:
      "Kankeshwari Coconut Supplier is located at Gadu, near the Gadu\u2013Chorvad Highway in Junagadh district, Gujarat - 362255.",
  },
  {
    question: "How can I place a bulk coconut inquiry?",
    answer:
      "You can call +91 63522 95050 or send your quantity, coconut type and delivery location through WhatsApp.",
  },
  {
    question: "Do you supply tender coconuts?",
    answer:
      "Yes, buyers can contact Kankeshwari Coconut Supplier to discuss tender coconut requirements and current availability.",
  },
  {
    question: "Do you provide green coconuts for business requirements?",
    answer:
      "Green coconut supply can be discussed for retailers, distributors and other bulk buyers, subject to availability and location.",
  },
  {
    question: "Can I contact you for a coconut business startup?",
    answer:
      "Yes. New business owners can share their expected quantity, location and coconut sourcing requirement to discuss available supply options.",
  },
  {
    question: "How do I choose the best coconut supplier in Chorvad?",
    answer:
      "Check coconut quality, buyer reviews, communication, location, supply availability and whether the supplier can clearly discuss your quantity and delivery requirements.",
  },
  {
    question: "What should I check when looking for the most trusted coconut supplier?",
    answer:
      "Review customer feedback, verify contact and location details, discuss quality expectations and confirm supply terms directly before finalizing an order.",
  },
  {
    question: "Is delivery available across Gujarat?",
    answer:
      "Delivery and supply availability depend on quantity, destination and current stock. Contact the supplier directly for confirmation.",
  },
];

export const finalCta = {
  title: "Need a Reliable Coconut Supplier?",
  description:
    "Share your coconut type, quantity and delivery location with Kankeshwari Coconut Supplier.",
  location: "Gadu, Junagadh, Gujarat - 362255",
};
