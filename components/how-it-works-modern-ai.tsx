"use client";

import { Timeline } from "@/components/ui/timeline";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export function HowItWorksModernAI() {
  const processSteps = [
    {
      title: "Step 1",
      content: (
        <div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 mb-8"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Input Your Target Keywords
                </h4>
                <TextGenerateEffect 
                  words="Simply enter your target keywords, competitor URLs, or business description. Our AI analyzes Google's search landscape in real-time using official APIs."
                  className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed"
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30">
                    <span className="text-sm font-medium">Target Keywords</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
                    <span className="text-sm font-medium">Competitor Analysis</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full border border-cyan-500/30">
                    <span className="text-sm font-medium">Business Context</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2", 
      content: (
        <div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 mb-8"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AI Analyzes Google Data
                </h4>
                <TextGenerateEffect 
                  words="Our advanced AI processes live Google Search Console data, Google Knowledge Graph, and search trends to understand ranking patterns and opportunities."
                  className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed"
                />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl">
                    <div className="text-blue-400 font-semibold text-sm mb-2">Search Console</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Real-time performance data</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl">
                    <div className="text-cyan-400 font-semibold text-sm mb-2">Knowledge Graph</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Entity relationships</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-teal-500/10 to-teal-600/5 border border-teal-500/20 rounded-xl">
                    <div className="text-teal-400 font-semibold text-sm mb-2">Search Trends</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Demand patterns</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 mb-8"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  Generate Strategic Blueprint
                </h4>
                <TextGenerateEffect 
                  words="In just 21 seconds, receive a comprehensive SEO strategy with prioritized keywords, content clusters, and actionable recommendations backed by Google's official data."
                  className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">Keyword Priority Matrix</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">Content Cluster Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">Technical Implementation Guide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 mb-8"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Execute & Monitor Results
                </h4>
                <TextGenerateEffect 
                  words="Track implementation progress with real-time Google Analytics integration. Get automated alerts when rankings improve and receive updated recommendations as search trends evolve."
                  className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed"
                />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold text-sm">Real-time Monitoring</span>
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Google Analytics integration</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-400 font-semibold text-sm">Smart Alerts</span>
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Performance notifications</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <Timeline data={processSteps} />
    </div>
  );
}
