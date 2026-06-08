"use client";

import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";

export function SocialProofModernAI() {
  const successStories = [
    {
      title: "Enterprise Transformation",
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop",
    },
    {
      title: "Agency Growth",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop",
    },
    {
      title: "Startup Success",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <TextGenerateEffect 
            words="Fortune 500 companies and leading agencies trust our Google-native SEO platform to drive growth and outperform traditional tools."
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { metric: "500+", label: "Enterprise Clients" },
            { metric: "250%", label: "Average ROI Increase" },
            { metric: "80%", label: "Cost Savings vs Competitors" },
            { metric: "21s", label: "Average Blueprint Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.metric}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Success Stories
          </h3>
          <FocusCards cards={successStories} />
        </motion.div>

        {/* Detailed Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Platform Capabilities
          </h3>
          <ExpandableCardDemo />
        </motion.div>

        {/* Enterprise Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "SERP Strategist's Google-native approach delivered 3x better accuracy than Semrush. The 21-second blueprint generation saves our team 40 hours per week.",
              author: "Sarah Chen",
              title: "VP of Marketing, TechCorp Enterprise",
              gradient: "from-purple-500 to-blue-500"
            },
            {
              quote: "We replaced our $50K/year toolstack with SERP Strategist. The ROI was immediate - 250% increase in qualified leads within 90 days.",
              author: "Michael Rodriguez",
              title: "Head of SEO, Global Agency Network",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              quote: "The real-time collaboration features transformed how our distributed team works. Enterprise security gives us complete peace of mind.",
              author: "Jennifer Park",
              title: "Director of Digital Strategy, Fortune 100",
              gradient: "from-cyan-500 to-teal-500"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-2xl`} />
              <div className="relative z-10">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-purple-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <HydrationSafeButton 
            variant="primary" 
            size="lg"
            className="text-lg active:scale-95 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
          >
            Join Leading Enterprises
          </HydrationSafeButton>
        </motion.div>
      </div>
    </section>
  );
}
