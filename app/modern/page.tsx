import { HeaderModern } from "@/components/header-modern"
import { FooterModern } from "@/components/footer-modern"
import { HeroSectionModern } from "@/components/hero-section-modern"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { HowItWorksModern } from "@/components/how-it-works-modern"
import { FeaturesModern } from "@/components/features-modern"
import { TestimonialsModern } from "@/components/testimonials-modern"
import { PricingModern } from "@/components/pricing-modern"

export default function ModernHome() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeaderModern />
      <main>
        <HeroSectionModern />
        <ProblemSolutionSection />
        <HowItWorksModern />
        <FeaturesModern />
        <TestimonialsModern />
        <PricingModern />
      </main>
      <FooterModern />
    </div>
  )
}
