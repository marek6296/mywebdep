"use client"

import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
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
              Kontakt
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Máte otázku alebo projekt? Kontaktujte ma a dohodnime sa na spolupráci.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-4 sm:pt-6 text-center px-4 sm:px-6">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Email</h3>
              <a href="mailto:info@webdep.sk" className="text-primary hover:underline text-xs sm:text-sm break-all">
                info@webdep.sk
              </a>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-4 sm:pt-6 text-center px-4 sm:px-6">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Telefón</h3>
              <a href="tel:+421900000000" className="text-primary hover:underline text-xs sm:text-sm break-all">
                +421 900 000 000
              </a>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <CardContent className="pt-4 sm:pt-6 text-center px-4 sm:px-6">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base break-words">Lokalita</h3>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">Slovensko</p>
            </CardContent>
          </Card>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

