import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand/BrandMark";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-4 py-24 text-center">
      <BrandMark className="size-16" />
      <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
        Page Not Found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for may have moved or does not exist.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button
          asChild
          className="bg-[#25D366] text-white hover:bg-[#1fb257]"
        >
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Contact on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}