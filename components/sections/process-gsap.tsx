"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: 1,
    title: "Konzultácia",
    description: "Spoločne prejdeme vaše požiadavky, ciele a očakávania. Definujeme rozsah projektu.",
  },
  {
    number: 2,
    title: "Návrh a plánovanie",
    description: "Vytvoríme wireframy a dizajn koncept. Schválime finálnu podobu pred začatím vývoja.",
  },
  {
    number: 3,
    title: "Vývoj",
    description: "Postupná implementácia s pravidelnými update-mi. Môžete sledovať pokrok v reálnom čase.",
  },
  {
    number: 4,
    title: "Testovanie a launch",
    description: "Dôkladné testovanie na rôznych zariadeniach. Po schválení nasadenie na produkciu.",
  },
  {
    number: 5,
    title: "Podpora",
    description: "Poskytujeme pokračujúcu podporu, údržbu a možnosť rozšírenia funkcionalít.",
  },
]

export function ProcessGSAP() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window === "undefined") return
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Počkaj na načítanie DOM a stránky
    const timer = setTimeout(() => {
      // Refresh ScrollTrigger po načítaní
      ScrollTrigger.refresh()

      // Animácia nadpisu
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1, y: 0 })
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            ease: "power2.out",
          }
        )
      }

      // Animácia timeline čiary
      if (lineRef.current) {
        gsap.set(lineRef.current, { scaleY: 1 })
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            ease: "power2.out",
            transformOrigin: "top",
          }
        )
      }

      // Animácia jednotlivých krokov
      stepsRef.current.forEach((step, i) => {
        if (step) {
          gsap.set(step, { opacity: 1, x: 0 })
          gsap.fromTo(
            step,
            {
              opacity: 0,
              x: i % 2 === 0 ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: i * 0.15,
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
              ease: "power2.out",
            }
          )
        }
      })
    }, 500)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ako pracujeme
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jednoduchý proces od nápadu po spustenie
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertikálna čiara (len na desktop) */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border overflow-hidden">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary to-primary/60"
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ opacity: mounted ? undefined : 1 }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  } mb-6 md:mb-0`}
                >
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg border-2 border-primary/20">
                    {step.number}
                  </div>
                </div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8 md:text-left" : "md:pr-8 md:text-right"
                  } hidden md:block`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

