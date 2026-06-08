"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Target, FileText, Workflow, Bot, Rocket, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Accelerated Content Research",
    description: "Our intelligent AI agents automate the labor-intensive process of analyzing top-ranking content and competitor strategies. This allows your team to quickly uncover critical insights and identify content opportunities that manual research often misses.",
    benefit: "Streamline your research workflow",
    color: "from-purple-500 to-blue-500",
    bgColor: "from-purple-50 to-blue-50",
    borderColor: "border-purple-200"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Strategy for Organic Growth", 
    description: "Our data-driven blueprints are meticulously crafted based on in-depth analysis of what truly resonates with search engines and users. By focusing on intent-matched content and optimal structure, we drive meaningful organic traffic.",
    benefit: "Drive targeted organic traffic",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Precision Intent Matching",
    description: "Move beyond basic keyword analysis. SERP Strategist helps you uncover the true underlying search intent behind queries, guiding you to create content structures that deeply satisfy user needs and drive higher engagement.",
    benefit: "Boost content engagement",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Strategic Content Forecasting",
    description: "Gain a clearer understanding of your content's potential impact before publication. Our AI-powered insights provide a strategic perspective on ranking potential, helping you prioritize and refine your content efforts.",
    benefit: "Optimize content for impact",
    color: "from-orange-500 to-red-500", 
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200"
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Dynamic Research Agents",
    description: "Our autonomous AI agents act as an extension of your strategy team, continuously monitoring SERP changes, analyzing competitor moves, and learning from the evolving search landscape without constant manual oversight.",
    benefit: "Stay ahead of market trends",
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50", 
    borderColor: "border-violet-200"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Adaptive Strategy for Evolving Search",
    description: "Built on a foundation of cutting-edge AI, SERP Strategist is designed to evolve alongside search engine algorithms. This ensures your content strategy remains resilient and effective in a dynamic digital landscape.",
    benefit: "Future-proof your SEO",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200"
  }
]

export function FeaturesLight() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="glass-light border-purple-200 text-purple-800 mb-6 px-4 py-2">
            Unlock the Future of Content Strategy
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">The Only SEO Platform Built for </span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
              Google's AI Search Era
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            SERP Strategist is designed to empower your team with the insights and tools needed to navigate the complexities of AI-driven search, providing a competitive edge in the evolving digital landscape.
          </p>
        </div>

        {/* Primary Feature: Google AI Search Mode */}
        <div className="mb-20">
          <Card className="glass-light-card border-purple-200 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-6 border border-purple-200">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                    Master Google's AI Search Mode Before Your Competition
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Our proprietary AI agents continuously analyze patterns in Google's AI-generated search summaries. We help you identify the content structures and nuances that AI favors, providing actionable blueprints to increase your visibility in these critical new search environments.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Analyze emerging patterns in AI-generated search results",
                      "Identify optimal content structures for AI visibility", 
                      "Gain insights to inform your AI-era content strategy"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-slate-600">
                      <span className="text-purple-600 font-semibold">Adaptive Advantage:</span> We are building for tomorrow's AI-dominated SERPs, providing you with an adaptive strategy that evolves with search engines.
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg"
                  >
                    Explore AI Search Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl border border-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">AI Search</div>
                      <div className="text-lg text-slate-600">Analysis Dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Feature: Team Collaboration */}
        <div className="mb-16">
          <Card className="glass-light-card border-blue-200 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border border-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">Team</div>
                      <div className="text-lg text-slate-600">Collaboration Hub</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 border border-blue-200">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                    Built for Teams, Not Solo Writers
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Designed from the ground up for team workflows, SERP Strategist fosters seamless collaboration across your content creation process. Share insights, co-create blueprints, and maintain content consistency with features built for multiple users.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Real-time blueprint collaboration for enhanced team synergy",
                      "Centralized knowledge base for successful content patterns",
                      "Streamlined workflows to maintain content consistency"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg"
                  >
                    See Team Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className={`glass-light-card ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group`}>
              <CardContent className="p-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <p className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Comparison Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Why Teams Switch to SERP Strategist</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-light-card border-purple-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-purple-600 mb-3">vs. Frase</h4>
                <ul className="text-sm text-slate-600 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Optimized for AI Search</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Enhanced Team Collaboration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass-light-card border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-blue-600 mb-3">vs. Surfer SEO</h4>
                <ul className="text-sm text-slate-600 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Deeper Competitor Insights</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Predictive Content Guidance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass-light-card border-cyan-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-cyan-600 mb-3">vs. MarketMuse</h4>
                <ul className="text-sm text-slate-600 space-y-2 text-left">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Agile Blueprint Generation</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>User-Centric Onboarding</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a href="#waitlist">
            <Button 
              size="lg"
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">Join the SERP Strategist Early Access Program</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-500">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
