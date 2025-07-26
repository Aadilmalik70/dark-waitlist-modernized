"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function WaitlistSection() {
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
    <section id="waitlist" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient with enhanced visual effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Urgency banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-full border border-red-500/30">
            <Clock className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-300 font-medium">
              Early Access Closing Soon: Only 37 Spots Left at 30% OFF
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Be Among the First to Dominate Google's AI Search Era
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join 843 forward-thinking teams already using SERP Strategist to create content that ranks in both traditional search AND AI summaries—before your competitors even know what hit them.
          </p>

          {/* Value proposition grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-all"
            >
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">137% Traffic Increase</h3>
              <p className="text-gray-400 text-sm">Average result in 90 days</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-all"
            >
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">70% Lower Cost</h3>
              <p className="text-gray-400 text-sm">Than Frase or Surfer teams</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all"
            >
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">14-Day Free Trial</h3>
              <p className="text-gray-400 text-sm">Plus 30-day guarantee</p>
            </motion.div>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-base bg-gray-900/50 border-gray-700 focus:border-purple-500 rounded-xl"
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-200 hover:scale-105"
              >
                {loading ? (
                  "Securing Your Spot..."
                ) : (
                  <>
                    Claim Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
            {/* Messages */}
            <div className="mt-4 min-h-[24px]">
              {success && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm"
                >
                  {message}
                </motion.p>
              )}
              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Instant access to beta</span>
            </div>
          </div>

          {/* Social proof ticker */}
          <div className="mt-12 p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">🔥 Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between text-gray-300"
              >
                <span>Marketing team from <span className="text-purple-400">TechCorp</span> just joined</span>
                <span className="text-gray-500">2 mins ago</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between text-gray-300"
              >
                <span>Sarah from <span className="text-blue-400">Growth Agency</span> claimed early access</span>
                <span className="text-gray-500">5 mins ago</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between text-gray-300"
              >
                <span>Content team at <span className="text-cyan-400">SaaS Startup</span> secured 5 seats</span>
                <span className="text-gray-500">12 mins ago</span>
              </motion.div>
            </div>
          </div>

          {/* Final urgency message */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-purple-300 font-medium">
              ⚡ Price increases to $119/month when we hit 1,000 users
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Current progress: 843/1,000 teams onboarded
            </p>
            <div className="w-full max-w-md mx-auto mt-3 bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: "84.3%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
