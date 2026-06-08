"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowRight } from "lucide-react";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";

interface ComparisonCTAProps {
  isLoaded: boolean;
}

export function ComparisonCTA({ isLoaded }: ComparisonCTAProps) {
  return (
    <div className={`text-center transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Card className="glass-light-card border-purple-200/50 shadow-2xl overflow-hidden group">
        <CardContent className="p-12 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Ready to upgrade from scraped data to 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Google-native accuracy?
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join enterprise teams who've already made the switch to Google APIs integration, 
              21-second blueprint generation, and real-time collaboration at 80% cost savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HydrationSafeButton 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group/btn"
              >
                Get Enterprise Demo
                <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
              </HydrationSafeButton>
              
              <HydrationSafeButton 
                size="lg" 
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold px-10 py-4 text-lg"
              >
                Compare Features
              </HydrationSafeButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
