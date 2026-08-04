"use client";

import Link from "next/link";
import { MessageSquare, RotateCcw } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import {
  OutlineButton,
  PrimaryButton,
  WhatsAppButton,
} from "@/components/base/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-4 py-24 text-center">
      <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
        Something went wrong
      </span>
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        We could not load this page
      </h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again, or contact{" "}
        {siteConfig.name} on WhatsApp or phone for help.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <PrimaryButton onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Try Again
        </PrimaryButton>
        <OutlineButton asChild>
          <Link href="/">Return Home</Link>
        </OutlineButton>
        <WhatsAppButton asChild>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="size-4" aria-hidden="true" />
            WhatsApp Support
          </a>
        </WhatsAppButton>
      </div>
      {error?.digest ? (
        <p className="text-xs text-muted-foreground">{error.digest}</p>
      ) : null}
    </div>
  );
}