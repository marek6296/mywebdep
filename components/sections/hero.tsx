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
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh", height: "100vh", width: "100vw", position: "relative" }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated noise-overlay" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, width: "100%", height: "100%" }} />
      
      {/* Floating Elements */}
      <FloatingElements />

              {/* Content with Parallax - optimalizované pre produkciu */}
              <motion.div
                className="relative z-20 text-center flex flex-col justify-center items-center"
                style={{ 
                  opacity,
                  willChange: "opacity, transform",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  width: "100%",
                  maxWidth: "1200px",
                  height: "100vh",
                  padding: "80px 16px 100px 16px",
                  margin: "0 auto",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
        <div className="flex flex-col items-center justify-center" style={{ width: "100%", maxWidth: "900px", gap: "24px", boxSizing: "border-box" }}>
          <TextReveal>
            <motion.h1
              className="font-bold leading-tight text-center"
              style={{ 
                fontSize: "clamp(1.75rem, 5vw, 4rem)",
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto",
                lineHeight: "1.1",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                boxSizing: "border-box",
                padding: "0 8px",
              }}
            >
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent inline-block break-words"
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
              <br />
              <motion.span 
                className="text-foreground inline-block break-words"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                podníkanie digitálnym
                <br />
                riešením
              </motion.span>
            </motion.h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <motion.p
              className="text-foreground/90 leading-relaxed text-center"
              style={{ 
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                boxSizing: "border-box",
                padding: "0 8px",
              }}
            >
              Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
            </motion.p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <motion.div 
              className="text-foreground/90 flex flex-wrap gap-2 justify-center"
              style={{ 
                fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto",
                boxSizing: "border-box",
                padding: "0 8px",
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
                  style={{ fontSize: "inherit" }}
                >
                  {tech}
                  {i < 2 && <span className="mx-1.5">•</span>}
                </motion.span>
              ))}
            </motion.div>
          </TextReveal>


          <TextReveal delay={0.5}>
            <motion.div
              className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center"
              style={{ 
                width: "100%", 
                maxWidth: "550px",
                margin: "0 auto",
                paddingTop: "16px",
                boxSizing: "border-box",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: "100%", maxWidth: "250px", boxSizing: "border-box" }}
              >
                <Button asChild size="lg" className="text-base px-6 py-5 w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground" style={{ fontSize: "0.95rem", minWidth: "180px", maxWidth: "100%", boxSizing: "border-box" }}>
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
                style={{ width: "100%", maxWidth: "250px", boxSizing: "border-box" }}
              >
                <Button asChild variant="outline" size="lg" className="text-base px-6 py-5 w-full group border-primary/50 bg-background/50 hover:bg-background/80" style={{ fontSize: "0.95rem", minWidth: "180px", maxWidth: "100%", boxSizing: "border-box" }}>
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

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
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
            y: [0, 10, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 2, repeat: Infinity }
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
            position: "relative",
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
              position: "relative",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

