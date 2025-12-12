"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words">
              Ochrana súkromia
            </span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4 sm:px-0">Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK")}</p>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6 prose prose-invert max-w-none">
              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 break-words">1. Úvod</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 break-words">
                  Táto zásada ochrany súkromia popisuje, ako spracúvame a chrátime vaše osobné údaje
                  v súlade s nariadením GDPR (Všeobecné nariadenie o ochrane údajov).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Správca údajov</h2>
                <p className="text-muted-foreground mb-4">
                  Správcom osobných údajov je WebDep. Kontaktné údaje: info@webdep.sk
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Účel spracovania</h2>
                <p className="text-muted-foreground mb-4">
                  Vaše osobné údaje spracúvame za účelom:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Odpovede na vaše dotazy a požiadavky</li>
                  <li>Poskytovania služieb a komunikácie ohľadom projektov</li>
                  <li>Zlepšovania našich služieb</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Práva subjektu údajov</h2>
                <p className="text-muted-foreground mb-4">
                  Máte právo na:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Prístup k vašim osobným údajom</li>
                  <li>Opravu nepresných údajov</li>
                  <li>Vymazanie údajov</li>
                  <li>Obmedzenie spracovania</li>
                  <li>Nesúhlas so spracovaním</li>
                  <li>Prenos údajov</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Doba uchovávania</h2>
                <p className="text-muted-foreground mb-4">
                  Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelov, na ktoré boli
                  zozbierané, alebo po dobu stanovenú právnymi predpismi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Kontakt</h2>
                <p className="text-muted-foreground mb-4">
                  Pre akékoľvek otázky týkajúce sa ochrany súkromia nás kontaktujte na:
                  <a href="mailto:info@webdep.sk" className="text-primary hover:underline ml-1">
                    info@webdep.sk
                  </a>
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

