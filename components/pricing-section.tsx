import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

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
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            description="Perfect for individuals and small teams"
            price="$X"
            period="/month"
            features={[
              "AI-Generated Content Blueprints",
              "Basic Competitor Analysis",
              "Content Format Recommendations",
              "Question Mapping",
              "1 User",
              "Email Support",
            ]}
            isPopular={false}
            ctaText="Choose Starter"
          />

          <PricingCard
            name="Professional"
            description="For growing content teams"
            price="$Y"
            period="/month"
            features={[
              "Everything in Starter",
              "Advanced SERP Analysis",
              "Competitor Content Dissection",
              "SERP Feature Optimization",
              "Predictive Content Performance",
              "3 Users",
              "Priority Support",
            ]}
            isPopular={true}
            ctaText="Choose Professional"
          />

          <PricingCard
            name="Agency"
            description="For agencies and large teams"
            price="$Z"
            period="/month"
            features={[
              "Everything in Professional",
              "Unlimited Blueprints",
              "White Label Reports",
              "Team Collaboration Tools",
              "API Access",
              "10 Users",
              "Dedicated Account Manager",
              "Custom Integrations",
            ]}
            isPopular={false}
            ctaText="Choose Agency"
          />
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
  isPopular: boolean
  ctaText: string
}

function PricingCard({ name, description, price, period, features, isPopular, ctaText }: PricingCardProps) {
  return (
    <Card
      className={`bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${
        isPopular ? "border-purple-500 shadow-lg shadow-purple-900/20" : "border-gray-800 hover:border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center text-sm font-medium py-1">
          Recommended
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        <div className="mb-6">
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
        </ul>

        <a href="#waitlist" className="block">
          <Button
            className={`w-full py-6 rounded-lg ${
              isPopular
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {ctaText}
          </Button>
        </a>
      </div>
    </Card>
  )
}
