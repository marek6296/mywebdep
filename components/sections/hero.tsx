"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { FloatingElements } from "@/components/floating-elements"
import { TextReveal } from "@/components/text-reveal"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Optimized transforms with clamping for production
  const y = useTransform(scrollYProgress, [0, 1], [0, 150], {
    clamp: true,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], {
    clamp: true,
  })

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        paddingTop: "64px", // Offset pre navbar
        paddingBottom: "80px"
      }}
    >
      {/* Animated Background - len dekorácia */}
      <div 
        className="absolute inset-0 bg-gradient-animated noise-overlay" 
        style={{ 
          zIndex: 0 
        }} 
      />
      
      {/* Floating Elements - len dekorácia */}
      <FloatingElements />

      {/* Main Content Container - stabilný layout */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ 
            opacity,
            willChange: "opacity, transform",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Headline */}
          <div className="text-center mb-8">
            <TextReveal>
              <motion.h1
                className="font-bold leading-tight mb-6"
                style={{ 
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.1",
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200%",
                  }}
                >
                  TRANSFORMUJTE
                </motion.span>
                <span className="text-foreground block mt-2">
                  podníkanie digitálnym
                  <br />
                  riešením
                </span>
              </motion.h1>
            </TextReveal>
          </div>

          {/* Description */}
          <div className="text-center mb-6">
            <TextReveal delay={0.2}>
              <motion.p
                className="text-foreground/90 leading-relaxed max-w-2xl mx-auto"
                style={{ 
                  fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                  lineHeight: "1.6",
                }}
              >
                Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
              </motion.p>
            </TextReveal>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-8">
            <TextReveal delay={0.3}>
              <motion.div 
                className="text-foreground/90 flex flex-wrap gap-2 justify-center items-center"
                style={{ 
                  fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {["Next.js", "TypeScript", "Premium Design"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px", amount: 0.25 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="font-medium"
                  >
                    {tech}
                    {i < 2 && <span className="mx-1.5">•</span>}
                  </motion.span>
                ))}
              </motion.div>
            </TextReveal>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <TextReveal delay={0.5}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="/obchod">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                      Prehľadať obchod
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base group border-primary/50 bg-background/50 hover:bg-background/80"
                  >
                    <Link href="/contact">
                      Kontakt
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </TextReveal>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - fixný na spodku */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        style={{
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center items-start pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
