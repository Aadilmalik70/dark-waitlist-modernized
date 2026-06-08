"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Zap, Twitter, Github, Linkedin } from "lucide-react"

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Agencies", href: "/agencies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API Documentation", href: "/docs/api" }
  ],
  "Free Tools": [
    { name: "SEO Content Analyzer", href: "/tools/analyzer" },
    { name: "Keyword Research Tool", href: "/tools/keywords" }
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Help Center", href: "/help" },
    { name: "Webinars", href: "/webinars" }
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" }
  ]
}

export function FooterLight() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SERP</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategist</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-6 max-w-sm leading-relaxed">
              The only SEO platform built for Google's AI Search Era. Empower your team with AI-powered content strategy and enterprise-grade collaboration tools.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2025 SERP Strategist. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Badge variant="outline" className="glass-light border-green-200 text-green-700 text-xs">
              SOC 2 Certified
            </Badge>
            <Badge variant="outline" className="glass-light border-blue-200 text-blue-700 text-xs">
              Enterprise Ready
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}
