"use client"

import { motion } from "framer-motion"
import { Search, FileText, Link2, Code, TrendingUp, Globe, Sparkles, Target } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Deep SERP Intelligence",
    description: "Continuously monitors search result changes, featured snippets, People Also Ask, and AI overviews to find the exact content structure that wins.",
    category: "SEO",
  },
  {
    icon: Globe,
    title: "GEO Optimization",
    description: "Analyzes how generative engines cite and summarize content. Structures your pages for maximum visibility in AI-powered search experiences.",
    category: "GEO",
  },
  {
    icon: FileText,
    title: "Content Generation & Optimization",
    description: "Creates new pages and optimizes existing content based on competitive analysis, intent mapping, and topical authority gaps.",
    category: "Execution",
  },
  {
    icon: Link2,
    title: "Internal Linking Automation",
    description: "Maps your site architecture and builds internal link structures that distribute authority and improve crawlability automatically.",
    category: "Execution",
  },
  {
    icon: Code,
    title: "Technical SEO Fixes",
    description: "Identifies and resolves technical issues — schema markup, meta tags, canonical URLs, crawl errors — without requiring developer tickets.",
    category: "Execution",
  },
  {
    icon: Target,
    title: "Keyword & Intent Mapping",
    description: "Goes beyond keyword volume. Maps search intent clusters to content opportunities and prioritizes by business impact potential.",
    category: "SEO",
  },
  {
    icon: TrendingUp,
    title: "Rank Tracking & Attribution",
    description: "Tracks every change the agent makes and correlates it with ranking movements, traffic changes, and conversion impact.",
    category: "Analytics",
  },
  {
    icon: Sparkles,
    title: "AI Citation Tracking",
    description: "Monitors when and how AI systems reference your content. Measures your visibility across ChatGPT, Gemini, Perplexity, and AI search modes.",
    category: "GEO",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-medium text-indigo-700 mb-5">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Everything your search growth needs.{" "}
              <span className="gradient-text">Nothing it doesn't.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A complete system for SEO and GEO — from research through execution, with built-in measurement at every step.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                  <feature.icon className="w-4.5 h-4.5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100">
                  {feature.category}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
