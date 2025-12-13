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
            willChange: "opacity",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Headline - fixné rozmery */}
          <div 
            className="text-center mb-8" 
            style={{ 
              maxWidth: "900px", 
              margin: "0 auto",
              width: "100%",
            }}
          >
            <TextReveal>
              <h1
                className="font-bold mb-6"
                style={{ 
                  fontSize: "2.5rem", // Mobile - fixné
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  maxWidth: "900px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <span 
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block"
                  style={{
                    backgroundSize: "200%",
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "inherit",
                  }}
                >
                  TRANSFORMUJTE
                </span>
                <span 
                  className="text-foreground block mt-2"
                  style={{
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "inherit",
                  }}
                >
                  podníkanie digitálnym
                  <br />
                  riešením
                </span>
              </h1>
            </TextReveal>
          </div>

          {/* Description - fixné rozmery */}
          <div 
            className="text-center mb-6" 
            style={{ 
              maxWidth: "700px", 
              margin: "0 auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.2}>
              <p
                className="text-foreground/90"
                style={{ 
                  fontSize: "1rem", // Fixné
                  lineHeight: "1.6",
                  letterSpacing: "0",
                  maxWidth: "700px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
              </p>
            </TextReveal>
          </div>

          {/* Tech Stack - fixné rozmery */}
          <div 
            className="text-center mb-8"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.3}>
              <div 
                className="text-foreground/90 flex flex-wrap gap-2 justify-center items-center"
                style={{ 
                  fontSize: "0.875rem", // Fixné
                  lineHeight: "1.5",
                  letterSpacing: "0",
                  maxWidth: "600px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                {["Next.js", "TypeScript", "Premium Design"].map((tech, i) => (
                  <span
                    key={tech}
                    className="font-medium"
                    style={{
                      fontWeight: "500",
                      lineHeight: "1.5",
                      fontSize: "inherit",
                    }}
                  >
                    {tech}
                    {i < 2 && <span className="mx-1.5">•</span>}
                  </span>
                ))}
              </div>
            </TextReveal>
          </div>

          {/* CTA Buttons - fixné rozmery */}
          <div 
            className="text-center"
            style={{
              maxWidth: "550px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.5}>
              <div
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
                style={{
                  maxWidth: "550px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full md:w-auto group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
                  style={{
                    height: "56px",
                    minWidth: "200px",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    width: "100%",
                  }}
                >
                  <Link href="/obchod">
                    <span className="relative z-10 flex items-center justify-center">
                      Prehľadať obchod
                      <ArrowRight 
                        className="ml-2" 
                        style={{ 
                          width: "16px", 
                          height: "16px",
                          minWidth: "16px",
                          minHeight: "16px",
                        }} 
                      />
                    </span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="w-full md:w-auto group border-primary/50 bg-background/50 hover:bg-background/80"
                  style={{
                    height: "56px",
                    minWidth: "200px",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    width: "100%",
                  }}
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center justify-center">
                      Kontakt
                      <ArrowRight 
                        className="ml-2" 
                        style={{ 
                          width: "16px", 
                          height: "16px",
                          minWidth: "16px",
                          minHeight: "16px",
                        }} 
                      />
                    </span>
                  </Link>
                </Button>
              </div>
            </TextReveal>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - fixný na spodku */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        style={{
          pointerEvents: "none",
          width: "24px",
          height: "40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1 },
          }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center items-start pt-2"
          style={{
            width: "24px",
            height: "40px",
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
            style={{
              width: "6px",
              height: "6px",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
