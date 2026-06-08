import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, TrendingUp, Users, Lock } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Enterprise-Grade Pricing with Google APIs Included
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Direct Google APIs integration, real-time collaboration, and enterprise security. Save 80% compared to Semrush Enterprise ($400+/month) and Ahrefs ($999+/month).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            description="Perfect for growing teams ready to leverage Google's native APIs for superior content strategy. Full Google Custom Search and Gemini AI integration included."
            price="$99"
            period="/month"
            features={[
              "Google Custom Search API Integration",
              "Gemini AI Blueprint Generation (21-second processing)",
              "100 Enterprise Blueprints/month",
              "Real-time Team Collaboration",
              "Up to 5 Team Members",
              "Basic SERP Analysis",
              "Email Support",
              "30-day Enterprise Trial"
            ]}
            limitations={[
              "No White-label Features",
              "Basic API Rate Limits"
            ]}
            isPopular={false}
            ctaText="Start Enterprise Trial"
          />

          <PricingCard
            name="Professional"
            description="Advanced Google APIs integration with Knowledge Graph and Natural Language API. Ideal for marketing teams and agencies requiring comprehensive SEO intelligence."
            price="$299"
            period="/month"
            features={[
              "Full Google APIs Suite (Custom Search, Gemini, Knowledge Graph, Natural Language)",
              "Unlimited Enterprise Blueprints",
              "Advanced Team Collaboration with WebSocket",
              "White-label Client Reports",
              "Up to 15 Team Members",
              "API Access & Webhooks",
              "Priority Support",
              "Custom Integrations (Slack, Notion, etc.)",
              "Advanced Analytics Dashboard"
            ]}
            limitations={[]}
            isPopular={true}
            ctaText="Most Popular for Agencies"
          />

          <PricingCard
            name="Enterprise"
            description="Complete Google-native enterprise solution with unlimited scale, SSO, compliance features, and dedicated support for Fortune 500 teams."
            price="$899"
            period="/month"
            features={[
              "Enterprise Google APIs Quotas & SLAs",
              "Unlimited Teams & Blueprints",
              "SSO & SAML Integration",
              "SOC 2 Type II Compliance",
              "Unlimited Team Members",
              "Dedicated Customer Success Manager",
              "Custom AI Model Training",
              "24/7 Enterprise Support",
              "White-label Platform Access",
              "Advanced Security & Audit Logs"
            ]}
            limitations={[]}
            isPopular={false}
            ctaText="Contact Enterprise Sales"
          />
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-gray-400">
              <Lock className="w-5 h-5" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <TrendingUp className="w-5 h-5" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>No Per-User Pricing Tricks</span>
            </div>
          </div>
        </div>

        {/* Enterprise value message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <p className="text-purple-300">
              🎯 Enterprise Advantage: Save <span className="font-bold text-white">$3,600+/year</span> vs Semrush Enterprise • <span className="font-bold text-white">100% Google APIs</span> data accuracy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  limitations: string[]
  isPopular: boolean
  ctaText: string
}

function PricingCard({ 
  name, 
  description, 
  price, 
  period, 
  features, 
  limitations, 
  isPopular, 
  ctaText 
}: PricingCardProps) {
  return (
    <Card
      className={`bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] relative ${
        isPopular ? "border-purple-500 shadow-lg shadow-purple-900/20" : "border-gray-800 hover:border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center text-sm font-medium py-2">
          MOST POPULAR • BEST VALUE
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        <div className="mb-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">{period}</span>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
          {limitations.map((limitation, index) => (
            <li key={`limitation-${index}`} className="flex items-start opacity-60">
              <span className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-gray-500">✕</span>
              <span className="text-gray-500">{limitation}</span>
            </li>
          ))}
        </ul>

        <a href="#waitlist" className="block">
          <Button
            className={`w-full py-6 rounded-lg font-medium ${
              isPopular
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {ctaText}
          </Button>
        </a>
      </div>

      {/* Early access badge */}
      <div className="absolute top-4 right-4">
        <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded-full">
          30% OFF
        </span>
      </div>
    </Card>
  )
}
