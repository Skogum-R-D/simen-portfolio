"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-blue-700 bg-blue-900/60 text-blue-300",
        secondary: "border-white/10 bg-white/5 text-gray-300",
        success: "border-green-700 bg-green-900/60 text-green-300",
        warning: "border-yellow-700 bg-yellow-900/60 text-yellow-300",
        destructive: "border-red-700 bg-red-900/60 text-red-300",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
