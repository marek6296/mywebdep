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

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], {
    clamp: true,
  })

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: "0",
        paddingBottom: "0",
        boxSizing: "border-box",
      }}
    >
      {/* Animated Background - len dekorácia */}
      <div 
        className="absolute inset-0 bg-gradient-animated noise-overlay" 
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }} 
      />
      
      {/* Floating Elements - len dekorácia */}
      <FloatingElements />

      {/* Main Content - úplne fixný layout s fixnou pozíciou */}
      <div 
        style={{ 
          position: "absolute",
          top: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          width: "1200px",
          maxWidth: "1200px",
          padding: "0 20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <motion.div
          style={{ 
            opacity,
            willChange: "opacity",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "0",
            paddingTop: "0",
          }}
        >
          {/* Headline - fixný */}
          <div 
            style={{ 
              width: "900px",
              maxWidth: "900px",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "32px",
              paddingTop: "0",
              boxSizing: "border-box",
            }}
          >
            <TextReveal>
              <h1
                style={{ 
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  width: "900px",
                  maxWidth: "900px",
                  margin: "0 0 24px 0",
                  padding: 0,
                  boxSizing: "border-box",
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
                    width: "900px",
                    boxSizing: "border-box",
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
                    width: "900px",
                    boxSizing: "border-box",
                  }}
                >
                  podníkanie digitálnym
                  <br />
                  riešením
                </span>
              </h1>
            </TextReveal>
          </div>

          {/* Description - fixný */}
          <div 
            style={{ 
              width: "700px",
              maxWidth: "700px",
              textAlign: "center",
              marginBottom: "24px",
              boxSizing: "border-box",
            }}
          >
            <TextReveal delay={0.2}>
              <p
                className="text-foreground/90"
                style={{ 
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  letterSpacing: "0",
                  width: "700px",
                  maxWidth: "700px",
                  margin: "0",
                  padding: 0,
                  boxSizing: "border-box",
                }}
              >
                Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
              </p>
            </TextReveal>
          </div>

          {/* Tech Stack - fixný */}
          <div 
            style={{
              width: "600px",
              maxWidth: "600px",
              textAlign: "center",
              marginBottom: "32px",
              boxSizing: "border-box",
            }}
          >
            <TextReveal delay={0.3}>
              <div 
                className="text-foreground/90"
                style={{ 
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  letterSpacing: "0",
                  width: "600px",
                  maxWidth: "600px",
                  margin: "0",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  boxSizing: "border-box",
                }}
              >
                {["Next.js", "TypeScript", "Premium Design"].map((tech, i) => (
                  <span
                    key={tech}
                    style={{
                      fontWeight: "500",
                      lineHeight: "1.5",
                      fontSize: "0.875rem",
                      boxSizing: "border-box",
                    }}
                  >
                    {tech}
                    {i < 2 && <span style={{ marginLeft: "6px", marginRight: "6px" }}>•</span>}
                  </span>
                ))}
              </div>
            </TextReveal>
          </div>

          {/* CTA Buttons - fixný */}
          <div 
            style={{
              width: "550px",
              maxWidth: "550px",
              textAlign: "center",
              boxSizing: "border-box",
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
                  width: "550px",
                  maxWidth: "550px",
                  margin: "0",
                  boxSizing: "border-box",
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  style={{
                    height: "56px",
                    width: "250px",
                    minWidth: "250px",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                  }}
                >
                  <Link href="/obchod">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
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
                    width: "250px",
                    minWidth: "250px",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                  }}
                >
                  <Link href="/contact">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
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

      {/* Scroll Indicator - fixný */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          marginLeft: "-12px",
          zIndex: 30,
          width: "24px",
          height: "40px",
          pointerEvents: "none",
          boxSizing: "border-box",
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
            boxSizing: "border-box",
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
              boxSizing: "border-box",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
