import { WaitlistSection } from "@/components/waitlist-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ScrollToSection } from "@/components/scroll-to-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <ScrollToSection />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
