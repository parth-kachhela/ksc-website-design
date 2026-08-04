import { z } from "zod";

const mobileNumberRegex = /^(\+?91[\s-]?|0)?[6-9]\d{9}$/;

function normalizeMobile(value: string): string {
  return value.replace(/[\s-]/g, "");
}

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)."),
  mobileNumber: z
    .string()
    .min(1, "Please enter your mobile number.")
    .refine(
      (value) => mobileNumberRegex.test(normalizeMobile(value)),
      "Please enter a valid Indian mobile number (e.g. +91 98765 43210).",
    ),
  businessName: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type."),
  quantity: z
    .string()
    .min(1, "Please enter the required quantity.")
    .max(80, "Please keep the quantity within 80 characters."),
  frequency: z.string().min(1, "Please select a requirement frequency."),
  deliveryLocation: z
    .string()
    .min(2, "Please enter your city or delivery location."),
  expectedDate: z.string().optional(),
  message: z.string().max(1000, "Please keep the message within 1000 characters.").optional(),
  consent: z.boolean().refine((value) => value === true, {
    message:
      "Please agree to open WhatsApp with your inquiry details.",
  }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormSchema = {
  fullName: "",
  mobileNumber: "",
  businessName: "",
  inquiryType: "",
  quantity: "",
  frequency: "",
  deliveryLocation: "",
  expectedDate: "",
  message: "",
  consent: false,
};

export { normalizeMobile };