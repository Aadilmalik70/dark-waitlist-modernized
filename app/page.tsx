import { HeaderModernAI } from "@/components/header-modern-ai"
import { FooterLight } from "@/components/footer-light"
import HeroSectionFixed from "@/components/hero-section-fixed"
import { HowItWorksModernAI } from "@/components/how-it-works-modern-ai"
import { SocialProofModernAI } from "@/components/social-proof-modern-ai"
import { CompetitiveComparisonSection } from "@/components/competitive-comparison-section"
import FeaturesSectionSimple from "@/components/features-section-simple"
import { PricingFixed } from "@/components/pricing-fixed"
import { WaitlistModernAI } from "@/components/waitlist-modern-ai"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderModernAI />
      <main>
        <HeroSectionFixed />
        <HowItWorksModernAI />
        <SocialProofModernAI />
        <FeaturesSectionSimple />
        <CompetitiveComparisonSection />
        <PricingFixed />
        <WaitlistModernAI />
      </main>
      <FooterLight />
    </div>
  )
}
