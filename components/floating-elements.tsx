"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Floating shapes - optimalizované pre produkciu */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
        animate={mounted ? {
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
        animate={mounted ? {
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
        animate={mounted ? {
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

