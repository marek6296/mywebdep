"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
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

const categories = ["všetko", "web", "e-shop", "landing", "app"]

export default function ObchodPage() {
  const [selectedCategory, setSelectedCategory] = useState("všetko")

  const filteredProducts =
    selectedCategory === "všetko"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words">
              Obchod
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Prehľadajte našu ponuku webových riešení a vyberte si to, čo najlepšie vyhovuje vašim potrebám.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4 sm:px-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </div>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg break-words flex-1">
                      {product.title}
                    </CardTitle>
                    <Badge className="bg-primary text-primary-foreground sm:ml-2 w-fit">
                      {product.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base break-words">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full group">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      Zobraziť produkt
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

