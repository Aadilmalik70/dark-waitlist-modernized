"use client"

import { motion } from "framer-motion"

const integrations = [
  { name: "Google Search Console", category: "Data", description: "Real-time search performance data" },
  { name: "Google Analytics 4", category: "Data", description: "Traffic & conversion tracking" },
  { name: "WordPress", category: "CMS", description: "Direct content publishing" },
  { name: "Webflow", category: "CMS", description: "Visual site content updates" },
  { name: "GitHub", category: "Deploy", description: "Git-based content deployment" },
  { name: "Screaming Frog", category: "Crawl", description: "Technical SEO audit data" },
  { name: "Ahrefs", category: "Research", description: "Backlink & keyword intelligence" },
  { name: "Semrush", category: "Research", description: "Competitive landscape data" },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 mb-5">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Works with your existing stack.{" "}
              <span className="gradient-text">No migration required.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SERP Strategists connects to your data sources, CMS, and deployment tools — observing through APIs and executing through approved channels.
            </p>
          </motion.div>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Central agent */}
            <div className="flex justify-center mb-8">
              <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20">
                SERP Strategists Agent
              </div>
            </div>

            {/* Connection lines visual */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-gray-200" />
            </div>

            {/* Integration grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all text-center"
                >
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                    {integration.category}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-500">{integration.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
