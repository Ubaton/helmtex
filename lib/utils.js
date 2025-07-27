import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind “cn” helper */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Estimate reading time (in minutes) based on ~200 wpm.
 * Strips any HTML tags, counts words, and rounds up.
 */
export function calculateReadingTime(text = "") {
  // remove HTML tags
  const stripped = text.replace(/<[^>]+>/g, "");
  // count words
  const wordCount = stripped.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
