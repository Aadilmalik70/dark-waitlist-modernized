"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, Search, Shield, Zap, HelpCircle, BarChart3, ArrowRight, Brain, Workflow, Rocket } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-blue-300 text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Where Deep Research Meets Autonomous Strategy
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our innovative AI agents don't just scrape data; they analyze, strategize, and build the foundation for content that wins.
          </p>
        </div>

        {/* Featured highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Agentic SERP Analysis & Competitor Dissection</h3>
              <p className="text-gray-300 mb-6">
                Go beyond simple keyword matching. Our AI agents meticulously dissect top-ranking content, identifying underlying strategies, semantic patterns, and hidden opportunities your competitors miss. Understand why they rank, not just what they cover.
              </p>
              <ul className="space-y-3">
                {[
                  "Deep analysis of competitor content structures & angles",
                  "Identification of semantic gaps and topic clusters",
                  "Uncovering nuanced search intent beyond keywords"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative" style={{ minHeight: 300 }}>
              <Image
                src="/dummy.png"
                alt="Feature Illustration"
                fill
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a href="#waitlist">
            <motion.button 
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Explore Blueprint Examples</span>
              <ArrowRight className="w-5 h-5 inline-block" />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 hover:translate-y-[-4px] group"
    >
      <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-900/30 transition-all duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

const features = [
  {
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    title: "Intelligent Content Blueprint Generation",
    description: "Receive more than just an outline. Get a strategic blueprint crafted by AI agents, detailing optimal structure, headings (H1-H6), key questions to answer, internal linking suggestions, and targeted SERP feature opportunities (Featured Snippets, PAA, etc.)."
  },
  {
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
    title: "The Agentic Workflow Advantage",
    description: "SERP Strategist initiates an autonomous research flow, simulating expert analysis at scale. This unique agentic approach ensures your blueprints are based on comprehensive, multi-faceted insights, not just surface-level data points."
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    title: "Foundation for Autonomous Content",
    description: "Today, master your content blueprints. Tomorrow, leverage the full power of our AI agents for the entire content lifecycle – from deep research to autonomous publishing. SERP Strategist is your first step towards truly agentic content creation."
  }
]
