"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users, Database, Globe, TrendingUp } from "lucide-react";

export function EnterpriseFeatureGrid() {
  const features = [
    {
      icon: Database,
      title: "Google Native APIs",
      description: "Direct integration with Custom Search, Knowledge Graph, Gemini, and Natural Language APIs for 100% data accuracy.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "21-Second Blueprints",
      description: "AI-powered content blueprint generation with enterprise-grade processing speed.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "WebSocket-powered team collaboration with live editing and project management.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with role-based access, audit logs and single sign-on integration.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "White-label Platform",
      description: "Complete agency rebrand capabilities with custom domains and client portal access.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track content performance in AI search results with comprehensive reporting.",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Enterprise-Grade AI Search Optimization Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The only platform built on Google's native APIs, delivering 100% data accuracy with 80% cost 
            savings compared to traditional enterprise SEO tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-20 text-center"
        >
          {[
            { title: "APIs", value: "Google Native", subtitle: "100% Accuracy" },
            { title: "21s", value: "21-Second", subtitle: "Blueprint Generation" },
            { title: "Teams", value: "Real-time", subtitle: "Collaboration" },
            { title: "SOC 2", value: "Enterprise", subtitle: "Security" },
            { title: "Brand", value: "White-label", subtitle: "Platform" },
            { title: "Analytics", value: "Performance", subtitle: "Tracking" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.title}
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
