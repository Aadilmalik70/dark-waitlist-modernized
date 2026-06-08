/**
 * AI Tech Utilities for Modern Component Architecture
 * Provides consistent styling and animation patterns for the AI tech aesthetic
 */
import { cn } from "@/lib/utils";

// AI Tech Color Variants
export type AITechVariant = "neural" | "quantum" | "ai" | "tech" | "energy";

// Component Base Classes
export const aiTechBaseClasses = {
  neural: "bg-neural-mesh text-neural-50",
  quantum: "bg-quantum-mesh text-quantum-50", 
  ai: "bg-ai-mesh text-ai-50",
  tech: "bg-tech-mesh text-tech-50",
  energy: "bg-energy-mesh text-energy-50",
};

// Gradient Text Classes
export const gradientTextClasses = {
  neural: "bg-gradient-to-r from-neural-from via-neural-via to-neural-to bg-clip-text text-transparent",
  quantum: "bg-gradient-to-r from-quantum-from via-quantum-via to-quantum-to bg-clip-text text-transparent",
  ai: "bg-gradient-to-r from-ai-from via-ai-via to-ai-to bg-clip-text text-transparent",
  tech: "bg-gradient-to-r from-tech-from via-tech-via to-tech-to bg-clip-text text-transparent",
  energy: "bg-gradient-to-r from-energy-from via-energy-via to-energy-to bg-clip-text text-transparent",
};

// Glass Morphism Card Classes
export const glassMorphismClasses = {
  light: "bg-white/10 backdrop-blur-md border border-white/20",
  medium: "bg-white/15 backdrop-blur-lg border border-white/30",
  heavy: "bg-white/20 backdrop-blur-xl border border-white/40",
};

// AI Tech Animation Classes
export const aiTechAnimations = {
  neural: "animate-neural-flow",
  quantum: "animate-quantum-pulse",
  ai: "animate-ai-breathe", 
  tech: "animate-tech-glow",
  energy: "animate-pulse",
};

// Glow Effect Classes
export const glowEffects = {
  neural: "shadow-neural-glow hover:shadow-neural-glow",
  quantum: "shadow-quantum-glow hover:shadow-quantum-glow",
  ai: "shadow-ai-glow hover:shadow-ai-glow",
  tech: "shadow-tech-glow hover:shadow-tech-glow",
  energy: "shadow-energy-glow hover:shadow-energy-glow",
};

/**
 * Creates an AI Tech gradient text component
 */
export function createGradientText(
  variant: AITechVariant = "neural",
  className?: string
) {
  return cn(gradientTextClasses[variant], className);
}

/**
 * Creates an AI Tech glass morphism card
 */
export function createGlassCard(
  intensity: keyof typeof glassMorphismClasses = "medium",
  variant: AITechVariant = "neural",
  className?: string
) {
  return cn(
    glassMorphismClasses[intensity],
    glowEffects[variant],
    "rounded-xl transition-all duration-300",
    className
  );
}

/**
 * Creates an animated AI Tech background
 */
export function createAnimatedBackground(
  variant: AITechVariant = "neural",
  className?: string
) {
  return cn(
    aiTechBaseClasses[variant],
    aiTechAnimations[variant],
    "relative overflow-hidden",
    className
  );
}

/**
 * Creates a modern CTA button with AI tech styling
 */
export function createAITechButton(
  variant: AITechVariant = "neural",
  size: "sm" | "md" | "lg" = "md",
  className?: string
) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return cn(
    "relative inline-flex items-center justify-center",
    "rounded-lg font-semibold transition-all duration-300",
    "transform hover:scale-105 active:scale-95",
    glassMorphismClasses.medium,
    glowEffects[variant],
    sizes[size],
    className
  );
}

/**
 * Creates responsive breakpoint classes for AI tech components
 */
export const responsiveClasses = {
  hero: {
    container: "min-h-screen flex items-center justify-center relative",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
    title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight",
    subtitle: "text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 opacity-90",
    cta: "mt-8 sm:mt-10 md:mt-12",
  },
  features: {
    container: "py-16 sm:py-20 lg:py-24",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10",
    card: "p-6 sm:p-8 rounded-xl transition-all duration-300",
  },
  section: {
    container: "py-12 sm:py-16 lg:py-20",
    content: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12",
  },
};

/**
 * Animation delay utility for staggered animations
 */
export function createStaggeredDelay(index: number, baseDelay: number = 0.1) {
  return `${baseDelay * index}s`;
}

/**
 * Intersection Observer hook utility class names
 */
export const intersectionClasses = {
  fadeInUp: "opacity-0 translate-y-8 transition-all duration-700",
  fadeInLeft: "opacity-0 -translate-x-8 transition-all duration-700", 
  fadeInRight: "opacity-0 translate-x-8 transition-all duration-700",
  scaleIn: "opacity-0 scale-95 transition-all duration-500",
  visible: "opacity-100 translate-y-0 translate-x-0 scale-100",
};

/**
 * Modern scrollbar styling
 */
export const scrollbarClasses = `
  scrollbar-thin scrollbar-track-transparent 
  scrollbar-thumb-neutral-400/20 hover:scrollbar-thumb-neutral-400/40
  scrollbar-thumb-rounded-full
`;

/**
 * AI Tech themed focus rings
 */
export const focusRingClasses = {
  neural: "focus:ring-2 focus:ring-neural-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
  quantum: "focus:ring-2 focus:ring-quantum-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
  ai: "focus:ring-2 focus:ring-ai-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
  tech: "focus:ring-2 focus:ring-tech-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
  energy: "focus:ring-2 focus:ring-energy-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
};