"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";

export default function HeroSectionFixed() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-neutral-900">The First SEO Platform Built on </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Google's Native APIs
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Generate AI-optimized content blueprints in <span className="text-purple-600 font-semibold">21 seconds</span> using Google's Custom Search,
              Knowledge Graph, and Gemini APIs — not scraped data like traditional tools.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { value: "21s", label: "Blueprint Generation" },
              { value: "100%", label: "Google Native Data" },
              { value: "80%", label: "Lower Cost" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <HydrationSafeButton 
              variant="primary" 
              size="lg"
              className="text-lg active:scale-95"
            >
              Start Free Trial →
            </HydrationSafeButton>
            <HydrationSafeButton 
              variant="secondary" 
              size="lg"
              className="text-lg active:scale-95"
            >
              Watch Demo ▷
            </HydrationSafeButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-neutral-500 mb-6">Trusted by 500+ marketing teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { text: "Google APIs", color: "from-blue-500 to-blue-600" },
                { text: "Enterprise Ready", color: "from-green-500 to-green-600" },
                { text: "AI Powered", color: "from-purple-500 to-purple-600" }
              ].map((badge, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${badge.color} text-white rounded-full text-sm font-medium`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
