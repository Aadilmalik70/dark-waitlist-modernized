"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteIcon, Star, ChevronLeft, ChevronRight, TrendingUp, Users, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">Real Results from Real Teams</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            843 Teams Are Already Dominating Their SERPs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From startups to agencies, teams are switching from Frase, Surfer, and MarketMuse to achieve better results at lower costs.
          </p>
        </div>

        {/* Desktop view - Featured testimonial with enhanced metrics */}
        <div className="hidden md:block">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>
                    <Image 
                      src={testimonials[activeIndex].image || "/placeholder-user.jpg"} 
                      alt={testimonials[activeIndex].name}
                      width={300}
                      height={300}
                      className="object-cover h-full w-full opacity-90 mix-blend-luminosity"
                    />
                  </div>
                </div>
                {/* Company logo */}
                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-sm">Currently at</p>
                  <p className="text-white font-semibold">{testimonials[activeIndex].company}</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="#EAB308" />
                  ))}
                </div>
                <QuoteIcon className="w-12 h-12 text-purple-500/30 mb-6" />
                <p className="text-gray-300 mb-8 text-lg italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                
                {/* Enhanced metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {testimonials[activeIndex].metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-xl text-white mb-1">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-sm text-purple-400">Previously used: {testimonials[activeIndex].previousTool}</span>
                    <span className="text-sm text-green-400">→ Switched to SERP Strategist</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation controls */}
          <div className="flex justify-center space-x-4">
            <motion.button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 scale-125" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile view - Testimonial cards */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced stats section with more context */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">The Numbers Speak for Themselves</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.context}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.a 
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/20 text-lg">
              Join These Successful Teams
            </Button>
          </motion.a>
          <p className="mt-4 text-sm text-gray-400">
            See why teams are switching from {" "}
            <span className="text-purple-400">Frase</span>, {" "}
            <span className="text-blue-400">Surfer</span>, and {" "}
            <span className="text-cyan-400">MarketMuse</span>
          </p>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  previousTool: string
  metrics: { value: string; label: string }[]
}

function TestimonialCard({ quote, name, role, company, previousTool, metrics }: TestimonialCardProps) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 p-6 rounded-xl">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500" fill="#EAB308" />
        ))}
      </div>
      <QuoteIcon className="w-8 h-8 text-purple-500/30 mb-4" />
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      
      {/* Metrics grid for mobile */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {metrics.slice(0, 2).map((metric, idx) => (
          <div key={idx} className="bg-gray-800/50 rounded p-2 text-center">
            <div className="text-lg font-bold text-purple-400">{metric.value}</div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mr-3"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
          <p className="text-xs text-green-400 mt-1">Switched from {previousTool}</p>
        </div>
      </div>
    </Card>
  )
}

const testimonials = [
  {
    quote: "After switching from Frase, our content production speed increased by 3x while maintaining quality. The team collaboration features alone justify the switch - we're saving $2,400/year and getting better results. The AI search mode insights have been a game-changer for our visibility.",
    name: "Sarah Johnson",
    role: "Content Strategy Director",
    company: "TechInnovate Solutions",
    previousTool: "Frase",
    image: "/t1.jpg",
    metrics: [
      { value: "75%", label: "Less Research Time" },
      { value: "137%", label: "Traffic Increase" },
      { value: "$2.4k", label: "Annual Savings" },
      { value: "12", label: "Top 3 Rankings" }
    ]
  },
  {
    quote: "We tried Surfer SEO for months but the single-user limitations killed our workflow. SERP Strategist lets our entire team collaborate in real-time. Plus, being featured in Google's AI summaries has transformed our organic reach - something Surfer couldn't even analyze.",
    name: "Marcus Chen",
    role: "SEO Team Lead",
    company: "GrowthTech Agency",
    previousTool: "Surfer SEO",
    image: "/t3.jpg",
    metrics: [
      { value: "5x", label: "Team Efficiency" },
      { value: "23", label: "New Angles Found" },
      { value: "89%", label: "AI Visibility" },
      { value: "3", label: "Competitors Beat" }
    ]
  },
  {
    quote: "MarketMuse was powerful but overkill for our team - and the price was insane. SERP Strategist gives us everything we need at 80% less cost. The predictive scoring helps us focus only on content that will actually rank. Best decision we've made this year.",
    name: "Dr. Emily Rodriguez",
    role: "Head of Content Innovation",
    company: "ScaleUp Media",
    previousTool: "MarketMuse",
    image: "/t2.jpg",
    metrics: [
      { value: "80%", label: "Cost Reduction" },
      { value: "5", label: "Featured Snippets" },
      { value: "89%", label: "Prediction Accuracy" },
      { value: "2.1x", label: "ROI Improvement" }
    ]
  },
  {
    quote: "As an agency, we needed a tool that could handle multiple client projects without breaking the bank. SERP Strategist's agency plan costs less than what we paid for 2 Frase licenses, and the white-label reports save us hours every week.",
    name: "Alex Thompson",
    role: "Agency Founder",
    company: "Digital Growth Partners",
    previousTool: "Multiple Tools",
    image: "/t4.jpg",
    metrics: [
      { value: "15", label: "Client Projects" },
      { value: "70%", label: "Tool Cost Savings" },
      { value: "8hrs", label: "Weekly Time Saved" },
      { value: "4.9", label: "Client Satisfaction" }
    ]
  }
]

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
