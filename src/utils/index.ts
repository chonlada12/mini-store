import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTHB = (n: number) =>
  new Intl.NumberFormat("us-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

export * from "./local-storage";
