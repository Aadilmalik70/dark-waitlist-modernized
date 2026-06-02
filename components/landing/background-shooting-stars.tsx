"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/aceternity/shooting-stars";
import { StarsBackground } from "@/components/aceternity/stars-background";

export function BackgroundShootingStars({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <StarsBackground starDensity={0.0002} className="z-0" />
      <ShootingStars
        starColor="#6366f1"
        trailColor="#3b82f6"
        minDelay={2000}
        maxDelay={5000}
        className="z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
