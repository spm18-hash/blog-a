import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatTag(tag: string) {
  return tag.replace(/-/g, " ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
