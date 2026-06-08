"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, User, Clock, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: <User className="h-8 w-8 text-red-400" />,
    title: "Monthly subscriptions for ahrefs, SURFER, Canva eat up $500+ of marketing budget.",
    color: "from-red-500/10 to-orange-500/10"
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-400" />,
    title: "Switching between: ChatGPT, WEGLOT, SURFER losing time and efficiency.",
    color: "from-orange-500/10 to-yellow-500/10"
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-yellow-400" />,
    title: "Hours spent learning SEO tools instead of growing business.",
    color: "from-yellow-500/10 to-red-500/10"
  }
]

const solutionFeatures = [
  "Keyword Searching",
  "Content Generation", 
  "Content Optimization",
  "Images",
  "Localization"
]

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
            PROBLEMS & SOLUTION
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="block mb-2">Your problem</span>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">↙</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our solution
              </span>
              <span className="text-2xl">↘</span>
            </div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems Side */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-red-400/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 text-lg leading-relaxed">
                        {problem.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solution Side */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-400/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Outrank</h3>
                </div>
                
                <p className="text-purple-100 mb-8 text-lg">
                  Replace multiple tools with one powerful platform:
                </p>

                <div className="space-y-4 mb-8">
                  {solutionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  Start for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
