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
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated noise-overlay" />
      
      {/* Floating Elements */}
      <FloatingElements />

              {/* Content with Parallax - optimalizované pre produkciu */}
              <motion.div
                className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full py-12 sm:py-16"
                style={{ 
                  opacity,
                  willChange: "opacity, transform",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 sm:space-y-5">
          <TextReveal>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight text-center"
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed text-center"
            >
              Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
            </motion.p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <motion.div 
              className="text-foreground/90 flex flex-wrap gap-2 justify-center"
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
                  className="text-sm sm:text-base font-medium"
                >
                  {tech}
                  {i < 2 && <span className="mx-1.5">•</span>}
                </motion.span>
              ))}
            </motion.div>
          </TextReveal>


          <TextReveal delay={0.5}>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground">
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
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group border-primary/50 bg-background/50 hover:bg-background/80">
                  <Link href="/contact">
                    Kontakt
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </TextReveal>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px", amount: 0.25 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

