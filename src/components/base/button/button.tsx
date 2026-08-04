import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { Button as UiButton, buttonVariants } from "@/components/ui/button";

type UiButtonProps = React.ComponentProps<typeof UiButton>;

export interface ButtonProps
  extends Omit<UiButtonProps, "variant" | "size">,
    VariantProps<typeof buttonVariants> {}

export function Button(props: ButtonProps) {
  return <UiButton {...props} />;
}