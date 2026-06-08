"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HydrationSafeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function HydrationSafeButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: HydrationSafeButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-white/80 backdrop-blur-lg border border-gray-200 text-gray-700 hover:bg-white",
    outline: "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",
    ghost: "bg-gray-100 hover:bg-green-500 text-gray-700 hover:text-white"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-2 rounded-lg",
    lg: "px-8 py-4 rounded-xl"
  };

  return (
    <button
      suppressHydrationWarning
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
