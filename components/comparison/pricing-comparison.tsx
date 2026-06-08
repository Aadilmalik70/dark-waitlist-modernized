"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Globe, Database, Users } from "lucide-react";
import { HydrationSafeButton } from "@/components/ui/hydration-safe-button";
import { ArrowRight } from "lucide-react";

interface PricingComparisonProps {
  isLoaded: boolean;
}

export function PricingComparison({ isLoaded }: PricingComparisonProps) {
  return (
    <div className={`mb-20 transition-all duration-700 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Card className="glass-light-card border-purple-200/50 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-200">
          <CardTitle className="text-center text-3xl text-slate-900">
            Pricing Comparison: Save 80% with Better Features
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* SERP Strategist Pricing */}
            <Card className="border-2 border-purple-300 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-600">SERP Strategist</CardTitle>
                <Badge className="bg-purple-600 text-white">Google APIs Native</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="text-4xl font-bold text-purple-600">$99</div>
                  <div className="text-slate-600">Professional Plan</div>
                  <div className="text-sm text-green-600 font-semibold">80% Cost Savings</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Google APIs Integration</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>21-Second Generation</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Real-time Collaboration</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>AI Search Optimization</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Semrush Pricing */}
            <Card className="border border-slate-300 shadow-lg opacity-75">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-700">Semrush Enterprise</CardTitle>
                <Badge variant="outline" className="border-slate-400 text-slate-600">Scraped Data</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="text-4xl font-bold text-slate-700">$400+</div>
                  <div className="text-slate-600">Enterprise Plan</div>
                  <div className="text-sm text-red-600 font-semibold">4x More Expensive</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Scraped Data Only</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Manual Process</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Basic Sharing</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>No AI Optimization</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ahrefs Pricing */}
            <Card className="border border-slate-300 shadow-lg opacity-75">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-700">Ahrefs Enterprise</CardTitle>
                <Badge variant="outline" className="border-slate-400 text-slate-600">Individual Focus</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="text-4xl font-bold text-slate-700">$999+</div>
                  <div className="text-slate-600">Enterprise Plan</div>
                  <div className="text-sm text-red-600 font-semibold">10x More Expensive</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Scraped Data Only</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Manual Process</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>No Team Features</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>No AI Optimization</span>
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Save $300-900 per month with better features
              </h3>
              <p className="text-green-600 max-w-2xl mx-auto">
                Get Google-native data accuracy, AI search optimization, and real-time team collaboration 
                for a fraction of the cost of traditional enterprise tools.
              </p>
            </div>
            
            <HydrationSafeButton 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-12 py-4 text-lg shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
            >
              Switch to SERP Strategist Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </HydrationSafeButton>
            
            <div className="mt-6 text-sm text-slate-500">
              <span>Early access program • No credit card required • Cancel anytime</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
