"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Database, Brain, Users, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface Feature {
  feature: string;
  serpStrategist: boolean | string;
  semrush: boolean | string;
  ahrefs: boolean | string;
  highlight?: boolean;
}

interface FeatureRowProps {
  feature: Feature;
  index: number;
}

export function FeatureRow({ feature, index }: FeatureRowProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  const renderValue = (value: any, isHighlight: boolean = false, isSerpStrategist: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className={`h-5 w-5 ${isSerpStrategist ? 'text-purple-600' : 'text-green-600'}`} />
      ) : (
        <X className="h-5 w-5 text-red-500" />
      );
    }
    
    return (
      <span className={`${isHighlight && isSerpStrategist ? 'font-bold text-purple-600' : ''} ${isHighlight && !isSerpStrategist ? 'text-slate-500' : ''}`}>
        {value}
      </span>
    );
  };

  return (
    <tr className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} ${feature.highlight ? 'bg-purple-50/30' : ''} hover:bg-slate-50/50`}>
      <td className={`py-4 px-6 text-left font-medium text-slate-900 ${feature.highlight ? 'border-l-4 border-purple-500' : ''}`}>
        {feature.feature}
        {feature.highlight && (
          <Badge className="ml-2 bg-purple-100 text-purple-700 text-xs">
            Key Advantage
          </Badge>
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {renderValue(feature.serpStrategist, feature.highlight, true)}
      </td>
      <td className="py-4 px-6 text-center">
        {renderValue(feature.semrush, feature.highlight)}
      </td>
      <td className="py-4 px-6 text-center">
        {renderValue(feature.ahrefs, feature.highlight)}
      </td>
    </tr>
  );
}

interface Category {
  name: string;
  features: Feature[];
}

interface CategorySectionProps {
  category: Category;
  index: number;
}

export function CategorySection({ category, index }: CategorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Data Source & Accuracy": return <Database className="h-6 w-6" />;
      case "AI Search Optimization": return <Brain className="h-6 w-6" />;
      case "Team Collaboration": return <Users className="h-6 w-6" />;
      case "Enterprise Features": return <Shield className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Card className="glass-light-card border-slate-200/50 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-900">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
              {getCategoryIcon(category.name)}
            </div>
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-6 text-center font-bold text-purple-600 bg-purple-50/50">
                    SERP Strategist
                    <Badge className="ml-2 bg-purple-600 text-white text-xs">
                      Our Platform
                    </Badge>
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-slate-700">
                    Semrush Enterprise
                    <div className="text-xs text-slate-500 mt-1">$400+/month</div>
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-slate-700">
                    Ahrefs Enterprise
                    <div className="text-xs text-slate-500 mt-1">$999+/month</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.features.map((feature: any, idx: number) => (
                  <FeatureRow key={idx} feature={feature} index={idx} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
