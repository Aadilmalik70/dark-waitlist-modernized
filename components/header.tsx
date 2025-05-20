"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

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
      className={`border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? "border-gray-800 bg-gray-950/90 backdrop-blur-md shadow-lg shadow-purple-900/5" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="text-purple-400">SERP</span>
              <span className="text-cyan-400">Strategist</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">
              Pricing
            </a>
            <a href="#waitlist">
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:scale-105 transform duration-200"
              >
                Join Waitlist
              </Button>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-gray-800/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-gray-800/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-gray-800/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#waitlist" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
