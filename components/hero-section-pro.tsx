"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, Users, Shield, TrendingUp, Sparkles, Brain, Target, Zap, Play, Star, CheckCircle, Clock, Database, Globe } from "lucide-react"
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
        setMessage(data.message || "Welcome to the future of enterprise SEO! Check your email for exclusive early access.")
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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 p-3 bg-gradient-to-r from-white/95 to-slate-50/95 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-2xl">
        <Input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 px-6 text-base bg-transparent border-0 focus:ring-0 focus:outline-0 text-slate-900 placeholder:text-slate-500 flex-1"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-14 px-10 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 rounded-xl group"
          disabled={loading}
        >
          {loading ? (
            <>
              <Skeleton className="w-4 h-4 mr-2" />
              Processing...
            </>
          ) : (
            <>
              Get Early Access Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-purple-600" />
          <span className="font-medium">Limited spots: <span className="text-purple-600 font-bold">47 remaining</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-600" />
          <span>No credit card required</span>
        </div>
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

export function HeroSectionPro() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/50 to-blue-50/50">
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/10 via-pink-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Enhanced Floating UI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedFloatingCard delay={0} className="absolute top-16 left-16">
          <Card className="glass-light-card border-purple-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Google APIs Integration</div>
                <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 text-xs">
                  100% Native Data
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>
        
        <AnimatedFloatingCard delay={1} className="absolute top-32 right-16">
          <Card className="glass-light-card border-blue-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Blueprint Generation</div>
                <div className="text-xs text-blue-600 font-bold">21 Seconds</div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>

        <AnimatedFloatingCard delay={2} className="absolute bottom-40 left-20">
          <Card className="glass-light-card border-emerald-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">WebSocket Collaboration</div>
                <div className="flex -space-x-1 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border border-white shadow-sm" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>

        <AnimatedFloatingCard delay={0.5} className="absolute bottom-24 right-32">
          <Card className="glass-light-card border-orange-200/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Cost Savings</div>
                <div className="text-xs text-emerald-600 font-bold">80% vs Enterprise Tools</div>
              </div>
            </CardContent>
          </Card>
        </AnimatedFloatingCard>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Enhanced Announcement Badge */}
        <div className="inline-flex items-center justify-center mb-8 transform hover:scale-105 transition-transform duration-300">
          <Badge className="glass-light border-purple-200/50 text-purple-800 px-8 py-4 text-base font-semibold shadow-lg backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
              <Globe className="h-5 w-5 text-purple-600" />
              <span>Google APIs Partner</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Fortune 500 Teams</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-green-700 font-bold">80% Cost Savings</span>
            </div>
          </Badge>
        </div>

        {/* Revolutionary New Headline */}
        <div className="mb-10 space-y-4">
          {isLoaded ? (
            <>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-in-left">
                <span className="block text-slate-900 mb-3">The First SEO Platform Built on</span>
                <span className="block">
                  <GradientText>Google's Native APIs</GradientText>
                </span>
              </h1>
              <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                <p className="text-2xl md:text-3xl text-slate-700 max-w-5xl mx-auto leading-relaxed font-medium">
                  Generate AI-optimized content blueprints in 
                  <span className="text-purple-600 font-bold"> 21 seconds</span> using Google's Custom Search, 
                  Knowledge Graph, and Gemini APIs — not scraped data like traditional tools.
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <Skeleton className="h-20 w-3/4 mx-auto" />
              <Skeleton className="h-20 w-full mx-auto" />
              <Skeleton className="h-12 w-4/5 mx-auto" />
            </div>
          )}
        </div>

        {/* Enhanced Trust Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-base text-slate-700 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold group-hover:text-slate-900 transition-colors">Google APIs Integration</span>
              <div className="text-xs text-slate-500">100% Native Data Accuracy</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold group-hover:text-slate-900 transition-colors">21-Second Generation</span>
              <div className="text-xs text-slate-500">Enterprise-Grade Speed</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold group-hover:text-slate-900 transition-colors">WebSocket Collaboration</span>
              <div className="text-xs text-slate-500">Real-Time Team Sync</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold group-hover:text-slate-900 transition-colors">80% Cost Savings</span>
              <div className="text-xs text-slate-500">vs Semrush Enterprise</div>
            </div>
          </div>
        </div>

        {/* Enhanced Email Subscription Form */}
        <div className="relative mb-16 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <EmailSubscribeForm />
        </div>

        {/* Value Proposition Summary */}
        <div className="text-center text-slate-600 max-w-4xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <p className="text-xl font-semibold">Join forward-thinking marketing teams and agencies using Google's native data for enterprise SEO success.</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50 rounded-xl p-4">
              <div className="font-bold text-purple-700 mb-2">vs Semrush Enterprise</div>
              <div className="text-slate-600">$400/month → $99/month<br/>Scraped data → Google APIs</div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-xl p-4">
              <div className="font-bold text-blue-700 mb-2">vs Ahrefs Enterprise</div>
              <div className="text-slate-600">$999/month → $299/month<br/>Individual → Team collaboration</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-4">
              <div className="font-bold text-emerald-700 mb-2">Early Access Benefits</div>
              <div className="text-slate-600">Beta program ends March 31st<br/>Grandfathered pricing included</div>
            </div>
          </div>
        </div>

        {/* Enhanced Demo Showcase */}
        <div className="mt-24 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Watch Google APIs in Action
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See live Google Custom Search, Knowledge Graph, and Gemini AI integration generating enterprise-grade content blueprints
            </p>
          </div>
          
          <Card className="glass-light-card border-slate-200/50 shadow-2xl overflow-hidden backdrop-blur-lg group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-0 relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white rounded-full p-12 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110"
                >
                  <Play className="h-12 w-12 ml-2" fill="currentColor" />
                </Button>
              </div>
              
              {/* Enhanced Demo UI Elements */}
              <div className="absolute top-6 left-6 glass-light px-6 py-3 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                  <span className="text-slate-700 font-semibold">Google APIs Live Integration</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 glass-light px-6 py-3 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-semibold">21-Second Generation</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass-light px-8 py-4 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[Database, Brain, Users, TrendingUp].map((Icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-white shadow-sm flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-700 font-semibold">Enterprise Platform Demo</span>
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
