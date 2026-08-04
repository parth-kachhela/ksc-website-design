"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";

import { mainNav, callHref } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  GhostButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/base/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <GhostButton
          size="icon-lg"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </GhostButton>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 max-w-[85vw]">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2 text-left">
            <BrandMark className="size-8" />
            <span className="font-heading text-lg leading-tight text-foreground">
              {siteConfig.shortName}
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
          <PrimaryButton asChild size="lg" className="w-full">
            <a href={callHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call {siteConfig.phoneDisplay}
            </a>
          </PrimaryButton>
          <SecondaryButton asChild size="lg" className="w-full">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Inquiry
            </a>
          </SecondaryButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
