"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedHoverBackground
            hoveredIndex={hoveredIndex}
            currentIndex={idx}
          />
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const AnimatedHoverBackground = ({
  hoveredIndex,
  currentIndex,
}: {
  hoveredIndex: number | null;
  currentIndex: number;
}) => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredIndex === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export const GradientText = ({
  children,
  className,
  as: Component = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
};