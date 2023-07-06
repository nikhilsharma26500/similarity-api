import { FC, forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// These classes will always apply to the Paragraph component
const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 text-center",
  {
    // Defining properties that Paragraph can have
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    // Default properties that Paragraph will have
    defaultVariants: {
      size: "default",
    },
  }
);

// Defining the props that Paragraph can have
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof paragraphVariants> { }

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, size, children, ...props }, ref) => {
  return (
    <>
      <p ref={ref} {...props} className={cn(
        paragraphVariants({ size, className }))}>{children}</p>
    </>
  )

})

// add display name for debugging purposes
Paragraph.displayName = "Paragraph";

export default Paragraph;
