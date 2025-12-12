"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  initialX: number
  initialY: number
  initialOpacity: number
  duration: number
  delay: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Počkaj na načítanie stránky - znížené z 1000ms na 500ms
    const timer = setTimeout(() => {
      setMounted(true)
      // Znížený počet častíc z 10 na 5 pre lepší výkon
      const newParticles: Particle[] = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        initialX: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        initialY: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
        initialOpacity: Math.random() * 0.2 + 0.1,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 3,
      }))
      setParticles(newParticles)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - optimalizované pre produkciu */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
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
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
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
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
        style={{ 
          willChange: mounted ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
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

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating particles - len po mounte - optimalizované pre produkciu */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{ 
            willChange: "transform, opacity",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: particle.initialOpacity,
          }}
          animate={{
            y: [
              particle.initialY,
              particle.initialY + (Math.random() - 0.5) * 100, // Znížený pohyb
              particle.initialY,
            ],
            x: [
              particle.initialX,
              particle.initialX + (Math.random() - 0.5) * 100, // Znížený pohyb
              particle.initialX,
            ],
            opacity: [
              particle.initialOpacity,
              particle.initialOpacity + (Math.random() - 0.5) * 0.15, // Menšie zmeny
              particle.initialOpacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Animated lines - znížený počet z 5 na 3 */}
      {mounted && (
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" style={{ willChange: "opacity" }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.line
              key={i}
              x1={i * 33 + "%"}
              y1="0%"
              x2={(i * 33 + 15) + "%"}
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </svg>
      )}
    </div>
  )
}

