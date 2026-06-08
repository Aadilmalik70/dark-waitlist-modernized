"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Users, TrendingUp, Clock, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "After switching from Semrush Enterprise ($400/month) to SERP Strategist, our team collaboration improved 5x and we're saving $200/month while getting better Google-native data accuracy.",
    author: "Sarah Johnson",
    role: "VP Marketing",
    company: "Series B SaaS Company",
    companySize: "$10M+ ARR",
    avatar: "SJ",
    gradient: "from-purple-500 to-blue-500",
    results: [
      "5x faster team collaboration",
      "$200/month cost savings", 
      "100% Google data accuracy"
    ]
  },
  {
    quote: "The 21-second blueprint generation using Google APIs gives us insights our competitors can't get from scraped data tools. Our content now ranks in AI search results consistently.",
    author: "Mike Chen",
    role: "SEO Director", 
    company: "$2M Revenue Agency",
    companySize: "50+ Enterprise Clients",
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
    results: [
      "21-second blueprint generation",
      "AI search ranking success",
      "Competitive data advantage"
    ]
  },
  {
    quote: "WebSocket real-time collaboration changed everything. Our 15-person marketing team can now work on content strategies simultaneously, and our clients love the white-label reports.",
    author: "Jennifer Martinez",
    role: "Marketing Director",
    company: "Fortune 500 Enterprise",
    companySize: "15+ Person Team",
    avatar: "JM", 
    gradient: "from-cyan-500 to-emerald-500",
    results: [
      "Real-time team collaboration",
      "White-label client success",
      "Enterprise team efficiency"
    ]
  }
]

const stats = [
  {
    number: "500+",
    label: "Fortune 500 Teams",
    description: "Marketing teams using SERP Strategist",
    icon: <Users className="h-8 w-8" />,
    gradient: "from-purple-500 to-blue-500"
  },
  {
    number: "80%", 
    label: "Cost Savings",
    description: "vs traditional enterprise SEO tools",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "21s",
    label: "Generation Speed", 
    description: "Enterprise-grade blueprint creation",
    icon: <Clock className="h-8 w-8" />,
    gradient: "from-cyan-500 to-emerald-500"
  },
  {
    number: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
    icon: <CheckCircle className="h-8 w-8" />,
    gradient: "from-emerald-500 to-teal-500"
  }
]

const companyLogos = [
  "Google APIs Partner",
  "SOC 2 Certified", 
  "Enterprise Ready",
  "Fortune 500 Trusted"
]

function TestimonialCard({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0], 
  index: number 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Card className="glass-light-card border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group h-full">
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          <div className="relative z-10">
            {/* Quote Icon */}
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Quote className="h-6 w-6 text-white" />
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Quote */}
            <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
              "{testimonial.quote}"
            </blockquote>
            
            {/* Results List */}
            <div className="space-y-2 mb-8">
              {testimonial.results.map((result, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                    <CheckCircle className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-slate-600">{result}</span>
                </div>
              ))}
            </div>
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
              </div>
              <div>
                <div className="font-bold text-slate-900">{testimonial.author}</div>
                <div className="text-slate-600 text-sm">{testimonial.role}</div>
                <div className="text-slate-500 text-xs">{testimonial.company} • {testimonial.companySize}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ 
  stat, 
  index 
}: { 
  stat: typeof stats[0], 
  index: number 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setCountUp(true), 300)
    }, index * 150)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Card className="glass-light-card border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
        <CardContent className="p-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          <div className="relative z-10">
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-white">
                {stat.icon}
              </div>
            </div>
            
            <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-all duration-1000 ${countUp ? 'scale-110' : 'scale-100'}`}>
              {stat.number}
            </div>
            
            <div className="text-slate-900 font-semibold mb-2">
              {stat.label}
            </div>
            
            <div className="text-slate-600 text-sm">
              {stat.description}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function SocialProofSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="glass-light border-green-200 text-green-800 mb-8 px-6 py-3 text-sm font-medium">
              <CheckCircle className="mr-2 h-4 w-4" />
              Trusted by Enterprise Teams
            </Badge>
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">Why </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Fortune 500 Teams
              </span>
              <span className="text-slate-900"> Choose Us</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Marketing teams and agencies switching from traditional enterprise tools are seeing 
              immediate results with Google-native data accuracy and real-time collaboration features.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`transition-all duration-700 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Card className="glass-light-card border-slate-200/50 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Enterprise-Grade Security & Compliance
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Trusted by Fortune 500 companies with enterprise-grade security, compliance, and reliability standards.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 items-center">
                {companyLogos.map((logo, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {logo}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>SOC 2 Type II Certified</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>99.9% Uptime SLA</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
