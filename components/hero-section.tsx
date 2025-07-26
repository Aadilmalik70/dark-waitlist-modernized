"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useState } from "react"

function EmailSubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setMessage(data.message || "Welcome to the future of content strategy! Check your email for exclusive insights.");
        setEmail("");
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError(data.error || "You're already on our waitlist - we'll notify you first when we launch!");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-0">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="h-12 sm:h-14 px-6 text-base bg-gray-900/50 border-gray-700 rounded-t-xl sm:rounded-l-xl sm:rounded-r-none sm:rounded-t-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all flex-1"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 rounded-b-xl sm:rounded-l-none sm:rounded-r-xl sm:rounded-b-xl whitespace-nowrap"
          disabled={loading}
        >
          {loading ? "Joining..." : "Join the Waitlist for Early Access"}
        </Button>
      </div>
      {(success || error) && (
        <div className="mt-3 text-sm text-center">
          {success && <span className="text-green-400">{message}</span>}
          {error && <span className="text-red-400">{error}</span>}
        </div>
      )}
    </form>
  );
}

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-blue-500 opacity-50 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-indigo-500 opacity-70 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* New: Urgency banner */}
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-purple-500/30">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">
              Join the SERP Strategist Early Access Program
            </span>
          </div>

          {/* Updated headline with quantified benefit */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight max-w-5xl">
            Future-Proof Your Content Strategy: Master Google's AI Search with SERP Strategist.
          </h1>

          {/* Updated subheadline addressing Google AI and team collaboration */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
            SERP Strategist empowers content teams to adapt and thrive in the era of AI-powered search. Our agentic AI analyzes real-time search trends and AI summaries to generate data-driven content blueprints, helping your team create highly relevant and effective content.
          </p>

          {/* New: Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Built for Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span>35-70% Lower Cost</span>
            </div>
          </div>

          {/* Email subscription form with enhanced CTA */}
          <EmailSubscribeForm />
          
          {/* Supporting Text */}
          <div className="mt-16 text-center text-gray-400 text-sm max-w-2xl mx-auto">
            <p>Be among the first to explore the future of AI-powered content strategy.</p>
            <p>Help shape the development of a tool designed for the next era of search.</p>
            <p>No credit card required for early access. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
