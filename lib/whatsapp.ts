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
Required Quantity: ${data.quantity}
Requirement Frequency: ${data.frequency}
Delivery Location: ${data.deliveryLocation}
Expected Date: ${data.expectedDate || "Not specified"}

Additional Message:
${data.message || "No additional message"}

I found you through ${siteConfig.domain.replace("https://", "")}.

Please share the available supply details.
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