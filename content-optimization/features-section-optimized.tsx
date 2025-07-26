"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, Search, Shield, Zap, HelpCircle, BarChart3, ArrowRight, Brain, Workflow, Rocket, Users, Bot, Sparkles, Target } from "lucide-react"

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
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-blue-300 text-sm font-medium">Outperform Solo Tools Like Frase & Surfer</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            The Only SEO Platform Built for Google's AI Search Era
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            While competitors focus on traditional search, SERP Strategist helps your team dominate both classic results AND Google's AI summaries—at 35-70% lower cost.
          </p>
        </div>

        {/* NEW: Google AI Search Mode Feature - Primary Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-8 md:p-12 shadow-lg shadow-purple-900/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Master Google's AI Search Mode Before Your Competition
              </h3>
              <p className="text-gray-300 mb-6">
                70% of searches now show AI-generated summaries first. SERP Strategist is the ONLY tool that analyzes what content appears in these AI summaries, giving you the exact blueprint to get featured where it matters most.
              </p>
              <ul className="space-y-3">
                {[
                  "Analyze patterns in AI-generated search summaries",
                  "Identify the exact content structure AI favors",
                  "Get featured in AI summaries 3x more often",
                  "Stay ahead as Google's AI evolves"
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
              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400">
                  <span className="text-purple-400 font-semibold">Industry First:</span> While Frase and Surfer optimize for yesterday's search, we're building for tomorrow's AI-dominated SERPs.
                </p>
              </div>
            </div>
            <div className="relative" style={{ minHeight: 300 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
              <Image
                src="/ai-search-demo.png"
                alt="Google AI Search Mode Analysis"
                fill
                objectFit="cover"
                className="rounded-xl relative z-10"
              />
            </div>
          </div>
        </motion.div>

        {/* NEW: Team Collaboration Feature - Second Primary Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative" style={{ minHeight: 300 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl"></div>
              <Image
                src="/team-collaboration.png"
                alt="Team Collaboration Features"
                fill
                objectFit="cover"
                className="rounded-xl relative z-10"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Built for Teams, Not Solo Writers
              </h3>
              <p className="text-gray-300 mb-6">
                Unlike Frase or Surfer's single-user focus, SERP Strategist enables your entire content team to collaborate on blueprints, share insights, and maintain consistency across all content—at a fraction of the cost.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time blueprint collaboration for up to 10 team members",
                  "Shared knowledge base of successful content patterns",
                  "Role-based permissions and workflow management",
                  "35-70% more cost-effective than competitor team plans"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
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
              benefit={feature.benefit}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* NEW: Competitive Comparison Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Why Teams Switch to SERP Strategist</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-purple-400 mb-2">vs. Frase</h4>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ 65% lower cost for teams</li>
                <li>✓ AI search mode analysis</li>
                <li>✓ Real-time collaboration</li>
                <li>✓ No content limits</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-blue-400 mb-2">vs. Surfer SEO</h4>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ 70% more affordable</li>
                <li>✓ Deeper competitor analysis</li>
                <li>✓ Team workflows built-in</li>
                <li>✓ Predictive performance</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-cyan-400 mb-2">vs. MarketMuse</h4>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                <li>✓ 80% cost reduction</li>
                <li>✓ Faster blueprint generation</li>
                <li>✓ No enterprise lock-in</li>
                <li>✓ Self-serve onboarding</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a href="#waitlist">
            <motion.button 
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/20 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Join 843 Teams Getting Early Access</span>
              <ArrowRight className="w-5 h-5 inline-block" />
            </motion.button>
          </a>
          <p className="mt-4 text-sm text-gray-400">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  benefit: string
  delay: number
}

function FeatureCard({ icon, title, description, benefit, delay }: FeatureCardProps) {
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
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-sm text-purple-400 font-medium">{benefit}</p>
    </motion.div>
  )
}

const features = [
  {
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    title: "Cut Research Time by 75%",
    description: "Our AI agents analyze top-ranking content 24x faster than manual research, identifying patterns competitors miss.",
    benefit: "Save 30+ hours per month on content research"
  },
  {
    icon: <Target className="w-6 h-6 text-blue-400" />,
    title: "137% Average Traffic Increase",
    description: "Data-driven blueprints based on what actually ranks, not guesswork. Know exactly what Google's algorithms favor.",
    benefit: "Proven results from 843 beta users"
  },
  {
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    title: "Intent-Matched Blueprints",
    description: "Go beyond keywords to understand true search intent. Get the exact content structure that satisfies user needs.",
    benefit: "40% higher engagement rates"
  },
  {
    icon: <Workflow className="w-6 h-6 text-indigo-400" />,
    title: "Predictive Performance Scoring",
    description: "Know your content's ranking potential before you publish. Our AI predicts performance with 89% accuracy.",
    benefit: "Eliminate content that won't perform"
  },
  {
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    title: "Autonomous Research Agents",
    description: "Deploy AI agents that think like expert strategists, continuously learning from SERP changes and competitor moves.",
    benefit: "Stay ahead without constant monitoring"
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-400" />,
    title: "Future-Proof Your Strategy",
    description: "Built on cutting-edge AI that evolves with search engines. Your competitive edge grows stronger over time.",
    benefit: "Never fall behind algorithm updates"
  }
]
