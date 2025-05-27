"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Search, FileText, Upload, BarChart3 } from "lucide-react"

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, #6366f180 1px, transparent 1px), linear-gradient(to bottom, #6366f180 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6">
            <span className="px-3 py-1 text-blue-300 text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            How It Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Create content that ranks in just four simple steps with our AI-powered platform
          </p>
        </div>

        {/* Desktop view - Horizontal steps with animation */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep + 1) * 25}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* Step circles */}
            <div className="flex justify-between relative">
              {[0, 1, 2, 3].map((step) => (
                <div key={step} className="relative">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center z-10 relative ${
                      step <= activeStep 
                        ? "bg-gradient-to-br from-purple-600 to-blue-600" 
                        : "bg-gray-800"
                    }`}
                    animate={{
                      scale: step === activeStep ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: step === activeStep ? Infinity : 0,
                      repeatType: "reverse",
                    }}
                  >
                    {step < activeStep ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : (
                      <span className="text-white font-bold text-xl">{step + 1}</span>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step content */}
          <div className="mt-16 grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm border rounded-xl p-8 text-center relative ${
                  index === activeStep 
                    ? "border-purple-500/50 shadow-lg shadow-purple-900/20" 
                    : "border-gray-800"
                }`}
                animate={{
                  opacity: index === activeStep ? 1 : 0.7,
                  y: index === activeStep ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-800/50 rounded-xl flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile view - Vertical steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative ${
                index === activeStep ? "border-l-4 border-l-purple-500" : ""
              }`}
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  index === activeStep 
                    ? "bg-gradient-to-br from-purple-600 to-blue-600" 
                    : "bg-gray-800"
                }`}>
                  {index < activeStep ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white font-bold">{index + 1}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a href="#waitlist">
            <motion.button 
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Get Started Today</span>
              <ArrowRight className="w-5 h-5 inline-block" />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Enter Your Target Keyword",
    description: "Input the keyword you want to rank for, and our AI starts analyzing top-ranking content.",
    icon: <Search className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Get Your Content Blueprint",
    description: "Receive a detailed blueprint outlining the structure, topics, and keywords for your article.",
    icon: <FileText className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Create Your Content",
    description: "Write your article following the blueprint, ensuring it's optimized for SEO from the start.",
    icon: <Upload className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Optimize & Track Results",
    description: "Use our tools to fine-tune your content and track its performance over time. See real results as your rankings improve.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />
  }
]
