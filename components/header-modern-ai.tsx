"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";

export function HeaderModernAI() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              SERPStrategist
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Features
            </Link>
            <Link 
              href="/enterprise" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Enterprise
            </Link>
            <Link 
              href="/agencies" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Agencies
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/demo" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Demo
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <HydrationSafeButton variant="primary" size="md">
              Start Trial
            </HydrationSafeButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
