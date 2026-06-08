"use client";

import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { comparisonData } from "@/data/comparison-data";
import { CategorySection } from "./comparison/feature-comparison-table";
import { PricingComparison } from "./comparison/pricing-comparison";
import { ComparisonCTA } from "./comparison/comparison-cta";

export function CompetitiveComparisonSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="glass-light border-purple-200 text-purple-800 mb-8 px-6 py-3 text-sm font-medium">
              <Globe className="mr-2 h-4 w-4" />
              Competitive Analysis
            </Badge>
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">Why Switch from </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Traditional Tools?
              </span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              See exactly how SERP Strategist's Google-native approach compares to traditional enterprise SEO tools. 
              The data accuracy and cost difference speaks for itself.
            </p>
          </div>
        </div>

        {/* Feature Comparison Tables */}
        <div className="mb-20">
          {comparisonData.categories.map((category, index) => (
            <CategorySection key={index} category={category} index={index} />
          ))}
        </div>

        {/* Pricing Comparison */}
        <PricingComparison isLoaded={isLoaded} />

        {/* Bottom CTA */}
        <ComparisonCTA isLoaded={isLoaded} />
      </div>
    </section>
  );
}
