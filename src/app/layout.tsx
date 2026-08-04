import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";
import { headingFont, bodyFont } from "@/app/fonts";
import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, webSiteSchema } from "@/lib/structured-data";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsAppButton } from "@/components/global/FloatingWhatsAppButton";
import { MobileContactBar } from "@/components/global/MobileContactBar";
import { JsonLd } from "@/components/global/JsonLd";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Coconut Supplier in Gadu & Chorvad`,
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "coconut supplier in Gadu",
    "coconut supplier in Chorvad",
    "coconut supplier in Junagadh",
    "coconut supplier in Gujarat",
    "bulk coconut supplier",
    "tender coconut supplier",
    "green coconut supplier",
    "coconut business startup",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-64.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Coconut Supplier in Gadu & Chorvad`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.domain}/images/seo/kcs-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kankeshwari Coconut Supplier - Tender, Green and Bulk Coconut Supply",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Coconut Supplier in Gadu & Chorvad`,
    description: siteConfig.description,
    images: [`${siteConfig.domain}/images/seo/kcs-og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#234B20",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <JsonLd data={[localBusinessSchema(), webSiteSchema()]} />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <MobileContactBar />
      </body>
    </html>
  );
}
