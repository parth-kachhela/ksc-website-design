import { Leaf, Star, Package, Handshake } from "lucide-react";

import { trustItems } from "@/app/_components/home.data";

const icons = [Leaf, Star, Package, Handshake];

export function HomeTrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {trustItems.map((item, index) => {
          const Icon = icons[index] ?? Star;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 text-left"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-pale">
                <Icon className="size-5 text-secondary" aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
                <p className="text-xs leading-4 text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
