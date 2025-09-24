import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle image paths with basePath for GitHub Pages
export function getImagePath(path: string): string {
  // In production (GitHub Pages), prefix with repository name
  // In development, use the path as-is
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portofolio' : ''
  return `${basePath}${path}`
}
