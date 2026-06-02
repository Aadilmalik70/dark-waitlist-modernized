"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Eye,
  Brain,
  Zap,
  BarChart3,
  RefreshCw,
  GraduationCap,
  Globe,
  TrendingUp,
  Shield,
} from "lucide-react";

const items = [
  {
    title: "SEO Automation",
    description:
      "Complete on-page and technical SEO optimization running 24/7 without manual intervention.",
    icon: Globe,
    className: "md:col-span-2",
    header: (
      <div className="flex items-center gap-2 p-4">
        <motion.div
          className="h-16 flex-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <TrendingUp className="text-blue-400" size={24} />
        </motion.div>
        <motion.div
          className="h-16 flex-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <BarChart3 className="text-indigo-400" size={24} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "GEO Optimization",
    description:
      "Optimize for generative engine results across ChatGPT, Perplexity, and AI search.",
    icon: Brain,
    className: "md:col-span-1",
    header: (
      <div className="flex items-center justify-center p-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Brain className="text-purple-400" size={20} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Content Intelligence",
    description:
      "AI-generated content strategies that align with search intent and drive organic traffic.",
    icon: GraduationCap,
    className: "md:col-span-1",
    header: (
      <div className="p-4 space-y-2">
        {[80, 65, 90].map((w, i) => (
          <motion.div
            key={i}
            className="h-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Competitive Intelligence",
    description:
      "Real-time competitor monitoring and gap analysis to stay ahead in search results.",
    icon: Eye,
    className: "md:col-span-2",
    header: (
      <div className="flex gap-2 p-4">
        {["You", "Comp A", "Comp B"].map((label, i) => (
          <div key={label} className="flex-1 space-y-1">
            <div className="text-[10px] text-neutral-500">{label}</div>
            <motion.div
              className={cn(
                "h-8 rounded",
                i === 0
                  ? "bg-green-500/30"
                  : i === 1
                  ? "bg-red-500/20"
                  : "bg-yellow-500/20"
              )}
              initial={{ height: 0 }}
              whileInView={{ height: `${[80, 50, 60][i]}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Lightning Fast Execution",
    description:
      "Automated implementation of optimizations across your entire website infrastructure.",
    icon: Zap,
    className: "md:col-span-1",
    header: (
      <div className="flex items-center justify-center p-4">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Zap className="text-yellow-400" size={28} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Adaptive Learning",
    description:
      "Machine learning models that continuously improve based on performance data and outcomes.",
    icon: RefreshCw,
    className: "md:col-span-1",
    header: (
      <div className="flex items-center justify-center p-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw className="text-green-400" size={24} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with enterprise-grade security protocols and data protection.",
    icon: Shield,
    className: "md:col-span-1",
    header: (
      <div className="flex items-center justify-center p-4">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-emerald-500/30 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <Shield className="text-emerald-400" size={18} />
        </motion.div>
      </div>
    ),
  },
];

export function ThreeColumnBentoGrid() {
  return (
    <section id="solutions" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4"
          >
            Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Dominate Search
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-none p-4 bg-black border border-white/[0.08] hover:border-white/[0.15] justify-between flex flex-col space-y-4",
                item.className
              )}
            >
              <div className="rounded-lg overflow-hidden">{item.header}</div>
              <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <item.icon size={14} className="text-neutral-400" />
                  <div className="font-sans font-bold text-neutral-200 text-sm">
                    {item.title}
                  </div>
                </div>
                <div className="font-sans font-normal text-neutral-500 text-xs">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
