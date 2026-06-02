"use client"

import { motion } from "framer-motion"
import { XCircle, Clock, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: XCircle,
    title: "SEO and GEO are managed separately",
    description: "Most teams run separate workflows for traditional search and generative engine optimization — doubling effort and missing compounding opportunities.",
  },
  {
    icon: Clock,
    title: "Manual execution doesn't scale",
    description: "Research, planning, writing, publishing, and monitoring are done by hand. The process is slow, error-prone, and impossible to sustain across hundreds of pages.",
  },
  {
    icon: AlertTriangle,
    title: "Dashboards report problems, they don't fix them",
    description: "Traditional SEO tools tell you what's wrong. They never actually execute the fix. The gap between insight and action stays wide.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-full text-xs font-medium text-red-700 mb-5">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Current SEO workflows are broken
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Search is evolving faster than teams can keep up. Between traditional SEO, AI-powered search results, and the sheer volume of execution required — most teams fall behind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
