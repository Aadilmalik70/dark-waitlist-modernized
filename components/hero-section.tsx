import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-blue-500 opacity-50 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-indigo-500 opacity-70 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">AI-Powered Content Strategy</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight max-w-4xl">
            Create Content That Dominates Search Results
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
            The AI Content Strategist that analyzes top-ranking content, creates data-driven blueprints, and helps you
            outrank your competition with less effort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#waitlist">
              <Button className="h-14 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-105 transform">
                <span className="mr-2">Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <a href="#how-it-works">
              <Button
                variant="outline"
                className="h-14 px-8 rounded-xl border-purple-500 text-cyan-400 hover:bg-purple-900/20 hover:text-white hover:scale-105 transform transition-all duration-200"
              >
                See How It Works
              </Button>
            </a>
          </div>
          
          {/* Added stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Early Adopters</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
              <div className="text-gray-400 text-sm">Launch Discount</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400 mb-1">14 Days</div>
              <div className="text-gray-400 text-sm">Until Launch</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
