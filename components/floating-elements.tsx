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
        className="bg-primary/5 rounded-full blur-3xl"
        style={{ 
          position: "fixed",
          top: "80px",
          left: "40px",
          width: "288px",
          height: "288px",
          zIndex: 1,
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
        className="bg-primary/10 rounded-full blur-3xl"
        style={{ 
          position: "fixed",
          bottom: "80px",
          right: "40px",
          width: "384px",
          height: "384px",
          zIndex: 1,
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
        className="bg-primary/5 rounded-full blur-3xl"
        style={{ 
          position: "fixed",
          top: "50%",
          right: "25%",
          width: "256px",
          height: "256px",
          zIndex: 1,
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

