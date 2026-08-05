import type { ServiceCard } from "@/types/service";
import type { FaqItem } from "@/types/service";
import type { Review } from "@/types/review";
import type { TrustItem } from "@/types/global";

export const hero = {
  eyebrow: "Bulk Tender Coconut Supply Across India",
  title: "Trusted Coconut Supplier in Gujarat for Pan-India Supply",
  description:
    "Kankeshwari Coconut Supplier supplies quality tender coconuts from the Somnath region of Gujarat to retailers, distributors, wholesalers and businesses across India. We focus on carefully selected coconuts, dependable communication, transparent order coordination and timely bulk supply.",
  primaryCta: "Get Bulk Supply Quote",
  secondaryCta: "Talk with Us",
  trustLine: "Trusted by buyers for quality, communication and reliable service",
};

export const trustItems: TrustItem[] = [
  { value: "5.0", label: "Google Rating" },
  { value: "34+", label: "Customer Reviews" },
  { value: "Gujarat", label: "Somnath Region" },
  { value: "Pan-India", label: "Supply Network" },
  { value: "Direct", label: "Phone & WhatsApp" },
];

export const supplyCards: ServiceCard[] = [
  {
    title: "Tender Coconut Supply",
    description:
      "Quality tender coconuts supplied for retailers, distributors, wholesalers, fruit sellers, hospitality businesses and other commercial requirements.",
    ctaLabel: "Inquire for Tender Coconut",
  },
  {
    title: "Size-Graded Coconut Supply",
    description:
      "Choose from available coconut size categories based on your market, customer preference, quantity and business requirements.",
    ctaLabel: "Discuss Size-Based Supply",
  },
  {
    title: "Bulk Coconut Orders",
    description:
      "Bulk coconut supply support for one-time, scheduled and recurring requirements across Gujarat and other parts of India.",
    ctaLabel: "Request Bulk Supply",
  },
];

export const benefits = [
  {
    title: "Quality-Focused Supply",
    description:
      "Coconuts are selected with attention to freshness, size, appearance and suitability for bulk business requirements.",
  },
  {
    title: "Pan-India Supply Support",
    description:
      "We discuss coconut supply requirements for buyers located across Gujarat and other states of India.",
  },
  {
    title: "Clear Communication",
    description:
      "Buyers can directly discuss quantity, size, destination, schedule and other supply requirements through phone or WhatsApp.",
  },
  {
    title: "Reliable Order Coordination",
    description:
      "Availability, quantity, dispatch planning and destination details are confirmed before the order is finalised.",
  },
  {
    title: "Bulk Order Capability",
    description:
      "Suitable for retailers, wholesalers, distributors, fruit sellers, hospitality businesses and recurring commercial buyers.",
  },
  {
    title: "Flexible Supply Planning",
    description:
      "Buyers can discuss one-time orders, scheduled deliveries or recurring coconut supply based on their business needs.",
  },
];

export const supplyNote =
  "Supply availability, dispatch schedule and delivery options depend on the required quantity, destination, current stock and transportation availability. Contact us directly for confirmation.";

export const gardenStory = {
  eyebrow: "Coconut Garden & Sourcing",

  title: "From Gujarat’s Coconut-Growing Region to Buyers Across India",

  description:
    "Our supply journey begins in the coconut-growing region around Somnath, Gujarat. We focus on selecting suitable coconuts, coordinating bulk requirements carefully and connecting businesses across India with a dependable coconut supply source.",

  highlights: [
    "Coconuts sourced from Gujarat’s coconut-growing region.",
    "Careful selection based on freshness, quality and size.",
    "Bulk supply support for different business requirements.",
    "Direct coordination for quantity, schedule and destination.",
  ],

  note:
    "Every order is handled according to the buyer’s quantity, preferred coconut size, delivery destination and expected supply schedule. Our goal is to build dependable, long-term relationships with buyers across India.",

  videoTitle: "Coconut Garden and Supply Journey",

  videoSubtitle:
    "Explore the natural coconut-growing environment and the journey behind our pan-India coconut supply.",
};

export const galleryImages = [
  {
    src: "/images/gallery/garden-1.svg",
    alt: "Coconut garden in the Somnath region of Gujarat",
    caption: "Coconut-growing region of Gujarat",
  },
  {
    src: "/images/gallery/garden-2.svg",
    alt: "Fresh tender coconuts selected for bulk supply across India",
    caption: "Tender coconuts prepared for bulk supply",
  },
  {
    src: "/images/gallery/garden-3.svg",
    alt: "Healthy coconut trees growing in Gujarat",
    caption: "Natural coconut gardens in Gujarat",
  },
  {
    src: "/images/gallery/garden-4.svg",
    alt: "Quality coconuts prepared for wholesale and commercial buyers",
    caption: "Quality coconuts for commercial buyers",
  },
];

export const processSteps = [
  {
    title: "Share Your Requirement",
    description:
      "Tell us your required quantity, preferred coconut size, delivery destination and expected supply date.",
  },
  {
    title: "Confirm Availability",
    description:
      "We review current coconut availability and understand the complete details of your requirement.",
  },
  {
    title: "Plan the Supply",
    description:
      "Quantity, pricing, dispatch schedule, transportation and destination-related details are discussed directly.",
  },
  {
    title: "Finalise Your Order",
    description:
      "The order proceeds after the supply terms and required details are mutually confirmed.",
  },
];

export const serviceAreaTitle =
  "Trusted Coconut Supplier in Gujarat with Supply Across India";

export const serviceAreaParagraphs = [
  "Kankeshwari Coconut Supplier is connected to the coconut-growing region around Somnath, Gujarat. We supply quality tender coconuts for retailers, wholesalers, distributors, fruit sellers, hospitality businesses and other commercial buyers looking for a dependable coconut supplier in Gujarat.",

  "Our coconut supply service is not limited to Gujarat. Buyers from different cities and states across India can contact us to discuss their bulk coconut requirements. Share your required quantity, preferred coconut size, delivery destination and expected schedule so that availability and transportation options can be reviewed properly.",

  "Businesses searching for a trusted coconut supplier in India can communicate with us directly through phone or WhatsApp. We believe that reliable supply begins with clear communication, honest availability confirmation and careful order planning before dispatch.",

  "Whether you need a one-time bulk order or recurring coconut supply, Kankeshwari Coconut Supplier can help you discuss suitable sourcing options. Supply availability and delivery planning depend on quantity, destination, current stock and transportation arrangements.",
];

export const startupSection = {
  eyebrow: "Start Your Coconut Business",
  title: "Planning to Start or Expand a Coconut Business?",
  description:
    "A reliable sourcing connection is important for starting or growing a coconut retail, wholesale or distribution business. Share your expected quantity, business location and supply schedule to discuss available coconut sourcing options from Gujarat.",
  points: [
    "Discuss your expected order quantity",
    "Share your city and delivery destination",
    "Choose the preferred coconut size category",
    "Plan one-time or recurring supply",
  ],
  ctaLabel: "Discuss Your Business Requirement",
};

export const reviews: Review[] = [
  {
    name: "Kartik Saharan",
    text: "Very good quality.",
    initials: "KS",
  },
  {
    name: "Mrinal Singh",
    text: "Very good communication with the supplier and supply was also very nice and on time.",
    initials: "MS",
  },
  {
    name: "Tarang Ram",
    text: "Super quality.",
    initials: "TR",
  },
  {
    name: "Chhagan Suthar",
    text: "Superb quality.",
    initials: "CS",
  },
  {
    name: "Sumar Khan",
    text: "Best quality.",
    initials: "SK",
  },
  {
    name: "Aditya Baweja",
    text: "Very good quality coconut.",
    initials: "AB",
  },
  {
    name: "Rakesh Bansal",
    text: "Good service.",
    initials: "RB",
  },
];

export const reviewDisclosure =
  "The displayed rating and review count are based on available Google Business information and may change over time.";

export const faqs: FaqItem[] = [
  {
    question: "Where is Kankeshwari Coconut Supplier based?",
    answer:
      "Kankeshwari Coconut Supplier is based in Gujarat and is connected to the coconut-growing region around Somnath. We discuss bulk coconut supply requirements for buyers across India.",
  },
  {
    question: "Do you supply coconuts across India?",
    answer:
      "Yes. Buyers from different cities and states across India can contact us for bulk coconut requirements. Supply and transportation availability depend on quantity, destination, current stock and delivery planning.",
  },
  {
    question: "How can I place a bulk coconut inquiry?",
    answer:
      "Call +91 63522 95050 or contact us through WhatsApp. Share your required quantity, preferred coconut size, delivery destination and expected supply date.",
  },
  {
    question: "Do you supply tender coconuts?",
    answer:
      "Yes. We supply tender coconuts for retailers, wholesalers, distributors, fruit sellers, hospitality businesses and other commercial buyers, subject to current availability.",
  },
  {
    question: "Can I contact you for recurring coconut supply?",
    answer:
      "Yes. Businesses requiring weekly, scheduled or recurring coconut supply can share their expected quantity, destination and preferred schedule for discussion.",
  },
  {
    question: "Can you support a new coconut business startup?",
    answer:
      "Yes. New retailers, distributors and coconut business owners can discuss their expected quantity, preferred coconut category, business location and recurring supply requirements.",
  },
  {
    question: "Why choose Kankeshwari Coconut Supplier?",
    answer:
      "We focus on quality-based coconut selection, direct communication, clear availability confirmation, flexible bulk-order planning and dependable coordination for buyers across India.",
  },
  {
    question: "How do I choose a trusted coconut supplier in Gujarat?",
    answer:
      "Check the supplier’s customer feedback, product quality, communication, bulk-order capability and willingness to confirm availability, transportation and supply details before finalising an order.",
  },
  {
    question: "What information should I share for a supply quotation?",
    answer:
      "Share your required quantity, preferred coconut size, delivery city, state, expected order date and whether the requirement is one-time or recurring.",
  },
];

export const finalCta = {
  title: "Looking for a Trusted Coconut Supplier in India?",
  description:
    "Share your coconut quantity, preferred size, delivery destination and expected supply schedule with Kankeshwari Coconut Supplier.",
  location: "Supplying from Gujarat to Buyers Across India",
};
