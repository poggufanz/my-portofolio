import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wide cursor-pointer border-[3px] border-[var(--neo-border)] transition-[transform,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neo-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--neo-primary)] text-white shadow-[var(--neo-shadow-md)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--neo-shadow-sm)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        secondary:
          "bg-[var(--neo-secondary)] text-white shadow-[var(--neo-shadow-md)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--neo-shadow-sm)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        accent:
          "bg-[var(--neo-accent)] text-[var(--neo-text)] shadow-[var(--neo-shadow-md)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--neo-shadow-sm)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        outline:
          "bg-white text-[var(--neo-text)] shadow-[var(--neo-shadow-md)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--neo-shadow-sm)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        ghost:
          "border-transparent bg-transparent text-[var(--neo-text)] shadow-none hover:bg-[var(--neo-accent)]/20 hover:border-[var(--neo-border)]",
        destructive:
          "bg-[var(--destructive)] text-white shadow-[var(--neo-shadow-md)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--neo-shadow-sm)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        link: "border-transparent bg-transparent text-[var(--neo-primary)] shadow-none underline underline-offset-4 hover:text-[var(--neo-text)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
