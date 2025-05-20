"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FileText, Search, Shield, Zap, HelpCircle, BarChart3, ArrowRight } from "lucide-react"

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
            The Smarter Way to Create Content That Ranks
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Stop guessing what will rank. Our AI-powered platform gives you the exact blueprint for content that
            dominates search results.
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
                <FileText className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">AI-Generated Content Blueprints</h3>
              <p className="text-gray-300 mb-6">
                Get detailed, data-driven content outlines based on what's already ranking for your target keywords. 
                Know exactly what topics, headings, and questions to include for maximum search visibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive topic coverage analysis",
                  "Semantic keyword mapping",
                  "SERP feature optimization opportunities",
                  "Content structure recommendations"
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">Content Blueprint</div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-full"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-800 rounded w-4/5"></div>
                  <div className="mt-6 h-5 bg-purple-900/50 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-800 rounded w-full"></div>
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  <div className="mt-6 h-5 bg-purple-900/50 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-800 rounded w-full"></div>
                </div>
              </div>
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
              <span className="mr-2">Explore All Features</span>
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
    icon: <Search className="w-6 h-6 text-blue-400" />,
    title: "Competitor Content Dissection",
    description: "Analyze what's working for top-ranking content in your niche. Identify patterns, gaps, and opportunities to create something better."
  },
  {
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    title: "Intent-Matched Format Recommendations",
    description: "Create the right type of content for each keyword. Our AI identifies search intent and recommends the optimal content format."
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "SERP Feature Optimization",
    description: "Capture valuable SERP real estate with targeted optimization for featured snippets, People Also Ask boxes, and other SERP features."
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-blue-400" />,
    title: "Question-to-Content Mapping",
    description: "Never miss a relevant question your audience is asking. Our AI identifies and maps all related questions to ensure comprehensive content."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: "Predictive Content Performance",
    description: "Know how your content will perform before you publish. Our AI predicts ranking potential and provides actionable recommendations."
  }
]
