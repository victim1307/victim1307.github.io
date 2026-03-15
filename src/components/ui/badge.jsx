import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
        secondary:
          "border-amber-300/30 bg-amber-300/10 text-amber-100",
        outline:
          "border-border bg-background/40 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
