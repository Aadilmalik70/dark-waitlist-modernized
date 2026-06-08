"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Zap, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`border-b transition-all duration-500 sticky top-0 z-50 ${
        isScrolled 
          ? "border-gray-800/50 bg-gray-950/95 backdrop-blur-xl shadow-2xl shadow-purple-900/10" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
              </div>
              <div className="text-xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">SERP</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">Strategist</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/features" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/enterprise" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
              <span className="relative z-10">Enterprise</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/agencies" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
              <span className="relative z-10">Agencies</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/integrations" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
              <span className="relative z-10">Integrations</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <a href="#pricing" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <div className="flex items-center space-x-3 ml-6 border-l border-gray-700/50 pl-6">
              <Link href="/demo" className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/30 group">
                <span className="relative z-10">Demo</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
              <Button 
                variant="outline" 
                className="relative border-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white hover:from-purple-500/30 hover:to-blue-500/30 backdrop-blur-sm px-6 py-2 h-10 rounded-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10 font-medium">Start Trial</span>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-purple-900/10">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            <Link 
              href="/features" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link 
              href="/enterprise" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Enterprise</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link 
              href="/agencies" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Agencies</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link 
              href="/integrations" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Integrations</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <a 
              href="#pricing" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <Link 
              href="/demo" 
              className="relative text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/30 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">Demo</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <div className="border-t border-gray-800/50 pt-4 mt-4">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
