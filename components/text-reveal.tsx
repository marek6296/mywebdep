"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { shouldDisableAnimations } from "@/lib/performance"
import { fadeInUp, viewportSettings, defaultTransition } from "@/lib/motion-variants"

interface TextRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  const ref = useRef(null)
  const disableAnimations = shouldDisableAnimations()

  return (
    <motion.div
      ref={ref}
      initial={disableAnimations ? false : "hidden"}
      whileInView={disableAnimations ? undefined : "visible"}
      viewport={viewportSettings}
      variants={fadeInUp}
      transition={{
        ...defaultTransition,
        delay: disableAnimations ? 0 : delay,
      }}
      style={{ 
        willChange: disableAnimations ? "auto" : "transform, opacity",
        transform: "translate3d(0, 0, 0)"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

