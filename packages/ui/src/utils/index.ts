import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./use-mobile";

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(clsx(inputs));
}
