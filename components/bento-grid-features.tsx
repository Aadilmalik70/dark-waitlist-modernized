"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid-aceternity";
import { motion } from "framer-motion";
import { 
  Database, 
  Zap, 
  Users, 
  Shield, 
  Globe, 
  TrendingUp, 
  Brain,
  Search,
  Sparkles
} from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const SkeletonOne = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Database className="w-8 h-8 text-blue-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Google APIs
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        Direct integration with Google's Custom Search, Knowledge Graph, and Gemini APIs
      </div>
      <div className="mt-4 flex space-x-2">
        <div className="px-2 py-1 bg-blue-500/20 rounded text-xs">100% Accuracy</div>
        <div className="px-2 py-1 bg-cyan-500/20 rounded text-xs">Real-time</div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Zap className="w-8 h-8 text-yellow-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          21-Second Generation
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        AI-powered content blueprint generation with enterprise processing speed
      </div>
      <motion.div 
        className="mt-4 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Users className="w-8 h-8 text-green-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Team Collaboration
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        WebSocket-powered real-time collaboration with live editing
      </div>
      <div className="mt-4 flex -space-x-2">
        {[1,2,3].map((i) => (
          <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-white`} />
        ))}
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Shield className="w-8 h-8 text-purple-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Enterprise Security
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        SOC 2 Type II compliant with enterprise-grade data protection
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="px-2 py-1 bg-purple-500/20 rounded text-xs">SOC 2</div>
        <div className="px-2 py-1 bg-pink-500/20 rounded text-xs">GDPR</div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Globe className="w-8 h-8 text-indigo-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          White-label Platform
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        Complete agency rebrand with custom domains and client portals
      </div>
      <motion.div 
        className="mt-4 w-full h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-xs font-medium">Your Brand Here</span>
      </motion.div>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <TrendingUp className="w-8 h-8 text-rose-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          AI Analytics
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        Track performance in AI search results with comprehensive reporting
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-xs">
          <span>Traffic Growth</span>
          <span className="text-green-500">+250%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <motion.div 
            className="bg-gradient-to-r from-rose-500 to-pink-500 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div className="relative flex flex-col h-full min-h-[6rem] p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Brain className="w-8 h-8 text-cyan-500" />
        <div className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
          AI Knowledge Graph
        </div>
      </motion.div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">
        Advanced entity relationships and semantic search optimization
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1">
        {[1,2,3,4,5,6].map((i) => (
          <motion.div 
            key={i}
            className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export function BentoGridFeatures() {
  const items = [
    {
      title: "Google Native APIs",
      description: "Direct integration with Google's Custom Search, Knowledge Graph, Gemini, and Natural Language APIs for 100% data accuracy.",
      header: <SkeletonOne />,
      icon: <Database className="h-4 w-4 text-blue-500" />,
      className: "md:col-span-2",
    },
    {
      title: "21-Second Blueprints",
      description: "AI-powered content blueprint generation with enterprise-grade processing speed.",
      header: <SkeletonTwo />,
      icon: <Zap className="h-4 w-4 text-yellow-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Real-time Collaboration",
      description: "WebSocket-powered team collaboration with live editing and project management.",
      header: <SkeletonThree />,
      icon: <Users className="h-4 w-4 text-green-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with role-based access, audit logs and single sign-on integration.",
      header: <SkeletonFour />,
      icon: <Shield className="h-4 w-4 text-purple-500" />,
      className: "md:col-span-2",
    },
    {
      title: "White-label Platform",
      description: "Complete agency rebrand capabilities with custom domains and client portal access.",
      header: <SkeletonFive />,
      icon: <Globe className="h-4 w-4 text-indigo-500" />,
      className: "md:col-span-1",
    },
    {
      title: "AI Performance Analytics",
      description: "Track content performance in AI search results with comprehensive reporting and insights.",
      header: <SkeletonSix />,
      icon: <TrendingUp className="h-4 w-4 text-rose-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Knowledge Graph Integration",
      description: "Advanced entity relationships and semantic search optimization powered by Google's Knowledge Graph.",
      header: <SkeletonSeven />,
      icon: <Brain className="h-4 w-4 text-cyan-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Enterprise SEO Platform Features
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The only platform built on Google's native APIs, delivering comprehensive SEO intelligence 
            with enterprise-grade security and collaboration tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Experience Google-Native SEO?
            </h3>
            <p className="text-neutral-600 mb-6">
              Join 500+ enterprise teams using our platform to outperform traditional SEO tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                Start Enterprise Trial
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                View Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
