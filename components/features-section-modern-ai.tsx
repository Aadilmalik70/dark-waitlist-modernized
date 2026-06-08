"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { 
  IconApi, 
  IconClock, 
  IconUsers, 
  IconShield,
  IconBrandGoogle,
  IconChartBar,
  IconPalette,
  IconRocket
} from "@tabler/icons-react";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";

export default function FeaturesSectionModernAI() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Enterprise-Grade AI Platform
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            The only SEO platform built on Google's native APIs, delivering 100% data accuracy 
            with 80% cost savings compared to traditional enterprise tools.
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            </motion.div>
          ))}
        </BentoGrid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-3xl p-12 max-w-4xl mx-auto border border-purple-200/50 dark:border-purple-800/50">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Your SEO Strategy?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join 500+ marketing teams using Google's native APIs for enterprise-grade content optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HydrationSafeButton
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Start Free Trial
              </HydrationSafeButton>
              <HydrationSafeButton
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-950/50"
              >
                Schedule Demo
              </HydrationSafeButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skeleton components for visual effects
const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Simulated Google Search Results */}
          <div className="h-6 w-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg"></div>
          <div className="h-6 w-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg"></div>
          <div className="h-6 w-full bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>
          <div className="h-6 w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none"></div>
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none"></div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
        <IconClock className="h-8 w-8 text-white" />
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">21s</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Generation Time</div>
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full"></div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">Real-time Sync</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Team Collaboration</div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="h-60 flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
        <IconShield className="h-10 w-10 text-white" />
      </div>
      <div className="space-y-2 text-center">
        <div className="text-lg font-bold text-green-600 dark:text-green-400">SOC 2 Compliant</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Enterprise Security</div>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div className="w-full h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
        <IconPalette className="h-8 w-8 text-white" />
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">White-label Ready</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Custom Branding</div>
      </div>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full h-32 bg-gradient-to-t from-purple-500 to-pink-500 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="flex items-center justify-center h-full">
          <IconChartBar className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">Performance Analytics</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">AI Search Insights</div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Google Native APIs",
    description: "Direct integration with Custom Search, Knowledge Graph, Gemini, and Natural Language APIs for 100% data accuracy.",
    header: <SkeletonOne />,
    icon: <IconBrandGoogle className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "21-Second Blueprints",
    description: "AI-powered content blueprint generation with enterprise-grade processing speed.",
    header: <SkeletonTwo />,
    icon: <IconClock className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Real-time Collaboration",
    description: "WebSocket-powered team collaboration with live editing and project management.",
    header: <SkeletonThree />,
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 compliant with role-based access, audit logs, and single sign-on integration.",
    header: <SkeletonFour />,
    icon: <IconShield className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "White-label Platform",
    description: "Complete agency rebrand capabilities with custom domains and client portal access.",
    header: <SkeletonFive />,
    icon: <IconPalette className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Performance Analytics",
    description: "Track content performance in AI search results with comprehensive reporting.",
    header: <SkeletonSix />,
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
];
