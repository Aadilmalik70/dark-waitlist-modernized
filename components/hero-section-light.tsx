"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Shield, TrendingUp, Sparkles, Brain, Target } from "lucide-react"
import { useState } from "react"

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
      <div className="flex flex-col sm:flex-row gap-0">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 sm:h-14 px-6 text-base bg-white/80 backdrop-blur-sm border-slate-200 rounded-t-xl sm:rounded-l-xl sm:rounded-r-none sm:rounded-t-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all flex-1 shadow-sm"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl rounded-b-xl sm:rounded-l-none sm:rounded-r-xl sm:rounded-b-xl whitespace-nowrap"
          disabled={loading}
        >
          {loading ? "Starting..." : "Start Enterprise Trial"}
        </Button>
      </div>
      {(success || error) && (
        <div className="mt-3 text-sm text-center">
          {success && <span className="text-green-600">{message}</span>}
          {error && <span className="text-red-600">{error}</span>}
        </div>
      )}
    </form>
  )
}

export function HeroSectionLight() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Card className="glass-light-card border-slate-200/50 shadow-lg">
            <CardContent className="p-4 flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-slate-700 font-medium">AI Research Agents</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">Active</Badge>
            </CardContent>
          </Card>
        </div>
        
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Card className="glass-light-card border-slate-200/50 shadow-lg">
            <CardContent className="p-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-700 font-medium">Content Strategy</span>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Card className="glass-light-card border-slate-200/50 shadow-lg">
            <CardContent className="p-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-sm text-slate-700 font-medium">Team Collaboration</span>
              <div className="flex -space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white shadow-sm" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-40 right-40 animate-float" style={{ animationDelay: "0.5s" }}>
          <Card className="glass-light-card border-slate-200/50 shadow-lg">
            <CardContent className="p-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700 font-medium">SEO Performance</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <Badge 
            variant="outline" 
            className="glass-light border-purple-200 text-purple-800 px-4 py-2 text-sm font-medium shadow-sm"
          >
            <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
            🚀 Google-Native Enterprise SEO Platform • Trusted by Fortune 500 Teams
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-slate-900 mb-2">The Only SEO Platform with</span>
          <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
            100% Google-Native Data Accuracy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Skip the scraped data limitations of Semrush and Ahrefs. SERP Strategist provides direct Google APIs integration with Gemini AI, Custom Search, and Knowledge Graph for enterprise teams who demand accuracy and 80% cost savings over traditional tools.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Enterprise Team Collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span>80% Cost Savings vs Semrush</span>
          </div>
        </div>

        {/* Email Subscription */}
        <div className="relative mb-12">
          <EmailSubscribeForm />
        </div>

        {/* Supporting Text */}
        <div className="text-center text-slate-500 text-sm max-w-2xl mx-auto space-y-2">
          <p>Join Fortune 500 teams using Google-native data for superior content strategy.</p>
          <p>Enterprise-grade security, real-time collaboration, and Google APIs integration.</p>
          <p className="font-medium">21-second blueprint generation • 30-day enterprise trial • White-label available</p>
        </div>

        {/* Optional Demo Video Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="glass-light-card border-slate-200/50 shadow-xl overflow-hidden">
            <CardContent className="p-0 relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 rounded-full p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 glass-light px-3 py-1 rounded text-slate-700 text-sm font-medium">
                Watch Demo
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl md:text-4xl font-bold text-slate-400 opacity-60">
                  SERP Strategist Demo
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
