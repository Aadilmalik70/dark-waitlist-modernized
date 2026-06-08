"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { 
  createGradientText, 
  createAITechButton, 
  createGlassCard,
  responsiveClasses 
} from "@/lib/ai-tech-utils";
import { cn } from "@/lib/utils";

export default function HeroSectionModernAI() {
  const words = [
    {
      text: "The",
    },
    {
      text: "First",
    },
    {
      text: "SEO",
    },
    {
      text: "Platform",
    },
    {
      text: "Built",
    },
    {
      text: "on",
    },
    {
      text: "Google's",
      className: createGradientText("quantum"),
    },
    {
      text: "Native",
      className: createGradientText("neural"),
    },
    {
      text: "APIs",
      className: createGradientText("ai"),
    },
  ];

  const description = "Generate AI-optimized content blueprints in 21 seconds using Google's Custom Search, Knowledge Graph, and Gemini APIs — not scraped data like traditional tools.";

  return (
    <div className={cn(
      responsiveClasses.hero.container,
      "bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    )}>
      {/* Background Effects */}
      <BackgroundBeams className="opacity-30" />
      
      {/* Neural Mesh Background */}
      <div className="absolute inset-0 bg-neural-mesh opacity-20" />
      <div className="absolute inset-0 bg-quantum-mesh opacity-15" />
      
      {/* Content Container */}
      <div className={responsiveClasses.hero.content}>
        
        {/* Main Heading with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20"
        >
          <TypewriterEffect words={words} className={responsiveClasses.hero.title} />
        </motion.div>

        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative z-20 mt-8"
        >
          <TextGenerateEffect
            words={description}
            className={cn(
              responsiveClasses.hero.subtitle,
              "text-slate-600 dark:text-slate-300 max-w-4xl mx-auto"
            )}
          />
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative z-20 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <div className={createGlassCard("light", "neural", "p-4 text-center")}>
            <div className={cn("text-2xl font-bold", createGradientText("neural"))}>
              21s
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Blueprint Generation
            </div>
          </div>
          <div className={createGlassCard("light", "quantum", "p-4 text-center")}>
            <div className={cn("text-2xl font-bold", createGradientText("quantum"))}>
              100%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Google Native Data
            </div>
          </div>
          <div className={createGlassCard("light", "ai", "p-4 text-center")}>
            <div className={cn("text-2xl font-bold", createGradientText("ai"))}>
              80%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Lower Cost
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className={cn(responsiveClasses.hero.cta, "relative z-20")}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className={createAITechButton("neural", "lg", 
                "group hover:scale-105 transform transition-all duration-300"
              )}
            >
              <span className={createGradientText("neural", "group-hover:from-white group-hover:via-white group-hover:to-white")}>
                Start Free Trial
              </span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              className={createAITechButton("quantum", "lg", 
                "group hover:scale-105 transform transition-all duration-300"
              )}
            >
              <span className="text-slate-700 dark:text-slate-200 group-hover:text-white">
                Watch Demo
              </span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="relative z-20 mt-12"
        >
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Trusted by 500+ marketing teams worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {/* Google APIs Badge */}
              <div className={createGlassCard("light", "quantum", "px-4 py-2 flex items-center gap-2")}>
                <div className="w-6 h-6 bg-gradient-to-r from-quantum-500 to-quantum-600 rounded-full" />
                <span className="text-sm font-medium">Google APIs</span>
              </div>
              
              {/* Enterprise Ready Badge */}
              <div className={createGlassCard("light", "tech", "px-4 py-2 flex items-center gap-2")}>
                <div className="w-6 h-6 bg-gradient-to-r from-tech-500 to-tech-600 rounded-full" />
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              
              {/* AI Powered Badge */}
              <div className={createGlassCard("light", "ai", "px-4 py-2 flex items-center gap-2")}>
                <div className="w-6 h-6 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full" />
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 3.0 }}
          className="relative z-20 mt-20 max-w-5xl mx-auto"
        >
          <div className={createGlassCard("medium", "neural", "p-6 relative overflow-hidden")}>
            {/* Glowing border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-neural-500/20 via-quantum-500/20 to-ai-500/20 animate-gradient-x opacity-50" />
            
            <div className="relative bg-white/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-sm">
              {/* Mock Browser UI */}
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="ml-4 text-sm text-slate-600 dark:text-slate-400">
                    serpstrategist.com - AI Content Blueprint Generator
                  </div>
                </div>
              </div>
              
              {/* Mock Content */}
              <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className={cn("text-4xl font-bold mb-4", createGradientText("neural"))}>
                    Interactive Demo
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Experience the power of Google's native APIs
                  </div>
                  <div className="mt-6 animate-pulse">
                    <div className="w-32 h-2 bg-gradient-to-r from-neural-400 to-quantum-400 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 w-2 h-32 bg-gradient-to-b from-transparent via-neural-400 to-transparent opacity-30 hidden lg:block" />
      <div className="absolute top-1/4 right-4 w-2 h-32 bg-gradient-to-b from-transparent via-quantum-400 to-transparent opacity-30 hidden lg:block" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-ai-400 to-transparent opacity-30" />
    </div>
  );
}