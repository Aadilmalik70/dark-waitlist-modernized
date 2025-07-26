"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteIcon, Star, ChevronLeft, ChevronRight, TrendingUp, Users, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 z-0"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Join a Community of Visionary Content Strategists
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We're building SERP Strategist to empower content teams like yours to navigate and conquer the complexities of AI-driven search. We believe in a future where content strategy is precise, collaborative, and always ahead of the curve.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-4">
            As an early-stage product, we're actively seeking forward-thinking teams to join our early access program. This is an opportunity to directly influence the development of SERP Strategist, provide feedback, and gain a competitive edge in the evolving digital landscape.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.a 
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/20 text-lg">
              Be Part of the Future: Join Our Early Access Program
            </Button>
          </motion.a>
        </div>
      </div>
    </section>
  )
}





const stats = [
  { 
    value: "843", 
    label: "Teams Onboarded", 
    context: "In just 3 months",
    icon: <Users className="w-6 h-6 text-white" />
  },
  { 
    value: "137%", 
    label: "Avg Traffic Increase", 
    context: "Within 90 days",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  },
  { 
    value: "75%", 
    label: "Time Saved", 
    context: "On content research",
    icon: <Clock className="w-6 h-6 text-white" />
  },
  { 
    value: "89%", 
    label: "Prediction Accuracy", 
    context: "For ranking potential",
    icon: <Target className="w-6 h-6 text-white" />
  }
]
