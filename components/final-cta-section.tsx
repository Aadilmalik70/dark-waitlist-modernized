"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export function FinalCtaSection() {
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
        setMessage("You're on the list. We'll reach out soon with access details.")
        setEmail("")
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError("You're already on the waitlist. We'll notify you when it's ready.")
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
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-gray-900">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Stop managing SEO.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Start growing autonomously.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join the waitlist for early access to SERP Strategists. Be among the first to deploy an autonomous search growth agent on your website.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 flex-1"
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-6 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap"
              >
                {loading ? "Joining..." : "Get Early Access"}
                {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
            {(success || error) && (
              <div className="mt-3 text-sm">
                {success && <span className="text-green-400">{message}</span>}
                {error && <span className="text-red-400">{error}</span>}
              </div>
            )}
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span>Free during early access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
