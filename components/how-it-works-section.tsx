"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Brain, Users, Zap, CheckCircle, Clock, Globe, Target, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const processSteps = [
  {
    step: "01",
    title: "Google APIs Analysis",
    description: "Direct integration with Google Custom Search, Knowledge Graph, and Natural Language APIs provides 100% accurate competitor and SERP data — not scraped approximations.",
    icon: <Database className="h-12 w-12" />,
    gradient: "from-purple-500 to-blue-500",
    bgGradient: "from-purple-50 to-blue-50",
    features: [
      "Google Custom Search API integration",
      "Knowledge Graph entity extraction", 
      "Natural Language sentiment analysis",
      "Real-time SERP data (not cached)"
    ],
    tech: "Google APIs",
    speed: "Real-time"
  },
  {
    step: "02", 
    title: "AI Blueprint Generation",
    description: "Gemini AI analyzes Google's native data to generate enterprise-grade content structures optimized for AI search inclusion in just 21 seconds.",
    icon: <Brain className="h-12 w-12" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50", 
    features: [
      "Gemini AI content optimization",
      "AI search inclusion strategies",
      "Competitor gap analysis",
      "Entity-rich content structure"
    ],
    tech: "Gemini AI",
    speed: "21 seconds"
  },
  {
    step: "03",
    title: "Team Collaboration",
    description: "WebSocket-powered real-time collaboration lets your team edit, review, and execute content strategies together — like Google Docs for enterprise SEO.",
    icon: <Users className="h-12 w-12" />,
    gradient: "from-cyan-500 to-emerald-500", 
    bgGradient: "from-cyan-50 to-emerald-50",
    features: [
      "WebSocket real-time editing",
      "Live team collaboration",
      "Role-based permissions", 
      "Project management integration"
    ],
    tech: "WebSocket",
    speed: "Instant sync"
  }
]

function ProcessCard({ 
  step, 
  index, 
  inView = true 
}: { 
  step: typeof processSteps[0], 
  index: number,
  inView?: boolean 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), index * 200)
      return () => clearTimeout(timer)
    }
  }, [inView, index])

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Card className="glass-light-card border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group overflow-hidden h-full">
        <CardContent className="p-8 relative">
          {/* Step Number Badge */}
          <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg z-10`}>
            <span className="text-white font-bold text-xl">{step.step}</span>
          </div>

          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          
          <div className="relative z-10 pt-4">
            {/* Icon and Tech Badge */}
            <div className="flex items-start justify-between mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                  {step.icon}
                </div>
              </div>
              
              <div className="text-right">
                <Badge className={`bg-gradient-to-r ${step.gradient} text-white border-0 shadow-lg mb-2`}>
                  {step.tech}
                </Badge>
                <div className="text-sm text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{step.speed}</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-700 transition-colors">
              {step.title}
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors">
              {step.description}
            </p>
            
            {/* Feature List */}
            <div className="space-y-3">
              {step.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group/item">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function HowItWorksSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="glass-light border-purple-200 text-purple-800 mb-8 px-6 py-3 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              Enterprise Platform Architecture
            </Badge>
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">How </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Google APIs Power
              </span>
              <span className="text-slate-900"> Your Success</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Unlike traditional tools that rely on scraped data, SERP Strategist uses Google's native APIs 
              for enterprise-grade accuracy and AI search optimization that competitors simply cannot match.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} inView={isLoaded} />
          ))}
        </div>

        {/* Technical Advantage Section */}
        <div className={`mt-24 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="glass-light-card border-purple-200/50 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  The Only Platform with 
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Direct Google Integration
                  </span>
                </h3>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  While Semrush and Ahrefs rely on scraped data with accuracy limitations, SERP Strategist 
                  is the only platform with official Google APIs partnership, giving you access to the same 
                  data Google uses internally.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <div className="text-2xl font-bold text-green-700 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Google Data Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                    <div className="text-2xl font-bold text-blue-700 mb-2">21s</div>
                    <div className="text-sm text-slate-600">Enterprise Blueprint Generation</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <div className="text-2xl font-bold text-purple-700 mb-2">80%</div>
                    <div className="text-sm text-slate-600">Cost Savings vs Traditional</div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group/btn"
                >
                  See Google APIs Demo
                  <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
