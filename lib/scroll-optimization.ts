/**
 * Scroll optimization utilities for production
 */

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// RAF-based throttle for better performance
export function rafThrottle<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(this, args)
        rafId = null
      })
    }
  }
}

// Check if device is low-end
export function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false
  
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4
  if (cores < 4) return true
  
  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory
  if (memory && memory < 4) return true
  
  return false
}

// Get optimal animation settings based on device
export function getAnimationSettings() {
  const isLowEnd = isLowEndDevice()
  
  return {
    // Reduce animations on low-end devices
    reduceAnimations: isLowEnd,
    // Use simpler easing on low-end
    easing: isLowEnd ? "easeOut" : "easeInOut",
    // Shorter durations on low-end
    duration: isLowEnd ? 0.4 : 0.6,
  }
}

