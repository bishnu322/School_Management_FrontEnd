import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const inputVariants = cva(cn("w-full"), {
  variants: {
    variant: {
      default: "focus:ring-1 focus:ring-[#999999]",
      error: "border border-red-500",
      disabled: "",
    },
    size: {
      default: "p-2",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
