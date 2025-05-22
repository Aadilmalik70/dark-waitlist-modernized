"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setLoading(true)
      setErrorMessage("")
      
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Track the conversion if analytics is available
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'sign_up', {
              'event_category': 'engagement',
              'event_label': 'waitlist'
            });
          }
          
          setSubmitted(true)
          setEmail("")
        } else {
          setErrorMessage(data.error || "Something went wrong. Please try again.")
        }
      } catch (error) {
        console.error("Error submitting email:", error)
        setErrorMessage("An error occurred. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <section id="waitlist" className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-gray-950 to-blue-950/30 z-0"></div>

      {/* Enhanced animated particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-blue-500 opacity-50 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-indigo-500 opacity-70 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 left-1/5 w-4 h-4 rounded-full bg-purple-600 opacity-30 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 rounded-full bg-blue-600 opacity-40 animate-pulse" style={{ animationDelay: "0.9s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Limited Early Access</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
            Join the Future of Content Strategy
          </h2>

          <p className="text-gray-300 max-w-2xl text-lg mb-8">
            Be among the first to access SERPStrategist and transform how you create content that ranks. Early adopters
            receive exclusive benefits and special launch pricing.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-900/50 border-gray-800 text-gray-100 h-14 pl-4 pr-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="mr-2">Join Waitlist</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>

              {errorMessage && (
                <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
              )}

              <p className="mt-3 text-gray-400 text-sm">We respect your privacy. No spam, ever.</p>
            </form>
          ) : (
            <div className="w-full max-w-md bg-gray-900/50 border border-gray-800 rounded-xl p-8 flex flex-col items-center transform transition-all duration-500 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-900/10">
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-gray-300 text-center">
                Thank you for joining our waitlist. We'll notify you when early access is available.
              </p>
            </div>
          )}

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Early Adopters</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
              <div className="text-gray-400 text-sm">Launch Discount</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400 mb-1">14 Days</div>
              <div className="text-gray-400 text-sm">Until Launch</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl"></div>
    </section>
  )
}
