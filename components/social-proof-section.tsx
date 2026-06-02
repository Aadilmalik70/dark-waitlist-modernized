"use client"

import { motion } from "framer-motion"

const logos = [
  "Search Console",
  "WordPress",
  "GitHub",
  "GA4",
  "Shopify",
  "Webflow",
]

export function SocialProofSection() {
  return (
    <section className="py-16 border-y border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">
          Connects with the tools your team already uses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">{logo.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
