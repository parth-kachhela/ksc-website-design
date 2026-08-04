import type { ContactFormValues } from "@/types/contact";
import { siteConfig } from "@/lib/site-config";

export function buildWhatsAppInquiryMessage(data: ContactFormValues): string {
  const message = `
Hello Kankeshwari Coconut Supplier,

I would like to discuss a coconut supply requirement.

Name: ${data.fullName}
Mobile Number: ${data.mobileNumber}
Business Name: ${data.businessName || "Not provided"}
Inquiry Type: ${data.inquiryType}
Coconut Type: ${data.coconutType}
Preferred Size Grade: ${data.sizeGrade}
Required Quantity: ${data.quantity}
Requirement Frequency: ${data.frequency}
Delivery Location: ${data.deliveryLocation}
Expected Date: ${data.expectedDate || "Not specified"}

Additional Message:
${data.message || "No additional message"}

I found you through ${siteConfig.domain.replace("https://", "")}.

Please confirm the available coconut type, size grade and supply details.
  `.trim();

  return message;
}

export function buildWhatsAppInquiryUrl(data: ContactFormValues): string {
  const message = buildWhatsAppInquiryMessage(data);
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppInquiry(
  data: ContactFormValues,
  target = "_blank",
): void {
  const url = buildWhatsAppInquiryUrl(data);
  window.open(url, target, "noopener,noreferrer");
}

export function buildGenericWhatsAppUrl(message: string): string {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

interface ContactQueryParams {
  inquiryType?: string;
  coconutType?: string;
  sizeGrade?: string;
}

export function buildContactQuery(params: ContactQueryParams): string {
  const search = new URLSearchParams();
  if (params.inquiryType) search.set("inquiryType", params.inquiryType);
  if (params.coconutType) search.set("coconutType", params.coconutType);
  if (params.sizeGrade) search.set("sizeGrade", params.sizeGrade);
  const qs = search.toString();
  return qs ? `/contact?${qs}` : "/contact";
}

export function buildServiceWhatsAppUrl(
  inquiryType: string,
  coconutType?: string,
  sizeGrade?: string,
): string {
  const parts = [
    "Hello Kankeshwari Coconut Supplier,",
    "",
    "I would like to discuss a coconut supply requirement.",
    "",
    `Inquiry Type: ${inquiryType}`,
    coconutType ? `Coconut Type: ${coconutType}` : "",
    sizeGrade ? `Preferred Size Grade: ${sizeGrade}` : "",
    "",
    "I found you through kankeshwaricoconutsupplier.com.",
  ].filter(Boolean);
  return buildGenericWhatsAppUrl(parts.join("\n"));
}