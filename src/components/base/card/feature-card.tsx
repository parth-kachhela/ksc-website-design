import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface FeatureCardProps extends React.ComponentProps<typeof Card> {
  icon: LucideIcon;
  title: string;
  description?: string;
  cardVariant?: "white" | "pale";
  iconTone?: "leaf" | "white";
  iconSize?: "md" | "lg";
  titleSize?: "lg" | "xl" | "2xl";
  descriptionSize?: "sm" | "base";
  hover?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  cardVariant = "white",
  iconTone = "leaf",
  iconSize = "md",
  titleSize = "xl",
  descriptionSize = "base",
  hover = false,
  className,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "h-full rounded-2xl border-border",
        cardVariant === "pale" ? "bg-brand-pale" : "bg-white",
        hover && "transition-shadow duration-300 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <span
          className={cn(
            "flex items-center justify-center rounded-xl",
            iconSize === "lg" ? "size-12" : "size-11",
            iconTone === "white"
              ? "bg-white shadow-sm"
              : "bg-brand-leaf",
          )}
        >
          <Icon
            className={cn(
              iconTone === "white" ? "text-secondary" : "text-primary",
              iconSize === "lg" ? "size-6" : "size-5",
            )}
            aria-hidden="true"
          />
        </span>
        <CardTitle
          className={cn(
            "font-heading font-semibold text-foreground",
            titleSize === "2xl" && "text-2xl",
            titleSize === "xl" && "text-xl",
            titleSize === "lg" && "text-lg leading-6",
          )}
        >
          {title}
        </CardTitle>
      </CardHeader>
      {description || children ? (
        <CardContent>
          {description ? (
            <p
              className={cn(
                "text-muted-foreground",
                descriptionSize === "base" ? "text-base leading-7" : "text-sm leading-6",
              )}
            >
              {description}
            </p>
          ) : null}
          {children}
        </CardContent>
      ) : null}
    </Card>
  );
}