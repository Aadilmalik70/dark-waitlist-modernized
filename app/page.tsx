import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { ResultsSection } from "@/components/results-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CapabilitiesSection />
        <UseCasesSection />
        <IntegrationsSection />
        <ResultsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
