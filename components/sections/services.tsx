"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ShoppingCart, Rocket, Zap } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Globe,
    title: "Firemný web",
    description: "Profesionálne firemné weby s CMS systémom, SEO optimalizáciou a moderným dizajnom.",
    features: ["Responzívny dizajn", "CMS systém", "SEO optimalizácia", "Kontaktný formulár"],
  },
  {
    icon: ShoppingCart,
    title: "E-shop",
    description: "Kompletné e-commerce riešenia s platobnými bránami, administráciou a inventárom.",
    features: ["Platobné brány", "Správa produktov", "Objednávkový systém", "Analytika"],
  },
  {
    icon: Rocket,
    title: "Landing Page",
    description: "Vysokokonverzné landing stránky navrhnuté pre maximálny počet konverzií.",
    features: ["A/B testovanie", "Rýchle načítanie", "Optimalizácia konverzií", "Tracking"],
  },
  {
    icon: Zap,
    title: "Automatizácie",
    description: "Automatizácia workflow procesov, integrácie API a zjednodušenie operácií.",
    features: ["API integrácie", "Webhooks", "Automatizácia úloh", "Notifikácie"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Služby
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplexné webové riešenia šité na mieru vašim potrebám a cieľom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm group hover:border-primary/50 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                      <Icon className="h-7 w-7 text-primary relative z-10" />
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-sm text-muted-foreground group/item"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-primary mr-2"
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

