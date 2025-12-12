"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix
      }
    })
  }, [spring, suffix])

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.25 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      onViewportEnter={() => {
        motionValue.set(value)
      }}
    >
      0{suffix}
    </motion.span>
  )
}

