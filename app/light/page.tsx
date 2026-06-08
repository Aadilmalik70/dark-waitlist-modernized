import { HeaderLight } from "@/components/header-light"
import { FooterLight } from "@/components/footer-light"
import { HeroSectionLight } from "@/components/hero-section-light"
import { FeaturesLight } from "@/components/features-light"
import { PricingLight } from "@/components/pricing-light"
import { WaitlistSectionLight } from "@/components/waitlist-section-light"

export default function LightHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderLight />
      <main>
        <HeroSectionLight />
        <FeaturesLight />
        <PricingLight />
        <WaitlistSectionLight />
      </main>
      <FooterLight />
    </div>
  )
}
