"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Zap, Twitter } from "lucide-react"

const footerLinks = {
  Product: [
    { name: "How it works", href: "/how-it-works" },
    { name: "Writing Examples", href: "/writing-examples" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Integrations", href: "/integrations" },
    { name: "Directory Submission", href: "/directory" }
  ],
  "Free Tools": [
    { name: "Blog Keyword Generator", href: "/tools/keyword-generator" }
  ],
  Documentations: [
    { name: "Webhook Docs", href: "/docs/webhook" },
    { name: "Framer Docs", href: "/docs/framer" },
    { name: "Wordpress Docs", href: "/docs/wordpress" }
  ],
  Company: [
    { name: "Become Affiliate", href: "/affiliate" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" }
  ]
}

export function FooterModern() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Outrank
              </span>
            </div>
            <p className="text-white/60 text-sm mb-4 max-w-sm">
              Grow organic traffic on auto-pilot with AI-generated content that naturally ranks.
            </p>
            <div className="flex items-center space-x-2">
              <Twitter className="h-4 w-4 text-white/40" />
              <span className="text-white/40 text-sm">Follow us for updates</span>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
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
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-center">
          <div className="text-white/40 text-sm text-center">
            © 2025 All rights reserved Outrank
          </div>
        </div>
      </div>
    </footer>
  )
}
