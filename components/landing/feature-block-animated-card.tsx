"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Search, Globe, Sparkles } from "lucide-react";

const cards = [
  {
    title: "10x Organic Growth",
    description: "Average clients see 10x organic traffic increase within 6 months of deployment.",
    icon: TrendingUp,
    gradient: "from-blue-600 to-indigo-600",
    stat: "10x",
    statLabel: "avg. traffic increase",
  },
  {
    title: "AI-First Ranking",
    description: "Optimized for traditional search and generative AI engines simultaneously.",
    icon: Sparkles,
    gradient: "from-purple-600 to-pink-600",
    stat: "95%",
    statLabel: "AI citation rate",
  },
  {
    title: "Global Coverage",
    description: "Multi-language SEO and GEO optimization across 50+ markets and search engines.",
    icon: Globe,
    gradient: "from-cyan-600 to-blue-600",
    stat: "50+",
    statLabel: "markets supported",
  },
  {
    title: "Zero Manual Work",
    description: "Fully autonomous execution — from keyword research to content publishing.",
    icon: Search,
    gradient: "from-indigo-600 to-violet-600",
    stat: "0",
    statLabel: "hours manual work",
  },
];

export function FeatureBlockAnimatedCard() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Results That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Speak for Themselves
            </span>
          </motion.h2>
        </div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 hover:border-white/[0.15] transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${card.gradient}`}
              />

              <div className="relative z-10">
                {/* Icon and Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} bg-opacity-10`}>
                    <card.icon size={22} className="text-white" />
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={20} className="text-neutral-400" />
                  </motion.div>
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <span className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${card.gradient}`}>
                    {card.stat}
                  </span>
                  <span className="text-sm text-neutral-500 ml-2">
                    {card.statLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
