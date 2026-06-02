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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">SERP Strategists</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#capabilities" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Capabilities
            </a>
            <a href="#integrations" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Integrations
            </a>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2 rounded-lg shadow-sm">
                Join Waitlist
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#solution" className="text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#capabilities" className="text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Capabilities
            </a>
            <a href="#integrations" className="text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Integrations
            </a>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <a href="#cta" className="bg-gray-900 text-white py-2.5 px-4 rounded-lg text-center text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
