"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function FeaturesSectionSimple() {
  const features = [
    {
      title: "Google Native APIs",
      description: "Direct integration with Custom Search, Knowledge Graph, Gemini, and Natural Language APIs for 100% data accuracy.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 items-center justify-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          APIs
        </div>
      </div>,
      className: "md:col-span-2",
      icon: <span className="text-2xl">🔗</span>,
    },
    {
      title: "21-Second Blueprints",
      description: "AI-powered content blueprint generation with enterprise-grade processing speed.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 items-center justify-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ⚡ 21s
        </div>
      </div>,
      className: "md:col-span-1",
      icon: <span className="text-2xl">⏱️</span>,
    },
    {
      title: "Real-time Collaboration",
      description: "WebSocket-powered team collaboration with live editing and project management.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-100 to-green-100 dark:from-cyan-900 dark:to-green-900 items-center justify-center">
        <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
          🤝 Teams
        </div>
      </div>,
      className: "md:col-span-1",
      icon: <span className="text-2xl">👥</span>,
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 compliant with role-based access, audit logs, and single sign-on integration.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900 dark:to-yellow-900 items-center justify-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
          🔒 SOC 2
        </div>
      </div>,
      className: "md:col-span-2",
      icon: <span className="text-2xl">🛡️</span>,
    },
    {
      title: "White-label Platform",
      description: "Complete agency rebrand capabilities with custom domains and client portal access.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-100 to-purple-100 dark:from-yellow-900 dark:to-purple-900 items-center justify-center">
        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
          🏷️ Brand
        </div>
      </div>,
      className: "md:col-span-1",
      icon: <span className="text-2xl">🎨</span>,
    },
    {
      title: "Performance Analytics",
      description: "Track content performance in AI search results with comprehensive reporting.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 items-center justify-center">
        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          📊 Analytics
        </div>
      </div>,
      className: "md:col-span-1",
      icon: <span className="text-2xl">📈</span>,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Enterprise-Grade AI Search Optimization Platform
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            The only platform built on Google's native APIs, delivering 100% data accuracy with 80% cost savings compared to traditional enterprise SEO tools.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-4xl mx-auto">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1
                }}
                viewport={{ once: true }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={`${item.className} hover:scale-[1.02] transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl`}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Transform Your SEO Strategy?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Join 500+ marketing teams using Google's native APIs for enterprise-grade content optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}