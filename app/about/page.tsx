"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Heart } from "lucide-react"

const skills = [
  { name: "Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 95 },
  { name: "TailwindCSS", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Supabase", level: 80 },
]

const tools = [
  "Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion",
  "Supabase", "Vercel", "Git", "Figma", "PostgreSQL", "Stripe", "Resend"
]

const values = [
  {
    icon: Code,
    title: "Kvalitný kód",
    description: "Píšeme čistý, udržateľný kód podľa najlepších praktík.",
  },
  {
    icon: Palette,
    title: "Moderný dizajn",
    description: "Vytvárame vizuálne atraktívne a používateľsky prívetivé rozhrania.",
  },
  {
    icon: Zap,
    title: "Výkon",
    description: "Optimalizujeme každý projekt pre maximálnu rýchlosť a výkon.",
  },
  {
    icon: Heart,
    title: "Vášnivosť",
    description: "Milujeme to, čo robíme a to sa odráža v každom projekte.",
  },
]

export default function AboutPage() {
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
              O mne
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poznajte mňa a moju cestu vo webovom vývoji.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Vitajte! Som webový vývojár a dizajnér so zameraním na vytváranie moderných,
                  rýchlych a konverzných webových riešení. S viac ako 5 ročnou praxou som pomohol
                  desiatkam klientov dosiahnuť ich online ciele.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Špecializujem sa na Next.js, TypeScript a moderné webové technológie.
                  Verím v to, že každý web by mal byť nielen krásny, ale aj funkčný, rýchly
                  a prispievať k úspechu vašeho podnikania.
                </p>
                <p className="text-lg text-muted-foreground">
                  Môj prístup je založený na úzkej spolupráci s klientmi, transparentnosti
                  a dodávaní riešení, ktoré skutočne fungujú. Každý projekt je pre mňa
                  príležitosťou vytvoriť niečo výnimočné.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Moje hodnoty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Zručnosti</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nástroje a technológie</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

