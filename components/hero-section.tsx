"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Eye, Brain, Zap, BarChart3, RefreshCw, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
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
        setMessage(data.message || "You're on the list. We'll be in touch soon.");
        setEmail("");
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError(data.error || "You're already on the waitlist. We'll notify you when it's ready.");
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
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="h-12 px-4 text-sm bg-white border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all flex-1"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm shadow-blue-600/20 whitespace-nowrap text-sm"
          disabled={loading}
        >
          {loading ? "Joining..." : "Join Waitlist"}
          {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
      {(success || error) && (
        <div className="mt-3 text-sm">
          {success && <span className="text-green-600">{message}</span>}
          {error && <span className="text-red-500">{error}</span>}
        </div>
      )}
    </form>
  );
}

function AgentWorkflowVisual() {
  const steps = [
    { icon: Eye, label: "Observe", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { icon: Brain, label: "Analyze", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { icon: Zap, label: "Plan", color: "bg-violet-50 text-violet-600 border-violet-200" },
    { icon: Play, label: "Execute", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { icon: BarChart3, label: "Evaluate", color: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200" },
    { icon: GraduationCap, label: "Learn", color: "bg-pink-50 text-pink-600 border-pink-200" },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-lg"
    >
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Agent Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-xs text-gray-400">Continuous</span>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-3 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${step.color}`}
            >
              <step.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="mt-5 space-y-2.5">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1.2 }}
            className="flex items-center gap-3 p-2.5 bg-green-50 rounded-lg border border-green-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-green-700">Identified 12 high-impact opportunities</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1.4 }}
            className="flex items-center gap-3 p-2.5 bg-blue-50 rounded-lg border border-blue-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs text-blue-700">Published 3 optimized pages to production</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1.6 }}
            className="flex items-center gap-3 p-2.5 bg-indigo-50 rounded-lg border border-indigo-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs text-indigo-700">+34% organic visibility this month</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50 via-indigo-50/50 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-700">Autonomous Search Growth Agent</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-gray-900 mb-5"
            >
              Your website grows itself.{" "}
              <span className="gradient-text">SEO + GEO on autopilot.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              SERP Strategists is an autonomous agent that observes your site, identifies search opportunities, plans improvements, executes changes, and continuously learns — so your organic traffic compounds without manual effort.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <EmailSubscribeForm />
              <p className="mt-3 text-xs text-gray-500">No credit card required. Early access is free.</p>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center lg:justify-end">
            <AgentWorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
