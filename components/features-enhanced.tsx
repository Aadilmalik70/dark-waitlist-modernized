"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, Brain, Target, FileText, Workflow, Bot, Rocket, Sparkles, Users, CheckCircle, Star, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Accelerated Content Research",
    description: "Our intelligent AI agents automate the labor-intensive process of analyzing top-ranking content and competitor strategies. This allows your team to quickly uncover critical insights and identify content opportunities that manual research often misses.",
    benefit: "Streamline your research workflow",
    gradient: "from-purple-500 via-blue-500 to-purple-600",
    bgGradient: "from-purple-50 via-blue-50 to-purple-50",
    borderColor: "border-purple-200",
    stats: "75% faster"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Strategy for Organic Growth", 
    description: "Our data-driven blueprints are meticulously crafted based on in-depth analysis of what truly resonates with search engines and users. By focusing on intent-matched content and optimal structure, we drive meaningful organic traffic.",
    benefit: "Drive targeted organic traffic",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    bgGradient: "from-blue-50 via-cyan-50 to-blue-50",
    borderColor: "border-blue-200",
    stats: "+185% growth"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Precision Intent Matching",
    description: "Move beyond basic keyword analysis. SERP Strategist helps you uncover the true underlying search intent behind queries, guiding you to create content structures that deeply satisfy user needs and drive higher engagement.",
    benefit: "Boost content engagement",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    bgGradient: "from-emerald-50 via-teal-50 to-emerald-50",
    borderColor: "border-emerald-200",
    stats: "92% accuracy"
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Strategic Content Forecasting",
    description: "Gain a clearer understanding of your content's potential impact before publication. Our AI-powered insights provide a strategic perspective on ranking potential, helping you prioritize and refine your content efforts.",
    benefit: "Optimize content for impact",
    gradient: "from-orange-500 via-red-500 to-orange-600", 
    bgGradient: "from-orange-50 via-red-50 to-orange-50",
    borderColor: "border-orange-200",
    stats: "68% better ranking"
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Dynamic Research Agents",
    description: "Our autonomous AI agents act as an extension of your strategy team, continuously monitoring SERP changes, analyzing competitor moves, and learning from the evolving search landscape without constant manual oversight.",
    benefit: "Stay ahead of market trends",
    gradient: "from-violet-500 via-purple-500 to-violet-600",
    bgGradient: "from-violet-50 via-purple-50 to-violet-50", 
    borderColor: "border-violet-200",
    stats: "24/7 monitoring"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Adaptive Strategy for Evolving Search",
    description: "Built on a foundation of cutting-edge AI, SERP Strategist is designed to evolve alongside search engine algorithms. This ensures your content strategy remains resilient and effective in a dynamic digital landscape.",
    benefit: "Future-proof your SEO",
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    bgGradient: "from-pink-50 via-rose-50 to-pink-50",
    borderColor: "border-pink-200",
    stats: "100% future-ready"
  }
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Card className={`glass-light-card ${feature.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden h-full`}>
        <CardContent className="p-8 relative h-full flex flex-col">
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgGradient} border ${feature.borderColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Stats Badge */}
              <Badge className={`bg-gradient-to-r ${feature.gradient} text-white border-0 shadow-lg text-xs px-3 py-1`}>
                {feature.stats}
              </Badge>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-700 transition-colors flex-shrink-0">
              {feature.title}
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors flex-grow">
              {feature.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
              <p className={`text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.benefit}
              </p>
              
              <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function FeaturesEnhanced() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="glass-light border-purple-200 text-purple-800 mb-8 px-6 py-3 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              Unlock the Future of Content Strategy
            </Badge>
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">The Only SEO Platform Built for </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Google's AI Search Era
              </span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              SERP Strategist is designed to empower your team with the insights and tools needed to navigate the complexities of AI-driven search, providing a competitive edge in the evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Primary Feature: Google AI Search Mode */}
        <div className={`mb-24 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="glass-light-card border-purple-200 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-8 border border-purple-200 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-10 w-10 text-purple-600" />
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                    Master Google's AI Search Mode Before Your Competition
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Our proprietary AI agents continuously analyze patterns in Google's AI-generated search summaries. We help you identify the content structures and nuances that AI favors, providing actionable blueprints to increase your visibility in these critical new search environments.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    {[
                      "Analyze emerging patterns in AI-generated search results",
                      "Identify optimal content structures for AI visibility", 
                      "Gain insights to inform your AI-era content strategy"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-slate-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 mb-8">
                    <p className="text-sm text-slate-700">
                      <span className="text-purple-600 font-semibold">Adaptive Advantage:</span> We are building for tomorrow's AI-dominated SERPs, providing you with an adaptive strategy that evolves with search engines.
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group/btn px-8 py-4"
                  >
                    Explore AI Search Features
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 via-blue-100 to-purple-200 rounded-3xl border border-purple-200 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    {/* Mock UI Elements */}
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-200 shadow-lg">
                      <div className="text-xs font-semibold text-purple-800">AI Search Analysis Dashboard</div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-blue-200 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium text-slate-700">Live</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        AI Search
                      </div>
                      <div className="text-xl text-slate-600 font-medium">Pattern Recognition</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-200 shadow-xl">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-slate-800">97% Accuracy Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Feature: Team Collaboration */}
        <div className={`mb-20 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="glass-light-card border-blue-200 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 rounded-3xl border border-blue-200 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    {/* Mock UI Elements */}
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-200 shadow-lg">
                      <div className="text-xs font-semibold text-blue-800">Team Collaboration Hub</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        Team
                      </div>
                      <div className="text-xl text-slate-600 font-medium">Real-time Sync</div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 shadow-lg">
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white shadow-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-8 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                    Built for Teams, Not Solo Writers
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Designed from the ground up for team workflows, SERP Strategist fosters seamless collaboration across your content creation process. Share insights, co-create blueprints, and maintain content consistency with features built for multiple users.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {[
                      "Real-time blueprint collaboration for enhanced team synergy",
                      "Centralized knowledge base for successful content patterns",
                      "Streamlined workflows to maintain content consistency"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-slate-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group/btn px-8 py-4"
                  >
                    See Team Features
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Competitive Comparison Section */}
        <div className={`mt-24 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">
            Why Teams Switch to 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> SERP Strategist</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { vs: "Frase", features: ["Optimized for AI Search", "Enhanced Team Collaboration"], color: "purple" },
              { vs: "Surfer SEO", features: ["Deeper Competitor Insights", "Predictive Content Guidance"], color: "blue" },
              { vs: "MarketMuse", features: ["Agile Blueprint Generation", "User-Centric Onboarding"], color: "cyan" }
            ].map((comparison, index) => (
              <Card key={index} className={`glass-light-card border-${comparison.color}-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}>
                <CardContent className="p-8">
                  <h4 className={`font-bold text-${comparison.color}-600 mb-6 text-lg`}>vs. {comparison.vs}</h4>
                  <div className="space-y-4">
                    {comparison.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-600 group-hover:text-slate-800 transition-colors">
                        <CheckCircle className="text-green-500 mr-3 h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="#waitlist">
            <Button 
              size="lg"
              className="px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-bold text-lg shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span className="mr-3">Join the SERP Strategist Early Access Program</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
          <p className="mt-6 text-sm text-slate-500">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
