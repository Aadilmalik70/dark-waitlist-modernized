"use client"

import { motion } from "framer-motion"
import { Search, Globe, Cpu, CheckCircle } from "lucide-react"

const capabilities = [
  {
    icon: Search,
    title: "SEO Automation",
    description: "Full-stack search engine optimization — from technical audits to content production — executed autonomously with human approval gates.",
    features: [
      "Keyword research & intent clustering",
      "Content creation and optimization",
      "Technical SEO fixes & monitoring",
      "Internal linking & site architecture",
    ],
    color: "blue",
  },
  {
    icon: Globe,
    title: "GEO Optimization",
    description: "Generative Engine Optimization ensures your content is structured for citation by AI search systems — not just traditional crawlers.",
    features: [
      "AI citation structure optimization",
      "Entity & knowledge graph alignment",
      "Answer-ready content formatting",
      "Multi-engine visibility tracking",
    ],
    color: "indigo",
  },
  {
    icon: Cpu,
    title: "Execution Automation",
    description: "The agent doesn't just recommend. It ships. Approved changes are pushed directly to your CMS, repository, or publishing pipeline.",
    features: [
      "Direct CMS publishing (WordPress, Webflow)",
      "Git-based content deployment",
      "Schema markup injection",
      "Meta & structured data updates",
    ],
    color: "violet",
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-xs font-medium text-violet-700 mb-5">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              SEO + GEO + Execution.{" "}
              <span className="gradient-text">One unified system.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most tools cover one piece of the puzzle. SERP Strategists handles the full lifecycle — from research to ranking — in a single autonomous loop.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, i) => {
            const colors = colorMap[cap.color]
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}>
                  <cap.icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{cap.description}</p>
                <ul className="space-y-2.5">
                  {cap.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
