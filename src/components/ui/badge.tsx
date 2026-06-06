import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium tracking-wider uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-olive/10 text-olive",
        secondary: "bg-gray-100 text-gray-700",
        success: "bg-olive/10 text-olive",
        warning: "bg-amber-100 text-amber-800",
        danger: "bg-red-100 text-red-800",
        outline: "border border-warm-border text-near-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
