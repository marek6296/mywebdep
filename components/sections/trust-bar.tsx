"use client"

import { motion } from "framer-motion"
import { Zap, Search, Smartphone, Shield } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedCounter } from "@/components/animated-counter"

const features = [
  {
    icon: Zap,
    title: "Rýchlosť",
    description: "Lighthouse",
    value: 95,
    suffix: "+",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Optimalizované",
    value: 100,
    suffix: "%",
  },
  {
    icon: Smartphone,
    title: "Responzívne",
    description: "Všetky zariadenia",
    value: 100,
    suffix: "%",
  },
  {
    icon: Shield,
    title: "Bezpečné",
    description: "GDPR compliant",
    value: 100,
    suffix: "%",
  },
]

export function TrustBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 border-y border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <Icon className="h-8 w-8 text-primary relative z-10" />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{feature.description}</p>
                {feature.value && (
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1 + 0.3 
                    }}
                  >
                    <AnimatedCounter value={feature.value} suffix={feature.suffix} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

