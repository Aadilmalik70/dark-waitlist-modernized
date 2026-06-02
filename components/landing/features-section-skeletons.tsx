"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Brain,
  Zap,
  RefreshCw,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Autonomous Observation",
    description:
      "Continuously monitors your search landscape, tracking rankings, competitors, and algorithm changes in real-time.",
    icon: Search,
    skeleton: () => (
      <div className="flex flex-col gap-2 p-4">
        <div className="h-2 bg-blue-500/20 rounded-full w-full animate-pulse" />
        <div className="h-2 bg-blue-500/30 rounded-full w-3/4 animate-pulse animation-delay-200" />
        <div className="h-2 bg-blue-500/20 rounded-full w-1/2 animate-pulse animation-delay-400" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-6 bg-blue-500/10 rounded animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Deep Analysis",
    description:
      "AI-powered analysis identifies gaps, opportunities, and patterns that human analysts miss.",
    icon: BarChart3,
    skeleton: () => (
      <div className="flex items-end gap-1 p-4 h-24">
        {[40, 60, 35, 80, 55, 70, 90, 45, 75, 85].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-indigo-500/40 to-indigo-500/10 rounded-t"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Strategic Planning",
    description:
      "Generates comprehensive SEO and GEO strategies tailored to your specific market and goals.",
    icon: Brain,
    skeleton: () => (
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <div className="h-2 bg-white/10 rounded-full flex-1" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-2 h-2 rounded-full bg-blue-500/50" />
          <div className="h-2 bg-white/10 rounded-full flex-1" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-2 h-2 rounded-full bg-blue-500/50" />
          <div className="h-2 bg-white/10 rounded-full flex-1" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="h-2 bg-white/10 rounded-full flex-1" />
        </div>
      </div>
    ),
  },
  {
    title: "Auto Execution",
    description:
      "Implements changes autonomously — from content optimization to technical fixes and link building.",
    icon: Zap,
    skeleton: () => (
      <div className="p-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-cyan-500/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="flex items-center justify-center h-16">
          <motion.div
            className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={14} className="text-cyan-400" />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Performance Evaluation",
    description:
      "Measures the impact of every action, attributing results to specific strategies and tactics.",
    icon: Target,
    skeleton: () => (
      <div className="p-4 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30"
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-purple-500/50"
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <div className="absolute inset-4 rounded-full bg-purple-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Learns from every result, constantly improving its strategies and adapting to changes.",
    icon: RefreshCw,
    skeleton: () => (
      <div className="p-4 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw size={24} className="text-green-400/50" />
        </motion.div>
      </div>
    ),
  },
];

export function FeaturesSectionSkeletons() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            The Complete Autonomous{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Growth Engine
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Six intelligent modules working together to drive continuous, compounding search growth.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-white/[0.15] transition-all duration-300"
            >
              {/* Skeleton Animation */}
              <div className="mb-4 rounded-xl bg-black/50 border border-white/[0.05] overflow-hidden h-28">
                <feature.skeleton />
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <feature.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
