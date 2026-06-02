import React from "react";

export const SerpStrategistLogo = ({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />
      {/* S letter stylized as search/growth arrow */}
      <path
        d="M12 26C12 26 14 28 20 28C26 28 28 25 28 23C28 21 26 19 20 18C14 17 12 15 12 13C12 11 14 8 20 8C26 8 28 10 28 10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Upward arrow indicating growth */}
      <path
        d="M28 14L28 8L22 8"
        stroke="url(#arrow-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small dots representing data/search results */}
      <circle cx="9" cy="32" r="1.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="31" cy="32" r="1.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="20" cy="34" r="1.5" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
};

export const SerpStrategistLogoFull = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SerpStrategistLogo size={32} />
      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
        SERP Strategists
      </span>
    </div>
  );
};
