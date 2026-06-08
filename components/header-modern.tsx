"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Zap, Globe } from "lucide-react"

export function HeaderModern() {
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
          ? "border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
              </div>
              <div className="text-lg font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Outrank</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              How it works
            </Link>
            <Link href="/writing-examples" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Writing Examples
            </Link>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </a>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium"
            >
              <Globe className="mr-2 h-4 w-4" />
              Join with Google
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 text-sm font-medium"
            >
              Start for Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link 
              href="/how-it-works" 
              className="text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              href="/writing-examples" 
              className="text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Writing Examples
            </Link>
            <a 
              href="#pricing" 
              className="text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Link 
              href="/blog" 
              className="text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-t border-white/10 pt-4 space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="mr-2 h-4 w-4" />
                Join with Google
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start for Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
