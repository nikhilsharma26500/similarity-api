import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cn refers to className
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
