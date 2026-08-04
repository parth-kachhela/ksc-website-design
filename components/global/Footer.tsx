import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { footerServices, mainNav, callHref, mailHref } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#102C16] text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6 md:pb-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-2xl bg-white p-4 shadow-xl shadow-black/20">
              <BrandLogo
                width={220}
                height={156}
                imgClassName="h-20 w-auto sm:h-24"
              />
            </span>
            <p className="max-w-xs text-sm leading-6 text-white/75">
              {siteConfig.description}
            </p>
            <p className="max-w-xs text-sm font-medium text-white">
              Quality coconut supply from Gadu, Junagadh, Gujarat.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-heading text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-[#91CE38]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services links">
            <h3 className="font-heading text-lg font-semibold text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerServices.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-[#91CE38]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={callHref}
                  className="flex items-start gap-2 text-white/75 transition-colors hover:text-[#91CE38]"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="flex items-start gap-2 text-white/75 transition-colors hover:text-[#91CE38]"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/75">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.addressShort}</span>
              </li>
            </ul>
            <Button
              asChild
              size="lg"
              className="mt-5 bg-[#25D366] text-white hover:bg-[#1fb257]"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-white/60">Follow us</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kankeshwari Coconut Supplier on Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E1306C] hover:text-white"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.name} ·{" "}
            {siteConfig.domain.replace("https://", "")}
          </p>
          <p className="text-xs text-white/60">
            Serving Gadu, Chorvad, Junagadh and buyers across Gujarat.
          </p>
          <a
            href="#main-content"
            aria-label="Back to top"
            className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
