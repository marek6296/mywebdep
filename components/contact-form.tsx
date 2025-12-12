"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  // Step 1: Contact
  name: string
  email: string
  phone: string
  company: string
  
  // Step 2: Project
  projectType: string
  budget: string
  deadline: string
  
  // Step 3: Content
  hasTexts: string
  hasBrand: string
  pageCount: string
  
  // Step 4: Extra
  seo: boolean
  blog: boolean
  integrations: boolean
  booking: boolean
  payments: boolean
  
  // Step 5: Message
  message: string
  gdpr: boolean
  
  // Honeypot
  website?: string
}

const steps = [
  { number: 1, title: "Kontakt", description: "Vaše kontaktné údaje" },
  { number: 2, title: "Projekt", description: "Typ a rozsah projektu" },
  { number: 3, title: "Obsah", description: "Materiály a obsah" },
  { number: 4, title: "Extra", description: "Doplnkové služby" },
  { number: 5, title: "Správa", description: "Popis projektu" },
]

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    deadline: "",
    hasTexts: "",
    hasBrand: "",
    pageCount: "",
    seo: false,
    blog: false,
    integrations: false,
    booking: false,
    payments: false,
    message: "",
    gdpr: false,
  })

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Meno je povinné"
      if (!formData.email.trim()) newErrors.email = "Email je povinný"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Neplatný email"
      }
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = "Vyberte typ projektu"
      if (!formData.budget) newErrors.budget = "Vyberte rozpočet"
      if (!formData.deadline) newErrors.deadline = "Vyberte deadline"
    }

    if (step === 3) {
      if (!formData.hasTexts) newErrors.hasTexts = "Odpovedzte na otázku"
      if (!formData.hasBrand) newErrors.hasBrand = "Odpovedzte na otázku"
      if (!formData.pageCount) newErrors.pageCount = "Vyberte počet strán"
    }

    if (step === 5) {
      if (!formData.message.trim()) newErrors.message = "Popis projektu je povinný"
      if (!formData.gdpr) newErrors.gdpr = "Musíte súhlasiť s GDPR"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) return

    setIsSubmitting(true)

    try {
      // Check honeypot
      if (formData.website) {
        throw new Error("Spam detected")
      }

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: undefined, // Don't send honeypot
          utm_source: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") : null,
          utm_medium: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_medium") : null,
          utm_campaign: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_campaign") : null,
          referer: typeof window !== "undefined" ? document.referrer : null,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ submit: "Nastala chyba pri odosielaní. Skúste to prosím znova." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
          >
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">Ďakujeme za váš dopyt!</h2>
          <p className="text-muted-foreground mb-6">
            Vaša správa bola úspešne odoslaná. Odpoviem vám čo najskôr, zvyčajne do 24 hodín.
          </p>
          <Button asChild>
            <a href="/">Späť na domov</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex-1 text-center ${
                step.number <= currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-2 ${
                  step.number < currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : step.number === currentStep
                    ? "border-primary text-primary"
                    : "border-border"
                }`}
              >
                {step.number < currentStep ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              <div className="text-xs hidden sm:block">{step.title}</div>
            </div>
          ))}
        </div>
        <Progress value={(currentStep / 5) * 100} className="h-2" />
      </div>

      {/* Form Steps */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {/* Step 1: Contact */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name">Meno *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Telefón</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="company">Firma</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                {/* Honeypot */}
                <div className="hidden">
                  <Label htmlFor="website">Website (nevyplňujte)</Label>
                  <Input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website || ""}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Project */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="projectType">Typ projektu *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Vyberte typ projektu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="web">Firemný web</SelectItem>
                      <SelectItem value="eshop">E-shop</SelectItem>
                      <SelectItem value="app">Webová aplikácia</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="text-sm text-destructive mt-1">{errors.projectType}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="budget">Rozpočet *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
                      <SelectValue placeholder="Vyberte rozpočet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-2000">1 000€ - 2 000€</SelectItem>
                      <SelectItem value="2000-5000">2 000€ - 5 000€</SelectItem>
                      <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                      <SelectItem value="10000+">10 000€+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p className="text-sm text-destructive mt-1">{errors.budget}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline (približne) *</Label>
                  <Select
                    value={formData.deadline}
                    onValueChange={(value) => setFormData({ ...formData, deadline: value })}
                  >
                    <SelectTrigger className={errors.deadline ? "border-destructive" : ""}>
                      <SelectValue placeholder="Vyberte deadline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">Do 1 mesiaca</SelectItem>
                      <SelectItem value="2-3months">2-3 mesiace</SelectItem>
                      <SelectItem value="3-6months">3-6 mesiacov</SelectItem>
                      <SelectItem value="6months+">Viac ako 6 mesiacov</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.deadline && (
                    <p className="text-sm text-destructive mt-1">{errors.deadline}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Content */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label>Máte pripravené texty? *</Label>
                  <div className="flex gap-4 mt-2">
                    <Button
                      type="button"
                      variant={formData.hasTexts === "yes" ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, hasTexts: "yes" })}
                    >
                      Áno
                    </Button>
                    <Button
                      type="button"
                      variant={formData.hasTexts === "no" ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, hasTexts: "no" })}
                    >
                      Nie
                    </Button>
                  </div>
                  {errors.hasTexts && (
                    <p className="text-sm text-destructive mt-1">{errors.hasTexts}</p>
                  )}
                </div>
                <div>
                  <Label>Máte logo a brand identity? *</Label>
                  <div className="flex gap-4 mt-2">
                    <Button
                      type="button"
                      variant={formData.hasBrand === "yes" ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, hasBrand: "yes" })}
                    >
                      Áno
                    </Button>
                    <Button
                      type="button"
                      variant={formData.hasBrand === "no" ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, hasBrand: "no" })}
                    >
                      Nie
                    </Button>
                  </div>
                  {errors.hasBrand && (
                    <p className="text-sm text-destructive mt-1">{errors.hasBrand}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="pageCount">Počet strán *</Label>
                  <Select
                    value={formData.pageCount}
                    onValueChange={(value) => setFormData({ ...formData, pageCount: value })}
                  >
                    <SelectTrigger className={errors.pageCount ? "border-destructive" : ""}>
                      <SelectValue placeholder="Vyberte počet strán" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 stránky</SelectItem>
                      <SelectItem value="4-7">4-7 stránok</SelectItem>
                      <SelectItem value="8+">8+ stránok</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.pageCount && (
                    <p className="text-sm text-destructive mt-1">{errors.pageCount}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 4: Extra */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <Label>Doplnkové služby (môžete vybrať viacero)</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="seo"
                      checked={formData.seo}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, seo: checked === true })
                      }
                    />
                    <Label htmlFor="seo" className="cursor-pointer">
                      SEO optimalizácia
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="blog"
                      checked={formData.blog}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, blog: checked === true })
                      }
                    />
                    <Label htmlFor="blog" className="cursor-pointer">
                      Blog sekcia
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="integrations"
                      checked={formData.integrations}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, integrations: checked === true })
                      }
                    />
                    <Label htmlFor="integrations" className="cursor-pointer">
                      API integrácie
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="booking"
                      checked={formData.booking}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, booking: checked === true })
                      }
                    />
                    <Label htmlFor="booking" className="cursor-pointer">
                      Rezervačný systém
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payments"
                      checked={formData.payments}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, payments: checked === true })
                      }
                    />
                    <Label htmlFor="payments" className="cursor-pointer">
                      Platobné brány
                    </Label>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Message */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="message">Popis projektu *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Popíšte váš projekt, vaše ciele a očakávania..."
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="gdpr"
                    checked={formData.gdpr}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, gdpr: checked === true })
                    }
                    className={errors.gdpr ? "border-destructive" : ""}
                  />
                  <Label htmlFor="gdpr" className="cursor-pointer text-sm">
                    Súhlasím so spracovaním osobných údajov podľa GDPR *{" "}
                    <a href="/privacy" className="text-primary underline">
                      (viac info)
                    </a>
                  </Label>
                </div>
                {errors.gdpr && (
                  <p className="text-sm text-destructive">{errors.gdpr}</p>
                )}
                {errors.submit && (
                  <p className="text-sm text-destructive">{errors.submit}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Späť
            </Button>
            {currentStep < 5 ? (
              <Button onClick={handleNext}>
                Ďalej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Odosielam...
                  </>
                ) : (
                  <>
                    Odoslať
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

