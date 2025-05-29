"use client"

import { Card } from "@/components/ui/card"
import { QuoteIcon, Star, ChevronLeft, ChevronRight } from "lucide-react"
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
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-purple-500 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-500 opacity-20 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-30 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Innovators Are Building the Future with SERP Strategist
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join hundreds of content creators who are already seeing results with our innovative AI-powered approach to deep research and content strategy.
          </p>
        </div>

        {/* Desktop view - Featured testimonial with carousel */}
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
              </div>
              <div className="md:col-span-3">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="#EAB308" />
                  ))}
                </div>
                <QuoteIcon className="w-12 h-12 text-purple-500/30 mb-6" />
                <p className="text-gray-300 mb-8 text-lg italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                <div>
                  <h4 className="font-semibold text-xl text-white mb-1">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  <p className="text-purple-400 mt-2 text-sm">{testimonials[activeIndex].result}</p>
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
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                result={testimonial.result}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  result?: string
}

function TestimonialCard({ quote, name, role, result }: TestimonialCardProps) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 p-6 rounded-xl">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500" fill="#EAB308" />
        ))}
      </div>
      <QuoteIcon className="w-8 h-8 text-purple-500/30 mb-4" />
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mr-3"></div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          {result && <p className="text-purple-400 text-xs mt-1">{result}</p>}
        </div>
      </div>
    </Card>
  )
}

const testimonials = [
  {
    quote: "The depth of research in these blueprints is unlike anything else. Our content planning is faster and far more strategic. SERP Strategist's agentic approach finds opportunities other tools completely miss.",
    name: "Sarah Johnson",
    role: "Content Strategy Director, TechInnovate",
    result: "Reduced research time by 75%, achieved top 3 ranking for 12 competitive keywords",
    image: "/t1.jpg"
  },
  {
    quote: "Finally, a tool that thinks like an expert strategist. The AI agents don't just scrape data - they understand context and competitive dynamics in ways that have revolutionized our content approach.",
    name: "Marcus Chen",
    role: "SEO Lead, GrowthTech Solutions",
    result: "Identified 23 new content angles, outranked 3 major competitors",
    image: "/t3.jpg"
  },
  {
    quote: "SERP Strategist's agentic workflow is a game-changer for competitive niches. The deep research capabilities help us understand not just what to write, but why it will work. It's like having a team of expert strategists.",
    name: "Dr. Emily Rodriguez",
    role: "Content Innovation Lead, ScaleUp Media",
    result: "Achieved 5 featured snippets, 89% improvement in organic visibility",
    image: "/t2.jpg"
  }
]

const stats = [
  { value: "500+", label: "Innovators Joined" },
  { value: "10,000+", label: "Content Blueprints Generated" },
  { value: "87%", label: "Average Ranking Improvement" },
  { value: "4.9/5", label: "User Satisfaction" }
]
