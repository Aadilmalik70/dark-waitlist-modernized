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
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-green-300 text-sm font-medium">🎉 Early Access Pricing - Save 30%</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            35-70% More Affordable Than Competitors
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join 843 teams already saving thousands while getting better results. Lock in early access pricing before we launch.
          </p>
          {/* Competitor pricing comparison */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Frase Team Plan: <s className="text-gray-500">$115/mo</s></span>
            <span>Surfer Business: <s className="text-gray-500">$119/mo</s></span>
            <span>MarketMuse Standard: <s className="text-gray-500">$149/mo</s></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            description="Perfect for small teams getting started"
            price="$39"
            originalPrice="$59"
            period="/month"
            features={[
              "50 AI-Generated Content Blueprints/mo",
              "Basic Google AI Search Analysis",
              "Competitor Content Analysis",
              "Content Format Recommendations",
              "Up to 2 Team Members",
              "Email Support",
              "14-day Free Trial"
            ]}
            limitations={[
              "No API Access",
              "Basic Reporting Only"
            ]}
            isPopular={false}
            ctaText="Start Free Trial"
            savingsText="Save $480/year vs Frase"
          />

          <PricingCard
            name="Professional"
            description="For growing content teams"
            price="$79"
            originalPrice="$119"
            period="/month"
            features={[
              "200 AI-Generated Blueprints/mo",
              "Advanced Google AI Search Optimization",
              "Deep Competitor Dissection",
              "SERP Feature Optimization",
              "Predictive Performance Scoring",
              "Up to 5 Team Members",
              "Real-time Collaboration",
              "Priority Support",
              "Custom Integrations"
            ]}
            limitations={[]}
            isPopular={true}
            ctaText="Get Early Access"
            savingsText="Save $960/year vs Surfer"
          />

          <PricingCard
            name="Agency"
            description="For agencies and large teams"
            price="$149"
            originalPrice="$249"
            period="/month"
            features={[
              "Unlimited Blueprints",
              "White Label Reports",
              "Advanced Team Workflows",
              "API Access",
              "Up to 10 Team Members",
              "Dedicated Account Manager",
              "Custom AI Training",
              "SLA Guarantee",
              "Quarterly Strategy Reviews"
            ]}
            limitations={[]}
            isPopular={false}
            ctaText="Contact Sales"
            savingsText="Save $2,400/year vs MarketMuse"
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

        {/* Urgency message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <p className="text-purple-300">
              ⏰ Early access pricing ends in <span className="font-bold text-white">72 hours</span> • Only <span className="font-bold text-white">37 spots</span> remaining
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
  originalPrice: string
  period: string
  features: string[]
  limitations: string[]
  isPopular: boolean
  ctaText: string
  savingsText: string
}

function PricingCard({ 
  name, 
  description, 
  price, 
  originalPrice, 
  period, 
  features, 
  limitations, 
  isPopular, 
  ctaText, 
  savingsText 
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
          <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
        </div>
        <p className="text-green-400 text-sm mb-6">{savingsText}</p>

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
