# Kankeshwari Coconut Supplier — Website

Production-ready, SEO-focused informational website for **Kankeshwari Coconut Supplier** (KCS), a coconut supplier based in Gadu, Chorvad Highway, Junagadh, Gujarat.

Live domain: `https://kankeshwaricoconutsupplier.com`

This is **not** an e-commerce website. It generates inquiries via **phone** and **WhatsApp**.

---

## 1. Project Overview

- Generates organic Google traffic for location-based coconut supplier keywords (Gadu, Chorvad, Junagadh, Gujarat).
- Presents KCS as a trusted, quality-focused bulk coconut supplier.
- Converts visitors into direct **phone calls** and **WhatsApp inquiries**.
- Includes a validated **WhatsApp Inquiry Form** that opens WhatsApp with a fully formatted, pre-filled message.

## 2. Technology Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Framework    | Next.js 16 (App Router, Server Components)   |
| Language     | TypeScript (strict)                          |
| Styling      | Tailwind CSS v4 + shadcn/ui (Radix primitives) |
| Forms        | React Hook Form + Zod validation             |
| Icons        | Lucide React                                 |
| Animation    | Framer Motion (subtle, reduced-motion aware) |
| Fonts        | `next/font` (Cormorant Garamond + Manrope)   |
| Images       | `next/image`                                 |

## 3. Setup

```bash
npm install
```

## 4. Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## 5. Production Build

```bash
npm run build
npm run start
npm run lint
```

`npm run build` must complete without errors before deploying.

## 6. Folder Structure

```
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata, JSON-LD, nav/footer
│   ├── page.tsx              # Home (composes app/_components only)
│   ├── about/                # About page + its own _components
│   ├── coconut-supplier-services/  # Services page + its own _components
│   ├── contact/              # Contact page + form + its own _components
│   ├── _components/          # Home page sections + home.data.ts
│   ├── robots.ts, sitemap.ts, manifest.ts
│   ├── loading.tsx, error.tsx, not-found.tsx
│   └── fonts.ts
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   ├── brand/                # BrandLogo, BrandMark
│   └── global/               # Navbar, Footer, floating buttons, etc.
├── lib/
│   ├── site-config.ts        # ★ ALL business details (single source of truth)
│   ├── whatsapp.ts           # WhatsApp message builder
│   ├── seo.ts, structured-data.ts, navigation.ts, utils.ts
├── types/                    # Strict TS types
├── public/images/...         # Brand, home, garden, gallery, video, seo assets
├── public/videos/            # Placeholder for the coconut garden video
└── scripts/generate-images.mjs  # Generates placeholder SVGs + OG image
```

## 7. Business Configuration

All business details (name, phone, email, address, WhatsApp URL, rating, review count) live in **`lib/site-config.ts`**.

| Setting        | Default                              |
| -------------- | ------------------------------------ |
| Name           | Kankeshwari Coconut Supplier         |
| Phone          | +91 63522 95050                      |
| Email          | kcsgadu@gmail.com                    |
| Address        | Gadu, Junagadh, Gujarat - 362255     |
| WhatsApp       | https://wa.me/916352295050           |
| Rating         | 5.0 (configurable)                   |
| Review count   | 34 (configurable)                    |

Never hardcode contact details inside components — always import from `lib/site-config.ts`.

## 8. Replacing Images

All image paths are referenced from `public/images/`:

- **Logo**: `public/images/brand/kcs-logo.png` / `kcs-logo.svg`
- **Home hero**: `public/images/home/hero-coconut.svg`
- **Gallery**: `public/images/gallery/garden-1.svg` … `garden-4.svg`
- **About**: `public/images/about/about-garden.svg`
- **Services**: `public/images/services/*.svg`
- **Video poster**: `public/images/video/coconut-garden-poster.svg`

Replace the demo `.svg` files with real WebP/AVIF/JPG photos keeping the **same filenames** (or update the `src` in the relevant `*.data.ts` files). Keep a consistent green/natural color treatment. The logo PNG/SVG are the real brand assets.

## 9. Replacing the Coconut Garden Video

The video is referenced in `app/_components/HomeGardenStory.tsx`:

```ts
const VIDEO_SRC = "/videos/coconut-garden.mp4";
```

Drop your file at `public/videos/coconut-garden.mp4` (or change `VIDEO_SRC` to an optimized external source). The player is click-to-play, uses `preload="none"`, and shows the poster until opened. If no video file is present, a graceful fallback message is shown.

## 10. Updating Rating & Review Count

Edit `lib/site-config.ts`:

```ts
rating: "5.0",
reviewCount: 34,
```

These values feed the home Trust Bar, hero trust line, reviews section, and the LocalBusiness `aggregateRating` JSON-LD. Only publish a rating you can verify.

## 11. How the WhatsApp Inquiry Works

The form lives in `app/contact/_components/WhatsAppInquiryForm.tsx`.

1. React Hook Form + Zod validate every field (including Indian mobile format).
2. On submit, `buildWhatsAppInquiryUrl()` in `lib/whatsapp.ts` builds the formatted message and URL-encodes it.
3. WhatsApp opens in a new tab with the pre-filled message: `https://wa.me/916352295050?text=<encoded>`.
4. No data is stored, sent to a server, or persisted locally.

## 12. Updating SEO Metadata

Per-page metadata is generated in each `app/*/page.tsx` via `buildSeoMetadata()` (`lib/seo.ts`):

- Unique `title`, `description`, `canonical`
- Open Graph + Twitter card
- Robots directives

Structured data utilities live in `lib/structured-data.ts` (LocalBusiness + WholesaleStore, WebSite, BreadcrumbList, Service, FAQPage, VideoObject). Sitemap entries are in `app/sitemap.ts`; robots rules in `app/robots.ts`.

## 13. Analytics & Search Console

Optional, env-based (safe when absent):

```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

Add these to your deployment environment (Vercel project settings) when ready. No fake tracking IDs are included.

## 14. Deployment to Vercel

```bash
npm i -g vercel
vercel          # link the project
vercel --prod   # deploy production
```

Project settings: **Next.js** framework preset, build command `next build`, output directory default. Add the environment variables from §13 in **Settings → Environment Variables**.

## 15. Connecting kankeshwaricoconutsupplier.com

1. In **Vercel → Project → Settings → Domains**, add `kankeshwaricoconutsupplier.com`.
2. At your DNS provider, add an **A record** pointing to Vercel's IP (shown in the Vercel dashboard) — or a **CNAME** to `cname.vercel-dns.com` for `www`.
3. Wait for propagation (minutes to a few hours). Vercel provisions the SSL certificate automatically.
4. Add the `www` subdomain (redirect to apex or serve both) in the same Domains panel.
5. After the domain is live, verify the sitemap at `https://kankeshwaricoconutsupplier.com/sitemap.xml` and submit it in Google Search Console (add the domain property + HTML verification from §13).

## 16. Brand & Colors

Brand palette (defined in `app/globals.css`):

- Primary Dark Green `#234B20`
- Deep Forest `#183C1C` / Dark Footer `#102C16`
- Brand Green `#4A9232`
- Bright Coconut Green `#91CE38`
- Soft Leaf `#DDEFCB` / Pale Green `#F3F8EE` / Warm Off White `#FCFDF9`

Headings use **Cormorant Garamond**; body uses **Manrope** (both via `next/font`).

## 17. Notes for Future Updates

- Do **not** add unverified claims (years of experience, delivery numbers, exports, certifications).
- Update the demo placeholder images/video before launch with real, accurate KCS visuals.
- Keep NAP (Name/Address/Phone) identical in `site-config.ts`, footer, contact page and structured data.
