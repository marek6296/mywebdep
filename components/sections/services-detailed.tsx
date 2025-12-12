"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  order: number
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Vytváram moderné, rýchle a SEO optimalizované webové stránky pomocou najnovších technológií.',
    icon: '💻',
    features: ['Next.js & React', 'TypeScript', 'Performance optimalizácia', 'SEO friendly'],
    order: 1,
  },
  {
    id: '2',
    title: 'E-shop Riešenia',
    description: 'Komplexné e-shop platformy s platobnými systémami, správou objednávok a pokročilými funkciami.',
    icon: '🛒',
    features: ['Stripe/PayPal integrácia', 'Admin panel', 'Inventory management', 'Analytics'],
    order: 2,
  },
  {
    id: '3',
    title: 'SEO Optimalizácia',
    description: 'Zlepšujem umiestnenie vo vyhľadávačoch a zvyšujem organický traffic pomocou moderných SEO techník.',
    icon: '🔍',
    features: ['Technical SEO', 'Content strategy', 'Link building', 'Analytics setup'],
    order: 3,
  },
  {
    id: '4',
    title: 'UI/UX Dizajn',
    description: 'Vytváram intuitívne a používateľsky prívetivé rozhrania, ktoré konvertujú a poskytujú skvelú UX.',
    icon: '🎨',
    features: ['User research', 'Wireframing', 'Prototyping', 'Design system'],
    order: 4,
  },
  {
    id: '5',
    title: 'Performance',
    description: 'Optimalizujem rýchlosť načítania a výkon webu pre lepšiu používateľskú skúsenosť a vyššie konverzie.',
    icon: '⚡',
    features: ['Lighthouse 90+', 'Code splitting', 'Image optimization', 'CDN setup'],
    order: 5,
  },
  {
    id: '6',
    title: 'Maintenance',
    description: 'Poskytujem dlhodobú podporu, aktualizácie a monitoring pre zabezpečenie optimálneho výkonu.',
    icon: '🔧',
    features: ['Security updates', 'Backup solutions', 'Performance monitoring', '24/7 support'],
    order: 6,
  },
]

export function ServicesDetailed() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="pt-4 pb-4 sm:pt-6 sm:pb-6 bg-background relative min-h-[400px]" style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words">
              Naše služby
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Komplexné riešenia pre váš digitálny úspech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ 
                  willChange: "transform",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card className="h-full transition-all duration-300 border-border/50 bg-card/80 group hover:border-primary/50 overflow-hidden relative" style={{ willChange: "transform" }}>
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
                      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden text-3xl"
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
                      <span className="relative z-10">{service.icon}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg break-words">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                    <CardDescription className="text-sm sm:text-base break-words">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "0px", amount: 0.25 }}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-xs sm:text-sm text-muted-foreground group/item"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors break-words">
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

