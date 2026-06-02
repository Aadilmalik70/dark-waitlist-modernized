"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Target, BarChart3 } from "lucide-react"

const results = [
  {
    icon: TrendingUp,
    metric: "3–5x",
    label: "Organic traffic growth",
    description: "Average increase in organic sessions within 6 months of continuous agent operation.",
  },
  {
    icon: Clock,
    metric: "90%",
    label: "Time savings on SEO tasks",
    description: "Reduction in manual research, writing, and technical optimization hours per month.",
  },
  {
    icon: Target,
    metric: "200+",
    label: "Pages optimized per month",
    description: "Average throughput of content updates, new pages, and technical fixes executed monthly.",
  },
  {
    icon: BarChart3,
    metric: "40%",
    label: "Faster time-to-rank",
    description: "Reduction in the time from content publication to first-page ranking position.",
  },
]

export function ResultsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 mb-5">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Measurable outcomes.{" "}
              <span className="gradient-text">Not just reports.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SERP Strategists is measured by what it ships and what moves — not by how many dashboards it fills.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{result.metric}</div>
              <div className="text-sm font-medium text-gray-700 mb-2">{result.label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
