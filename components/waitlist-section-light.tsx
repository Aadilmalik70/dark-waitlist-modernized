"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp, Shield, Mail } from "lucide-react"

export function WaitlistSectionLight() {
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
        setMessage("🎉 Welcome to the future of SEO! Check your email for exclusive early access details.")
        setEmail("")
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError("You're already on our VIP list! We'll notify you first when doors open.")
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
    <section id="waitlist" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-light-card border-purple-200 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Header */}
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6">
                <Mail className="mr-2 h-4 w-4" />
                Early Access
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Ready to Master the Future of SEO?
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join forward-thinking teams who are preparing for Google's AI Search era. Get early access to SERP Strategist and stay ahead of the competition.
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center justify-center gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Free Early Access</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">AI-Powered Insights</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Enterprise Security</span>
                </div>
              </div>

              {/* Email Form */}
              {!success ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 px-4 bg-white border-slate-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-slate-900 placeholder:text-slate-500 flex-1"
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                    >
                      {loading ? "Joining..." : "Get Early Access"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  {error && (
                    <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                      {error}
                    </div>
                  )}
                </form>
              ) : (
                <div className="max-w-md mx-auto mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="text-green-800 font-medium mb-2">You're In!</div>
                    <div className="text-sm text-green-700">{message}</div>
                  </div>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>500+ teams already joined</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Launch in Q2 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise-grade security</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                  Early access includes all core features, priority support, and grandfathered pricing when we officially launch. 
                  No spam, just valuable insights about the future of SEO.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
