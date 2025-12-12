/**
 * Framer Motion variants for consistent animations
 * All animations use transform properties (no layout properties)
 */

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

// Viewport settings - consistent across all animations
export const viewportSettings = {
  once: true,
  margin: "0px",
  amount: 0.25 as const,
}

// Transition settings
export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const,
}

