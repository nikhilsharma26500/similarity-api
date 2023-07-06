import { FC, forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// These classes will always apply to the Paragraph component
const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    // Defining properties that Paragraph can have
    variants: {
      size: {
        default: "text-4xl md:text-4xl lg:text-6xl",
        lg:"text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-2xl lg:text-4xl",
      },
    },
    // Default properties that Paragraph will have
    defaultVariants: {
      size: "default",
    },
  }
);

// Defining the props that Paragraph can have
interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> { }

const Paragraph = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({ className, size, children, ...props }, ref) => {
  return <h1 ref={ref} {...props} className={cn(
    headingVariants({ size, className }))}>{children}</h1>

})

// add display name for debugging purposes
Paragraph.displayName = "Paragraph";

export default Paragraph;
