"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Users } from "lucide-react"

const pricingFeatures = [
  "30 Articles a month generated and published on auto-pilot",
  "Auto Keyword Research made for you hands-free", 
  "High DR Backlinks built for you on auto-pilot through our Backlink Exchange",
  "Relevant YouTube videos integrated into articles",
  "Unlimited AI Rewrites",
  "Unlimited Users in your Organization",
  "Integrates with WordPress, Webflow, Shopify, Framer and many other platforms",
  "AI Images generated in different styles",
  "Articles generated in 150+ languages",
  "Custom Features requests"
]

const trustIndicators = [
  { name: "50k+ Articles Created", count: "50k+" },
  { name: "Rating", rating: 5 },
  { name: "Users", count: "10k+" }
]

export function PricingModern() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
            PRICING
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Grow Organic Traffic on{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Auto-Pilot
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Outrank grows your SEO rankings and organic traffic while you focus on growing your business.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white/20 flex items-center justify-center">
                  <Star className="h-4 w-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <span className="text-white/80">50k+ Articles Created</span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10"></div>
            
            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Pricing Info */}
                <div>
                  <div className="mb-8">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-4">
                      All in One
                    </Badge>
                    <div className="text-sm text-white/60 mb-2">For ambitious entrepreneurs</div>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-6xl md:text-7xl font-bold text-white">$99</span>
                      <span className="text-xl text-white/60">$200 /monthly</span>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold mb-4"
                    >
                      Get Started for Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
                    <p className="text-sm text-white/60 text-center">
                      Cancel anytime. No questions asked!
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">What's included:</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {/* Left Column Features */}
                    <div className="space-y-4">
                      {pricingFeatures.slice(0, 5).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Right Column Features */}
                    <div className="space-y-4">
                      {pricingFeatures.slice(5).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
              FAQ
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have Questions?
            </h3>
            <p className="text-white/80">
              If you can't find what you're looking for, feel free to reach out
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How does the article automation work?",
                answer: "Our AI analyzes your business, finds the best keywords, and creates SEO-optimized content daily. Everything is automated - you just review and approve."
              },
              {
                question: "Can I manage multiple websites with your service?", 
                answer: "Yes! You can manage unlimited websites and domains from a single dashboard. Perfect for agencies and multi-brand businesses."
              },
              {
                question: "What integrations do you support?",
                answer: "We integrate with WordPress, Webflow, Shopify, Notion, Wix, Framer, and many other platforms. Custom API integrations are also available."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                    <div className="text-2xl text-purple-400">+</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-6">
              LET'S TRY!
            </Badge>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Start creating magic today with a </span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                free trial!
              </span>
            </h3>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
