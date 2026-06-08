"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-blue-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Transform Your SEO Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ marketing teams using Google's native APIs for enterprise-grade 
            content optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
