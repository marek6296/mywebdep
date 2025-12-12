/**
 * Performance utilities and flags
 */

// Check if animations should be disabled
export const shouldDisableAnimations = () => {
  if (typeof window === "undefined") return false
  
  // Check environment variable
  if (process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === "true") {
    return true
  }
  
  // Check prefers-reduced-motion
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Get optimized viewport settings for Framer Motion
export const getViewportSettings = (aboveFold = false) => {
  if (shouldDisableAnimations()) {
    return { once: true, amount: 1 } as const
  }
  
  if (aboveFold) {
    // For above-the-fold content, trigger immediately
    return { once: true, amount: 0 } as const
  }
  
  // For below-the-fold, preload 200px before
  return { once: true, amount: 0.1, margin: "200px 0px" as const } as const
}

// Optimized useInView margin
export const getInViewMargin = (aboveFold = false) => {
  if (shouldDisableAnimations()) return "0px"
  return aboveFold ? "0px" : "-200px"
}

