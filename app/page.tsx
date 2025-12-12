import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { FeaturedProducts } from "@/components/sections/featured-projects"
import { Services } from "@/components/sections/services"
import { ProcessGSAP } from "@/components/sections/process-gsap"
import { Testimonials } from "@/components/sections/testimonials"
import { CTABanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Services />
      <ProcessGSAP />
      <Testimonials />
      <CTABanner />
    </>
  )
}
