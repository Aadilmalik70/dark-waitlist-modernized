"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HydrationSafeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "email" | "search";
}

export function HydrationSafeInput({
  className,
  variant = "default",
  ...props
}: HydrationSafeInputProps) {
  const baseClasses = "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    default: "border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500",
    email: "border border-gray-300 rounded-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500",
    search: "border-none bg-transparent text-black h-full rounded-full focus:ring-0"
  };

  return (
    <input
      suppressHydrationWarning
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
