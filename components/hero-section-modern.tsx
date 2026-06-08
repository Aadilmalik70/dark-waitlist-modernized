"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, CheckCircle, Globe, Sparkles } from "lucide-react"
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
        setMessage(data.message || "Successfully joined! Check your email.")
        setEmail("")
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError(data.error || "You're already on our waitlist!")
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
    <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-r-none border-r-0 bg-white/5 backdrop-blur-sm border-white/10 text-white placeholder:text-white/50 focus:border-purple-400"
        disabled={loading}
      />
      <Button
        type="submit"
        className="rounded-l-none bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6"
        disabled={loading}
      >
        {loading ? "Starting..." : "Get Started"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      {(success || error) && (
        <div className="absolute mt-14 text-sm">
          {success && <span className="text-green-400">{message}</span>}
          {error && <span className="text-red-400">{error}</span>}
        </div>
      )}
    </form>
  )
}

export function HeroSectionModern() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4">
            <CardContent className="p-0 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-white/80">SEO Content Score</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300">97%</Badge>
            </CardContent>
          </Card>
        </div>
        
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4">
            <CardContent className="p-0 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-white/80">Personal insights</span>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4">
            <CardContent className="p-0 flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white/80">50k+ Articles Created</span>
              <div className="flex -space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white/20" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-40 right-40 animate-float" style={{ animationDelay: "0.5s" }}>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4">
            <CardContent className="p-0 flex items-center gap-2">
              <Globe className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-white/80">Competitors analysis</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <Badge 
            variant="outline" 
            className="bg-white/5 backdrop-blur-sm border-white/20 text-white px-4 py-2 text-sm font-medium"
          >
            <Sparkles className="mr-2 h-4 w-4 text-purple-400" />
            Content Creation 
            <span className="mx-2 text-red-400 font-bold">IS HAAARD!</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white mb-2">Grow Organic Traffic</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            on Auto-Pilot
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get traffic and outrank competitors with Backlinks & SEO-optimized content while you sleep.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold">
            <Globe className="mr-2 h-5 w-5" />
            Join with Google
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex -space-x-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white/20 flex items-center justify-center">
                <Star className="h-4 w-4 text-white fill-white" />
              </div>
            ))}
          </div>
          <span className="text-white/80 ml-2">50k+ Articles Created</span>
        </div>

        {/* Email Subscription */}
        <div className="relative">
          <EmailSubscribeForm />
        </div>

        {/* Video Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-0 relative aspect-video">
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-6"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
                0:02 / 1:38
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-white opacity-80">
                  IS HAAARD!
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
