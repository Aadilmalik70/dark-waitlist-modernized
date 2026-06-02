import { SimpleNavbar } from "@/components/landing/simple-navbar"
import { HeroSectionMultiColor } from "@/components/landing/hero-section-multi-color"
import { LogoCloudMarquee } from "@/components/landing/logo-cloud-marquee"
import { FeaturesSectionSkeletons } from "@/components/landing/features-section-skeletons"
import { BackgroundShootingStars } from "@/components/landing/background-shooting-stars"
import { ThreeColumnBentoGrid } from "@/components/landing/three-column-bento-grid"
import { FeatureBlockAnimatedCard } from "@/components/landing/feature-block-animated-card"
import { ContactFormGrid } from "@/components/landing/contact-form-grid"
import { CtaMasonryImages } from "@/components/landing/cta-masonry-images"
import { SimpleFooter } from "@/components/landing/simple-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SimpleNavbar />
      <main>
        <HeroSectionMultiColor />
        <LogoCloudMarquee />
        <BackgroundShootingStars>
          <FeaturesSectionSkeletons />
          <ThreeColumnBentoGrid />
        </BackgroundShootingStars>
        <FeatureBlockAnimatedCard />
        <ContactFormGrid />
        <CtaMasonryImages />
      </main>
      <SimpleFooter />
    </div>
  )
}
