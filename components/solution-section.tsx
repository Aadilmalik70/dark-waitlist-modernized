"use client"

import { motion } from "framer-motion"
import { Eye, Brain, Zap, Play, BarChart3, GraduationCap, ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    icon: Eye,
    title: "Observe",
    description: "Monitors your website, competitors, and search landscape continuously. Detects changes in rankings, new SERP features, and emerging content gaps.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Processes search data, crawl results, and competitor strategies to identify the highest-impact opportunities for organic growth.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
  },
  {
    icon: Zap,
    title: "Plan",
    description: "Creates prioritized action plans with specific content briefs, technical fixes, and optimization targets — ranked by expected impact.",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
  },
  {
    icon: Play,
    title: "Execute",
    description: "Implements approved changes directly to your site — content updates, metadata fixes, internal linking, schema markup — through connected tools.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    icon: BarChart3,
    title: "Evaluate",
    description: "Measures the impact of every change against baseline metrics. Tracks rankings, traffic, click-through rates, and AI citation performance.",
    color: "from-fuchsia-500 to-fuchsia-600",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
    textColor: "text-fuchsia-700",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Uses outcome data to refine its strategy over time. What worked gets amplified. What didn't gets dropped. The system compounds its own intelligence.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-700",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 mb-5">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              One agent. Six continuous loops.{" "}
              <span className="gradient-text">Compounding growth.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SERP Strategists runs an autonomous loop that observes, analyzes, plans, executes, evaluates, and learns — turning your search presence into a self-improving system.
            </p>
          </motion.div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-xs font-mono text-gray-300 font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              
              <div className={`w-10 h-10 rounded-lg ${step.bgColor} border ${step.borderColor} flex items-center justify-center mb-4`}>
                <step.icon className={`w-5 h-5 ${step.textColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Flow connector */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center mt-10 gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 font-medium">Then the cycle repeats — automatically</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
