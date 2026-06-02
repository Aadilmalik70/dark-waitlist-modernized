"use client"

import { motion } from "framer-motion"
import { Rocket, Building2, PenTool, Users } from "lucide-react"

const useCases = [
  {
    icon: Rocket,
    title: "New Websites",
    description: "Launch with a search-first strategy. The agent builds topical authority from day one — structuring your content, internal links, and metadata before competitors notice you.",
    audience: "Startups & new products",
  },
  {
    icon: PenTool,
    title: "Content Sites & Publishers",
    description: "Scale content production without scaling headcount. The agent identifies gaps, creates briefs, optimizes existing pages, and measures what actually moves rankings.",
    audience: "Media & content teams",
  },
  {
    icon: Building2,
    title: "Founders & Solo Operators",
    description: "Get enterprise-level SEO execution without an enterprise team. Set your goals, approve the plan, and let the agent handle the rest while you focus on your product.",
    audience: "Solo founders & indie makers",
  },
  {
    icon: Users,
    title: "Growth Teams",
    description: "Integrate autonomous search growth into your existing stack. The agent works alongside your CMS, analytics, and deployment tools — extending your team's capacity.",
    audience: "Marketing & growth engineers",
  },
]

export function UseCasesSection() {
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-xs font-medium text-purple-700 mb-5">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Built for teams that want{" "}
              <span className="gradient-text">search growth without overhead</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're launching a new site or scaling an existing one, SERP Strategists adapts to your stage and goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{useCase.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{useCase.description}</p>
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs text-gray-500 font-medium">
                    {useCase.audience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
