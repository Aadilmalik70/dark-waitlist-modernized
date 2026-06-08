"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, Users, Shield, TrendingUp, Sparkles, Brain, Target, Zap, Play, Star } from "lucide-react"
import { useState, useEffect } from "react"

function EmailSubscribeForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setMessage(data.message || "Welcome to the future of content strategy! Check your email for exclusive insights.")
        setEmail("")
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError(data.error || "You're already on our waitlist - we'll notify you first when we launch!")
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 p-2 bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 px-6 text-base bg-transparent border-0 focus:ring-0 focus:outline-0 text-slate-900 placeholder:text-slate-500 flex-1"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-12 px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 rounded-xl group"
          disabled={loading}
        >
          {loading ? (
            <>
              <Skeleton className="w-4 h-4 mr-2" />
              Starting...
            </>
          ) : (
            <>
              Start Enterprise Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
      {(success || error) && (
        <div className="mt-4 p-4 rounded-xl backdrop-blur-sm border border-white/20">
          {success && <div className="text-green-700 text-sm font-medium">{message}</div>}
          {error && <div className="text-red-700 text-sm font-medium">{error}</div>}
        </div>
      )}
    </form>
  )
}

function AnimatedFloatingCard({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string 
}) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: "6s"
      }}
    >
      {children}
    </div>
  )
}

function GradientText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

export function HeroSectionEnhanced() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/50 to-blue-50/50">
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/10 via-pink-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-70" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-70" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Floating UI Elements with Enhanced Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedFloatingCard delay={0} className="absolute top-20 left-20">
          <Card className="glass-light-card border-purple-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">AI Research Agents</div>
                <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 text-xs">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>
        
        <AnimatedFloatingCard delay={1} className="absolute top-40 right-20">
          <Card className="glass-light-card border-blue-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Content Strategy</div>
                <div className="text-xs text-slate-600">97% SEO Score</div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>

        <AnimatedFloatingCard delay={2} className="absolute bottom-32 left-32">
          <Card className="glass-light-card border-emerald-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Team Collaboration</div>
                <div className="flex -space-x-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border border-white shadow-sm" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>

        <AnimatedFloatingCard delay={0.5} className="absolute bottom-40 right-40">
          <Card className="glass-light-card border-orange-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">SEO Performance</div>
                <div className="text-xs text-emerald-600 font-medium">+185% Growth</div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Announcement Badge with Gradient */}
        <div className="inline-flex items-center justify-center mb-8 transform hover:scale-105 transition-transform duration-300">
          <Badge className="glass-light border-purple-200/50 text-purple-800 px-6 py-3 text-sm font-medium shadow-lg backdrop-blur-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="hidden sm:inline">🚀</span> Google-Native Enterprise SEO Platform
              <span className="hidden sm:inline">• Trusted by Fortune 500 Teams</span>
            </div>
          </Badge>
        </div>

        {/* Enhanced Main Headline with Staggered Animation */}
        <div className="mb-8 space-y-2">
          {isLoaded ? (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-left">
                <span className="block text-slate-900 mb-2">The Only SEO Platform with</span>
                <span className="block">
                  <GradientText>100% Google-Native Data Accuracy</GradientText>
                </span>
              </h1>
            </>
          ) : (
            <div className="space-y-4">
              <Skeleton className="h-16 w-3/4 mx-auto" />
              <Skeleton className="h-16 w-full mx-auto" />
            </div>
          )}
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-10 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Skip the scraped data limitations of Semrush and Ahrefs. SERP Strategist provides 
            <GradientText className="font-semibold"> direct Google APIs integration</GradientText> with 
            Gemini AI, Custom Search, and Knowledge Graph for enterprise teams who demand accuracy and 
            <GradientText className="font-semibold"> 80% cost savings</GradientText> over traditional tools.
          </p>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-slate-600 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium group-hover:text-slate-900 transition-colors">SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium group-hover:text-slate-900 transition-colors">Enterprise Team Collaboration</span>
          </div>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium group-hover:text-slate-900 transition-colors">80% Cost Savings vs Semrush</span>
          </div>
        </div>

        {/* Enhanced Email Subscription Form */}
        <div className="relative mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <EmailSubscribeForm />
        </div>

        {/* Enhanced Supporting Text */}
        <div className="text-center text-slate-500 text-sm max-w-2xl mx-auto space-y-3 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="font-medium">Join Fortune 500 teams using Google-native data for superior content strategy.</p>
          <p>Enterprise-grade security, real-time collaboration, and Google APIs integration.</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Badge variant="outline" className="border-purple-200 text-purple-700">21-second blueprint generation</Badge>
            <Badge variant="outline" className="border-blue-200 text-blue-700">30-day enterprise trial</Badge>
            <Badge variant="outline" className="border-emerald-200 text-emerald-700">White-label available</Badge>
          </div>
        </div>

        {/* Enhanced Demo Video Preview */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <Card className="glass-light-card border-slate-200/50 shadow-2xl overflow-hidden backdrop-blur-lg group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-0 relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white rounded-full p-8 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>
              </div>
              
              {/* Demo UI Elements */}
              <div className="absolute top-4 left-4 glass-light px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
                  <span className="text-slate-700 text-sm font-medium">SERP Strategist Demo</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 glass-light px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-700 text-sm font-medium">SEO Performance</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-light px-6 py-3 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-white shadow-sm flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Watch Demo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
