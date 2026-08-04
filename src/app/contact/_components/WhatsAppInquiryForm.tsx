"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, MessageCircle, Send, CheckCircle2 } from "lucide-react";

import { buildWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { ContactFormValues, InquiryType, RequirementFrequency } from "@/types/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactFormSchema,
  contactFormDefaults,
  normalizeMobile,
  type ContactFormSchema,
} from "@/app/contact/_components/contact.schema";
import {
  inquiryTypes,
  requirementFrequencies,
  coconutTypesOptions,
  coconutSizeGradeOptions,
} from "@/app/contact/_components/contact.data";

interface WhatsAppInquiryFormProps {
  defaultInquiryType?: string;
}

const VALID_INQUIRY_RECORD = Object.fromEntries(
  inquiryTypes.map((type) => [type, type]),
);
const VALID_COCONUT_TYPE_RECORD = Object.fromEntries(
  coconutTypesOptions.map((type) => [type, type]),
);
const VALID_SIZE_GRADE_RECORD = Object.fromEntries(
  coconutSizeGradeOptions.map((grade) => [grade, grade]),
);

export function WhatsAppInquiryForm({
  defaultInquiryType,
}: WhatsAppInquiryFormProps) {
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState(false);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      ...contactFormDefaults,
      inquiryType: defaultInquiryType ?? "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inquiry = params.get("inquiryType");
    const legacyType = params.get("type");
    const coconutType = params.get("coconutType");
    const sizeGrade = params.get("sizeGrade");

    if (inquiry && VALID_INQUIRY_RECORD[inquiry]) {
      form.setValue("inquiryType", inquiry);
    } else if (legacyType && VALID_INQUIRY_RECORD[legacyType]) {
      form.setValue("inquiryType", legacyType);
    }
    if (coconutType && VALID_COCONUT_TYPE_RECORD[coconutType]) {
      form.setValue("coconutType", coconutType);
    }
    if (sizeGrade && VALID_SIZE_GRADE_RECORD[sizeGrade]) {
      form.setValue("sizeGrade", sizeGrade);
    }
    // Preselect from service page only when defaults were not passed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultInquiryType]);

  function onSubmit(values: ContactFormSchema) {
    setIsOpening(true);
    const payload: ContactFormValues = {
      ...values,
      mobileNumber: normalizeMobile(values.mobileNumber),
      inquiryType: values.inquiryType as InquiryType,
      coconutType: values.coconutType as ContactFormValues["coconutType"],
      sizeGrade: values.sizeGrade as ContactFormValues["sizeGrade"],
      frequency: values.frequency as RequirementFrequency,
    };
    const url = buildWhatsAppInquiryUrl(payload);
    setSubmittedUrl(url);
    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsOpening(false);
    }, 150);
  }

  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-[#25D366]/15">
          <MessageCircle className="size-5 text-[#1fb257]" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            WhatsApp Inquiry Form
          </h2>
          <p className="text-sm text-muted-foreground">
            Your details become a ready-to-send WhatsApp message.
          </p>
        </div>
      </div>

      {submittedUrl ? (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex flex-col gap-3 rounded-xl border border-secondary/30 bg-brand-pale p-4"
        >
          <p className="flex items-start gap-2 text-sm leading-6 font-medium text-foreground">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-secondary"
              aria-hidden="true"
            />
            Your WhatsApp message has been prepared. If it did not open
            automatically, tap the button below.
          </p>
          <Button
            asChild
            size="lg"
            className="w-fit bg-[#25D366] text-white hover:bg-[#1fb257]"
          >
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Open WhatsApp Message
            </a>
          </Button>
        </div>
      ) : null}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      autoComplete="name"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      inputMode="tel"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Business Name <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your business or shop name"
                    autoComplete="organization"
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Required Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Example: 500 coconuts"
                      autoComplete="off"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="coconutType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coconut Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select coconut type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {coconutTypesOptions.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sizeGrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Size Grade</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select size grade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {coconutSizeGradeOptions.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirement Frequency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {requirementFrequencies.map((frequency) => (
                        <SelectItem key={frequency} value={frequency}>
                          {frequency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery City or Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City or delivery location"
                      autoComplete="address-level2"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="expectedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Expected Requirement Date{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <div className="relative">
                  <CalendarDays
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <FormControl>
                    <Input
                      type="date"
                      className="h-11 pl-9"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Additional Message{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us anything else about your requirement"
                    rows={4}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This text will be included in the WhatsApp message.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-label="I agree to open WhatsApp with my inquiry details"
                      className="mt-0.5"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-6 text-muted-foreground">
                    I agree to open WhatsApp with my inquiry details.
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isOpening}
            className={cn("w-full bg-[#25D366] text-white hover:bg-[#1fb257]")}
          >
            {isOpening ? (
              <>
                <span
                  className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden="true"
                />
                Preparing WhatsApp Message…
              </>
            ) : (
              <>
                <Send className="size-4" aria-hidden="true" />
                Continue to WhatsApp
              </>
            )}
          </Button>
          <p className="text-center text-xs leading-5 text-muted-foreground">
            No details are stored on this website. Your information is only used
            to prepare the WhatsApp message.
          </p>
        </form>
      </Form>
    </div>
  );
}