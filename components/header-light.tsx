"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Zap, Globe } from "lucide-react"

export function HeaderLight() {
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
          ? "border-slate-200 glass-light shadow-lg" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
              </div>
              <div className="text-lg font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SERP</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategist</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/enterprise" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Enterprise
            </Link>
            <Link href="/agencies" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Agencies
            </Link>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Pricing
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/demo">
              <Button 
                variant="ghost" 
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium"
              >
                Demo
              </Button>
            </Link>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Start Trial
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-light border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link 
              href="/features" 
              className="text-slate-600 hover:text-slate-900 transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/enterprise" 
              className="text-slate-600 hover:text-slate-900 transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link 
              href="/agencies" 
              className="text-slate-600 hover:text-slate-900 transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agencies
            </Link>
            <a 
              href="#pricing" 
              className="text-slate-600 hover:text-slate-900 transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Link 
              href="/demo" 
              className="text-slate-600 hover:text-slate-900 transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md"
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
