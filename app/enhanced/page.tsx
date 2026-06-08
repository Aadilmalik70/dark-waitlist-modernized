import { HeaderLight } from "@/components/header-light"
import { FooterLight } from "@/components/footer-light"
import { HeroSectionEnhanced } from "@/components/hero-section-enhanced"
import { FeaturesEnhanced } from "@/components/features-enhanced"
import { PricingEnhanced } from "@/components/pricing-enhanced"
import { WaitlistSectionLight } from "@/components/waitlist-section-light"

export default function EnhancedHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderLight />
      <main>
        <HeroSectionEnhanced />
        <FeaturesEnhanced />
        <PricingEnhanced />
        <WaitlistSectionLight />
      </main>
      <FooterLight />
    </div>
  )
}
