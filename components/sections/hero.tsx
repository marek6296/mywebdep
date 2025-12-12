"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { FloatingElements } from "@/components/floating-elements"
import { TextReveal } from "@/components/text-reveal"
import Image from "next/image"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [laptopImageError, setLaptopImageError] = useState(false)
  const [planetImageError, setPlanetImageError] = useState(false)
  
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated noise-overlay" />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Video Background with Parallax - optimalizované pre produkciu */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          willChange: isVideoLoaded ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="w-full h-full object-cover opacity-30"
          style={{ 
            display: isVideoLoaded ? "block" : "none",
            willChange: isVideoLoaded ? "transform" : "auto",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitTransform: "translate3d(0, 0, 0)",
            // Production optimizations
            objectFit: "cover",
            pointerEvents: "none",
          }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        )}
      </motion.div>

              {/* Content with Parallax - optimalizované pre produkciu */}
              <motion.div
                className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0"
                style={{ 
                  opacity,
                  willChange: isVideoLoaded ? "opacity, transform" : "auto",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
        <div className="max-w-4xl mx-auto">
          <TextReveal>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
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
                <span className="block sm:inline">podníkanie</span>{" "}
                <span className="block sm:inline">digitálnym</span>
                <br className="sm:hidden" />
                <span className="block sm:inline">riešením</span>
              </motion.span>
            </motion.h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed"
            >
              Vytvárame špičkové webové riešenia, ktoré zvyšujú vašu konkurenčnú výhodu a rast tržieb.
            </motion.p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <motion.div 
              className="text-foreground/80 flex flex-wrap gap-2 justify-center mb-6 sm:mb-8"
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
                  className="text-sm sm:text-base"
                >
                  {tech}
                  {i < 2 && <span className="mx-1">•</span>}
                </motion.span>
              ))}
            </motion.div>
          </TextReveal>

          {/* Images Section - Mobile: Laptop, Desktop: Both images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
            {/* Laptop Image - Mobile full width, Desktop left */}
            <TextReveal delay={0.35}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative w-full"
              >
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border border-primary/30 shadow-lg">
                  {!laptopImageError ? (
                    <>
                      <Image
                        src="/images/laptop-tech.jpg"
                        alt="Laptop s holografickými dátovými vizualizáciami"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        unoptimized
                        onError={() => setLaptopImageError(true)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10">
                      <div className="text-center p-4">
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/30 border-2 border-primary/50 flex items-center justify-center backdrop-blur-sm"
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                              "0 0 40px rgba(59, 130, 246, 0.5)",
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.div>
                        <p className="text-xs text-primary/80 font-medium">Laptop Tech</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TextReveal>

            {/* Planet Image - Desktop right, hidden on mobile */}
            <TextReveal delay={0.4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative w-full hidden md:block"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border border-primary/30 shadow-lg">
                  {!planetImageError ? (
                    <>
                      <Image
                        src="/images/planet-tech.jpg"
                        alt="Planéta s modrými prstencami a svetielkami"
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority
                        unoptimized
                        onError={() => setPlanetImageError(true)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10">
                      <div className="text-center p-4">
                        <motion.div 
                          className="w-24 h-24 mx-auto mb-2 rounded-full bg-primary/30 border-2 border-primary/50 flex items-center justify-center backdrop-blur-sm relative"
                          animate={{ 
                            boxShadow: [
                              "0 0 30px rgba(59, 130, 246, 0.3)",
                              "0 0 60px rgba(59, 130, 246, 0.5)",
                              "0 0 30px rgba(59, 130, 246, 0.3)",
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="absolute inset-0 rounded-full border border-primary/30" style={{ transform: 'scale(1.2)' }} />
                          <div className="absolute inset-0 rounded-full border border-primary/20" style={{ transform: 'scale(1.4)' }} />
                          <svg className="w-12 h-12 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.div>
                        <p className="text-xs text-primary/80 font-medium">Planet Tech</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TextReveal>
          </div>

          <TextReveal delay={0.5}>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group relative overflow-hidden">
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
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group">
                  <Link href="/contact">
                    Kontakt
                    <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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

