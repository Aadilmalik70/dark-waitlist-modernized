"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-blue-300 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Everything you need to know about SERPStrategist and how it can help your content rank higher
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  delay: number
}

function FaqItem({ question, answer, delay }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <p className="text-gray-300">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

const faqs = [
  {
    question: "What is SERP Strategist?",
    answer: "SERP Strategist is an innovative AI-powered platform designed to help content teams develop data-driven content blueprints optimized for Google\'s evolving AI search summaries. It streamlines research and enhances collaboration to create more effective content strategies."
  },
  {
    question: "How does it work?",
    answer: "Our platform utilizes advanced AI agents to analyze real-time SERP data, including AI-generated summaries, to identify optimal content structures and intent. It then generates actionable blueprints that guide your team through the content creation process, fostering collaboration and efficiency."
  },
  {
    question: "Who is it for?",
    answer: "SERP Strategist is built for content teams, SEO professionals, and agencies who are looking to adapt their strategies for the AI-driven search era, enhance team collaboration, and gain a competitive advantage through data-informed content creation."
  },
  {
    question: "What makes it different from other SEO tools?",
    answer: "Unlike traditional SEO tools, SERP Strategist is specifically engineered to analyze and optimize for Google\'s AI search summaries. We also prioritize team collaboration and provide a unique agentic AI approach to content blueprint generation, offering a more holistic and future-proof solution."
  },
  {
    question: "When will it be available?",
    answer: "SERP Strategist is currently in an early access phase. We are inviting a select group of visionary teams to join our program, provide feedback, and help us refine the platform before its wider public launch. Join our waitlist to be notified of availability and exclusive early access opportunities."
  },
  {
    question: "How much does it cost?",
    answer: "Our pricing tiers are designed to provide flexible options for teams of all sizes. You can view our current early access pricing on the pricing section above. We are committed to providing exceptional value as we grow."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for our Starter and Professional tiers, allowing you to experience the core benefits of SERP Strategist firsthand. No credit card is required to start your trial."
  }
]
