"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Ján Novák",
    role: "CEO, TechStart",
    content: "Výborná spolupráca od začiatku. Web bol hotový včas a presne podľa našich predstáv. Výrazne sa zvýšil počet konverzií.",
    rating: 5,
  },
  {
    name: "Maria Kováčová",
    role: "Majiteľka, E-shop Premium",
    content: "Profesionálny prístup a skvelé výsledky. E-shop funguje bezchybne a zákazníci sú spokojní. Vrelo odporúčam!",
    rating: 5,
  },
  {
    name: "Peter Horváth",
    role: "Marketing Manager",
    content: "Landing page, ktorú vytvoril WebDep, nám pomohla zvýšiť konverzie o 40%. Skvelá práca s dizajnom a optimalizáciou.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="py-24 bg-card/30" style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
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
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words">
              Čo hovoria klienti
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Spokojnosť klientov je moja priorita. Pozrite si, čo o spolupráci hovoria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.25 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotateY: 5, scale: 1.02 }}
              className="perspective-1000"
            >
              <Card className="h-full border-border/50 bg-card/80 overflow-hidden relative group" style={{ willChange: "transform" }}>
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
                <CardContent className="pt-4 sm:pt-6 relative z-10 px-4 sm:px-6">
                  <motion.div
                    className="flex mb-3 sm:mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px", amount: 0.25 }}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px", amount: 0.25 }}
                        variants={{
                          hidden: { opacity: 0, scale: 0, rotate: -180 },
                          visible: { opacity: 1, scale: 1, rotate: 0 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: index * 0.1 + 0.3 + i * 0.1,
                        }}
                      >
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.p
                    className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 italic break-words"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px", amount: 0.25 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px", amount: 0.25 }}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <p className="font-semibold text-sm sm:text-base break-words">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">{testimonial.role}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

