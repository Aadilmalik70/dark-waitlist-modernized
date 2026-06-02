"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const LinesGradient = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
          <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>
        {/* Horizontal lines with gradient */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#line-gradient-1)" strokeWidth="0.5" />
        <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#line-gradient-2)" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#line-gradient-3)" strokeWidth="0.5" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#line-gradient-1)" strokeWidth="0.5" />
        {/* Vertical lines with gradient */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#line-gradient-2)" strokeWidth="0.5" />
        <line x1="40%" y1="0" x2="40%" y2="100%" stroke="url(#line-gradient-3)" strokeWidth="0.5" />
        <line x1="60%" y1="0" x2="60%" y2="100%" stroke="url(#line-gradient-1)" strokeWidth="0.5" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#line-gradient-2)" strokeWidth="0.5" />
      </svg>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
    </div>
  );
};
