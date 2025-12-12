"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Basic",
    price: "od 299€",
    description: "Ideálne pre malé firmy a začiatočníkov",
    features: [
      "Až 5 stránok",
      "Responzívny dizajn",
      "Kontaktný formulár",
      "Základné SEO",
      "1 mesiac podpory",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "od 599€",
    description: "Pre rastúce podnikanie s pokročilými funkciami",
    features: [
      "Až 10 stránok",
      "CMS systém",
      "Blog sekcia",
      "Pokročilé SEO",
      "Analytika",
      "3 mesiace podpory",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "od 999€",
    description: "Komplexné riešenie pre veľké projekty",
    features: [
      "Neobmedzené stránky",
      "Vlastný CMS",
      "E-shop integrácia",
      "Automatizácie",
      "API integrácie",
      "6 mesiacov podpory",
    ],
    popular: false,
  },
]

const addons = [
  { name: "Copywriting", price: "od 15€/stránka" },
  { name: "SEO optimalizácia", price: "od 99€" },
  { name: "Fotografie/Videá", price: "podľa dohody" },
  { name: "Logo dizajn", price: "od 49€" },
  { name: "Integrácia platobných brán", price: "od 149€" },
  { name: "Rezervačný systém", price: "od 199€" },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Služby a ceny
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparentné ceny a balíčky šité na mieru vašim potrebám.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full relative border-border/50 bg-card/80 backdrop-blur-sm ${
                  pkg.popular
                    ? "border-primary/50 shadow-lg scale-105"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Najobľúbenejšie
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link href="/contact">Kontaktovať</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Doplnkové služby</h2>
          <p className="text-muted-foreground mb-8">
            Rozšírte svoj projekt o ďalšie funkcie a služby.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-sm text-muted-foreground">{addon.price}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

