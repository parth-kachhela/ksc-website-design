import { Star } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { siteConfig } from "@/lib/site-config";
import {
  reviews,
  reviewDisclosure,
} from "@/app/_components/home.data";

export function HomeReviews() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Customers Say"

            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.05}>
              <figure className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                <div
                  className="flex text-secondary"
                  aria-label={`${review.name} rated 5 out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-7 text-foreground">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white"
                  >
                    {review.initials}
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">
                      {review.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      Google Review
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-muted-foreground">
          {reviewDisclosure}
        </p>
      </div>
    </section>
  );
}
