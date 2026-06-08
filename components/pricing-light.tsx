"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Users, Shield, Sparkles } from "lucide-react"

const earlyAccessFeatures = [
  "Priority access to new AI-powered features",
  "Direct line to our product team for feedback",
  "Exclusive webinars and training sessions", 
  "Beta testing opportunities",
  "Community access with other early adopters",
  "Grandfathered pricing when we launch"
]

const enterpriseFeatures = [
  "Custom AI agent training for your industry",
  "Dedicated customer success manager",
  "White-label deployment options",
  "Advanced security and compliance features",
  "Priority support and SLA guarantees",
  "Custom integrations and API access"
]

export function PricingLight() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="glass-light border-purple-200 text-purple-800 mb-6 px-4 py-2">
            PRICING
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">Join the SERP Strategist </span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
              Early Access Program
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Be among the first to experience the future of content strategy. Get early access to cutting-edge AI-powered SEO tools designed for enterprise teams.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Early Access Card */}
          <Card className="glass-light-card border-purple-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <CardHeader className="text-center pb-6">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 mx-auto mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Most Popular
              </Badge>
              <CardTitle className="text-2xl font-bold text-slate-900">Early Access</CardTitle>
              <div className="text-4xl font-bold text-slate-900 mt-4">Free</div>
              <p className="text-slate-600 mt-2">Limited time beta access</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {earlyAccessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all">
                Join Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-slate-500 text-center">
                No credit card required • Exclusive access • Limited spots available
              </p>
            </CardContent>
          </Card>

          {/* Enterprise Card */}
          <Card className="glass-light-card border-slate-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <Badge variant="outline" className="border-slate-300 text-slate-700 mx-auto mb-4">
                <Shield className="mr-2 h-4 w-4" />
                Enterprise
              </Badge>
              <CardTitle className="text-2xl font-bold text-slate-900">Custom Enterprise</CardTitle>
              <div className="text-4xl font-bold text-slate-900 mt-4">Contact Us</div>
              <p className="text-slate-600 mt-2">Tailored for your organization</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-3"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-slate-500 text-center">
                Custom pricing • Dedicated support • SOC 2 compliant
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Enterprise Team Collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-600" />
            <span>AI-Powered Content Strategy</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            {[
              {
                question: "What is the Early Access Program?",
                answer: "Our Early Access Program gives you free access to SERP Strategist while we're in beta. You'll get to use all core features, provide feedback that shapes the product, and secure grandfathered pricing when we officially launch."
              },
              {
                question: "How long will early access be available?",
                answer: "Early access will be available for the next 6 months while we finalize the platform based on user feedback. Early adopters will transition to paid plans with special pricing."
              },
              {
                question: "What makes SERP Strategist different from other SEO tools?",
                answer: "SERP Strategist is built specifically for Google's AI Search era and focuses on team collaboration. Our AI agents continuously analyze search patterns to provide actionable content blueprints that work in the age of AI-generated search results."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we take security seriously. We're SOC 2 Type II certified and implement enterprise-grade security measures. Your content strategies and data are encrypted and never shared with third parties."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-light-card border-slate-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Ready to Master AI Search?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Join forward-thinking teams who are already preparing for the future of search.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Early Access Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              Join 500+ teams already on the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
