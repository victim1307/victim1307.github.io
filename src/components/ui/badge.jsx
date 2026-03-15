import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/12 bg-white/[0.06] text-foreground/88",
        secondary:
          "border-white/10 bg-white/[0.04] text-foreground/72",
        outline:
          "border-white/10 bg-white/[0.03] text-foreground/80",
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
