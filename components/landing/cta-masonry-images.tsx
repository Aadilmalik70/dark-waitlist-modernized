"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const masonryImages = [
  { gradient: "from-blue-600 to-indigo-700", label: "SEO Analytics", height: "h-48" },
  { gradient: "from-purple-600 to-pink-700", label: "Content Strategy", height: "h-64" },
  { gradient: "from-cyan-600 to-blue-700", label: "Keyword Mapping", height: "h-56" },
  { gradient: "from-indigo-600 to-violet-700", label: "Rank Tracking", height: "h-40" },
  { gradient: "from-emerald-600 to-teal-700", label: "Link Building", height: "h-52" },
  { gradient: "from-rose-600 to-red-700", label: "Technical SEO", height: "h-44" },
];

export function CtaMasonryImages() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Put Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Growth on Autopilot?
              </span>
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Join thousands of growth teams already using SERP Strategists to
              dominate search results with zero manual effort.
            </p>

            {/* Email CTA */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="mt-4 text-xs text-neutral-600">
              No credit card required • Free during beta • Cancel anytime
            </p>
          </motion.div>

          {/* Masonry Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="columns-2 gap-4 space-y-4">
              {masonryImages.map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`${img.height} rounded-xl bg-gradient-to-br ${img.gradient} p-4 flex flex-col justify-end break-inside-avoid mb-4`}
                >
                  <span className="text-white/80 text-xs font-medium">
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
