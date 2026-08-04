"use client";

import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";

export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-white/95 backdrop-blur supports-[padding-bottom:env(safe-area-inset-bottom)]:pb-[env(safe-area-inset-bottom)] md:hidden"
      role="region"
      aria-label="Quick contact actions"
    >
      <a
        href={callHref}
        className="flex min-h-12 items-center justify-center gap-2 border-r border-border bg-white py-3 text-sm font-semibold text-foreground transition-colors active:bg-muted"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-semibold text-white transition-colors active:bg-[#1fb257]"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}