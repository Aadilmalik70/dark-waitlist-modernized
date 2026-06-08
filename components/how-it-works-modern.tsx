"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Globe, BarChart3, FileText, Calendar, Clock } from "lucide-react"

export function HowItWorksModern() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
            HOW IT WORKS
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">How we </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              make magic
            </span>
            <span className="text-white"> happen </span>
            <span className="text-2xl">↴</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We handle the SEO heavy lifting. Relax while we create daily ranking content to keep you ahead of the competition.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8"
          >
            Start for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1: Analysis */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep analysis of your business</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We explore your niche, competitors, and target audience. Discover hidden keywords with high traffic potential and low competition.
              </p>
              
              {/* Mock Analysis Interface */}
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-white/80">Website to Business</span>
                </div>
                <div className="bg-white/5 rounded px-3 py-2 text-left mb-3">
                  <span className="text-white/60 text-sm">yourbusiness.com</span>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analyze your website
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Strategy */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get a powerful 30-day plan</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Create a strategic content plan where each day focuses on a key phrase with the highest potential for your business.
              </p>
              
              {/* Mock Calendar Interface */}
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-center mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Automatically created Content Plan
                  </Badge>
                </div>
                
                {/* Mini Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-xs">
                  <div className="text-white/60 p-1">Jan</div>
                  <div className="text-white/60 p-1">2025</div>
                  <div></div><div></div><div></div><div></div><div></div>
                  
                  {/* Sample calendar days */}
                  <div className="bg-blue-500/20 text-blue-300 p-1 rounded text-center">6</div>
                  <div className="bg-green-500/20 text-green-300 p-1 rounded text-center">7</div>
                  <div className="bg-purple-500/20 text-purple-300 p-1 rounded text-center">8</div>
                  <div className="bg-pink-500/20 text-pink-300 p-1 rounded text-center">9</div>
                  <div className="bg-cyan-500/20 text-cyan-300 p-1 rounded text-center">10</div>
                  <div className="bg-orange-500/20 text-orange-300 p-1 rounded text-center">11</div>
                  <div className="bg-red-500/20 text-red-300 p-1 rounded text-center">12</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Generation */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Generate articles on autopilot</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We create and publish SEO-optimized articles based on selected keywords daily. Your blog grows automatically while you focus on your business.
              </p>
              
              {/* Mock Content Score */}
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">SEO Content Score</span>
                </div>
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <div className="relative w-24 h-24 rounded-full border-4 border-green-500/30">
                      <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">97%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-white/70">
                    <div className="flex justify-between mb-1">
                      <span>Words: 2,554</span>
                      <span>Headings: 7</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-white/60 mb-4">
            <Clock className="h-4 w-4" />
            <span>Average setup time: 5 minutes</span>
          </div>
          <p className="text-white/80 text-lg">
            Everything automated • No technical knowledge required
          </p>
        </div>
      </div>
    </section>
  )
}
