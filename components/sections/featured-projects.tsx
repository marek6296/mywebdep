"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ProjectPreview } from "@/components/project-preview"

const products = [
  {
    id: 1,
    title: "E-shop Premium",
    description: "Moderný e-commerce riešenie s pokročilou administráciou a integráciou platobných brán.",
    tags: ["Next.js", "Stripe", "TypeScript"],
    category: "e-shop",
    price: "599€",
    link: "#",
  },
  {
    id: 2,
    title: "Firemný web",
    description: "Profesionálny firemný web s CMS systémom a rezervačným kalendárom.",
    tags: ["Next.js", "Contentful", "Tailwind"],
    category: "web",
    price: "299€",
    link: "#",
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Vysokokonverzná landing page pre produktový launch s A/B testovaním.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    category: "landing",
    price: "199€",
    link: "#",
  },
  {
    id: 4,
    title: "Web App",
    description: "Komplexná webová aplikácia s real-time funkcionalitou a dashboardom.",
    tags: ["Next.js", "Supabase", "Realtime"],
    category: "app",
    price: "999€",
    link: "#",
  },
  {
    id: 5,
    title: "Portfólio web",
    description: "Elegantný portfólio web pre kreatívneho profesionála s galériou a blogom.",
    tags: ["Next.js", "MDX", "Image Optimization"],
    category: "portfolio",
    price: "399€",
    link: "#",
  },
  {
    id: 6,
    title: "Automatizácia",
    description: "Systém pre automatizáciu workflow s integráciou API a notifikáciami.",
    tags: ["Next.js", "Zapier", "Webhooks"],
    category: "automation",
    price: "799€",
    link: "#",
  },
]

export function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words">
              Vybrané produkty
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Pozrite si našu ponuku webových riešení. Každý produkt je navrhnutý pre maximálnu funkčnosť a výkon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.slice(0, 2).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group overflow-hidden">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectPreview
                      title={product.title}
                      category={product.category}
                      tags={product.tags}
                      className="h-full"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-1"
                    >
                      <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg break-words">
                        {product.title}
                      </CardTitle>
                    </motion.div>
                    <Badge className="bg-primary text-primary-foreground sm:ml-2 w-fit">
                      {product.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base break-words">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild variant="ghost" className="w-full group relative overflow-hidden">
                      <Link href={product.link}>
                        <motion.span
                          className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          Zobraziť produkt
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/obchod">
              Zobraziť všetky produkty
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

