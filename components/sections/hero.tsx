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
        className="absolute inset-0" 
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundColor: "var(--background)",
        }} 
      />
      
      {/* Animated gradient overlay - presne ako v CTA banneri */}
      <motion.div
        className="absolute inset-0 bg-gradient-animated"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.5,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating Elements - len dekorácia */}
      <FloatingElements />

      {/* Main Content - úplne fixný layout s fixnou pozíciou */}
      <div 
        className="hero-content-wrapper"
        style={{ 
          position: "absolute",
          top: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          width: "100%",
          maxWidth: "1200px",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          style={{ 
            opacity,
            willChange: "opacity",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            marginTop: "0",
            paddingTop: "0",
            boxSizing: "border-box",
          }}
        >
          {/* Headline - fixný */}
          <div 
            style={{ 
              width: "100%",
              maxWidth: "900px",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "32px",
              paddingTop: "0",
              paddingLeft: "0",
              paddingRight: "0",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <TextReveal>
              <h1
                className="hero-headline"
                style={{ 
                  fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                  fontWeight: "700",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0 0 24px 0",
                  padding: 0,
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <span 
                  className="hero-title-main"
                  style={{
                    display: "block",
                    backgroundSize: "200%",
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(2rem, 6vw, 6rem)",
                    width: "100%",
                    color: "#000000",
                    zIndex: 10,
                    position: "relative",
                    boxSizing: "border-box",
                  }}
                >
                  TRANSFORMUJTE
                </span>
                <span 
                  className="hero-title-sub"
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontWeight: "700",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
                    width: "100%",
                    color: "#000000",
                    zIndex: 10,
                    position: "relative",
                    boxSizing: "border-box",
                  }}
                >
                  podnikanie digitálnym
                  <br />
                  riešením
                </span>
              </h1>
            </TextReveal>
          </div>

          {/* Description - fixný */}
          <div 
            className="hero-description-wrapper"
            style={{ 
              width: "100%",
              maxWidth: "700px",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "24px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "0",
              paddingLeft: "0",
              paddingRight: "0",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <TextReveal delay={0.2}>
              <p
                style={{ 
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  lineHeight: "1.6",
                  letterSpacing: "0",
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0",
                  padding: 0,
                  color: "#333333",
                  zIndex: 10,
                  position: "relative",
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
                          width: "100%",
                          maxWidth: "600px",
                          textAlign: "center",
                          marginTop: "0",
                          marginBottom: "32px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          paddingTop: "0",
                          paddingLeft: "0",
                          paddingRight: "0",
                          boxSizing: "border-box",
                          position: "relative",
                        }}
                      >
                        <TextReveal delay={0.3}>
                          <div 
                            className="hero-tech-stack"
                            style={{ 
                              fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                              lineHeight: "1.5",
                              letterSpacing: "0",
                              width: "100%",
                              maxWidth: "100%",
                              margin: "0",
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: 0,
                              color: "#333333",
                              zIndex: 10,
                              position: "relative",
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
                      position: "relative",
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
            className="hero-cta-wrapper"
            style={{
              width: "100%",
              maxWidth: "550px",
              textAlign: "center",
              marginTop: "0",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "0",
              paddingLeft: "0",
              paddingRight: "0",
              paddingBottom: "100px",
              boxSizing: "border-box",
              position: "relative",
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
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0",
                  padding: 0,
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  style={{
                    height: "56px",
                    width: "100%",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <Link href="/obchod">
                    <span style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      width: "100%",
                      position: "relative",
                    }}>
                      Prehľadať obchod
                      <ArrowRight 
                        style={{ 
                          marginLeft: "8px",
                          width: "16px", 
                          height: "16px",
                          minWidth: "16px",
                          minHeight: "16px",
                          position: "relative",
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
                    width: "100%",
                    maxWidth: "250px",
                    padding: "0 32px",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <Link href="/contact">
                    <span style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      width: "100%",
                      position: "relative",
                    }}>
                      Kontakt
                      <ArrowRight 
                        style={{ 
                          marginLeft: "8px",
                          width: "16px", 
                          height: "16px",
                          minWidth: "16px",
                          minHeight: "16px",
                          position: "relative",
                        }} 
                      />
                    </span>
                  </Link>
                </Button>
              </div>
            </TextReveal>
            
            {/* Scroll Indicator - klasický dizajn */}
            <div
              className="scroll-indicator-wrapper"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                marginLeft: "-16px",
                zIndex: 30,
                width: "32px",
                height: "48px",
                pointerEvents: "none",
                boxSizing: "border-box",
                marginBottom: "0",
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
                className="scroll-indicator-box"
                style={{
                  width: "32px",
                  height: "48px",
                  border: "2px solid rgba(59, 130, 246, 0.4)",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingTop: "10px",
                  boxSizing: "border-box",
                  position: "relative",
                  background: "rgba(59, 130, 246, 0.05)",
                }}
              >
                {/* Dvojitá šípka smerom dole */}
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    alignItems: "center",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <motion.div
                    className="scroll-indicator-arrow"
                    animate={{ 
                      y: [0, 4, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0,
                    }}
                    style={{
                      width: "0",
                      height: "0",
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "6px solid #000000",
                      boxSizing: "border-box",
                    }}
                  />
                  <motion.div
                    className="scroll-indicator-arrow"
                    animate={{ 
                      y: [0, 4, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.15,
                    }}
                    style={{
                      width: "0",
                      height: "0",
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "6px solid #000000",
                      boxSizing: "border-box",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
