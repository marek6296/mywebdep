"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Konzultácia",
    description: "Spoločne prejdeme vaše požiadavky, ciele a očakávania. Definujeme rozsah projektu.",
  },
  {
    number: "02",
    title: "Návrh a plánovanie",
    description: "Vytvorím wireframy a dizajn koncept. Schválime finálnu podobu pred začatím vývoja.",
  },
  {
    number: "03",
    title: "Vývoj",
    description: "Postupná implementácia s pravidelnými update-mi. Môžete sledovať pokrok v reálnom čase.",
  },
  {
    number: "04",
    title: "Testovanie a launch",
    description: "Dôkladné testovanie na rôznych zariadeniach. Po schválení nasadenie na produkciu.",
  },
  {
    number: "05",
    title: "Podpora",
    description: "Poskytujem pokračujúcu podporu, údržbu a možnosť rozšírenia funkcionalít.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ako prebieha spolupráca
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jednoduchý a transparentný proces od prvej konzultácie po úspešný launch.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block overflow-hidden"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: "top" }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-full bg-primary"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ transformOrigin: "top" }}
              />
            </motion.div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex items-start gap-6 group"
                  whileHover={{ x: 10 }}
                >
                  {/* Timeline dot with animation */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.15 + 0.2 
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative overflow-hidden group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <CheckCircle2 className="h-8 w-8 text-primary relative z-10" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 text-xs font-bold text-primary/60"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>

                  {/* Content with stagger */}
                  <motion.div
                    className="flex-1 pt-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <motion.h3
                      className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

