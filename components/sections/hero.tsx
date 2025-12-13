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
      style={{ 
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "64px",
        paddingBottom: "80px",
      }}
    >
      {/* Animated Background - len dekorácia */}
      <div 
        className="absolute inset-0 bg-gradient-animated noise-overlay" 
        style={{ 
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }} 
      />
      
      {/* Floating Elements - len dekorácia */}
      <FloatingElements />

      {/* Main Content Container - úplne fixný */}
      <div 
        style={{ 
          position: "relative",
          zIndex: 20,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          style={{ 
            opacity,
            willChange: "opacity",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Headline - úplne fixné */}
          <div 
            style={{ 
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <TextReveal>
              <h1
                style={{ 
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  maxWidth: "900px",
                  margin: "0 auto 24px auto",
                  width: "100%",
                  padding: 0,
                }}
              >
                <span 
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                  style={{
                    display: "block",
                    backgroundSize: "200%",
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "2.5rem",
                  }}
                >
                  TRANSFORMUJTE
                </span>
                <span 
                  className="text-foreground"
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "2.5rem",
                  }}
                >
                  podníkanie digitálnym
                  <br />
                  riešením
                </span>
              </h1>
            </TextReveal>
          </div>

          {/* Description - úplne fixné */}
          <div 
            style={{ 
              textAlign: "center",
              marginBottom: "24px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.2}>
              <p
                className="text-foreground/90"
                style={{ 
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  letterSpacing: "0",
                  maxWidth: "700px",
                  margin: "0 auto",
                  width: "100%",
                  padding: 0,
                }}
              >
                Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
              </p>
            </TextReveal>
          </div>

          {/* Tech Stack - úplne fixné */}
          <div 
            style={{
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.3}>
              <div 
                className="text-foreground/90"
                style={{ 
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  letterSpacing: "0",
                  maxWidth: "600px",
                  margin: "0 auto",
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                {["Next.js", "TypeScript", "Premium Design"].map((tech, i) => (
                  <span
                    key={tech}
                    style={{
                      fontWeight: "500",
                      lineHeight: "1.5",
                      fontSize: "0.875rem",
                    }}
                  >
                    {tech}
                    {i < 2 && <span style={{ marginLeft: "6px", marginRight: "6px" }}>•</span>}
                  </span>
                ))}
              </div>
            </TextReveal>
          </div>

          {/* CTA Buttons - úplne fixné */}
          <div 
            style={{
              textAlign: "center",
              maxWidth: "550px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <TextReveal delay={0.5}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "550px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  style={{
                    height: "56px",
                    minWidth: "200px",
                    maxWidth: "250px",
                    width: "100%",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                  }}
                >
                  <Link href="/obchod">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      Prehľadať obchod
                      <ArrowRight 
                        style={{ 
                          marginLeft: "8px",
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
                  className="border-primary/50 bg-background/50 hover:bg-background/80"
                  style={{
                    height: "56px",
                    minWidth: "200px",
                    maxWidth: "250px",
                    width: "100%",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                  }}
                >
                  <Link href="/contact">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      Kontakt
                      <ArrowRight 
                        style={{ 
                          marginLeft: "8px",
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
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          width: "24px",
          height: "40px",
          pointerEvents: "none",
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
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid rgba(59, 130, 246, 0.5)",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "8px",
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "rgb(59, 130, 246)",
              borderRadius: "9999px",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
