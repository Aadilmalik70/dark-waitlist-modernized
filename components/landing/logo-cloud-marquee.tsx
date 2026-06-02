"use client";
import React from "react";
import { Marquee } from "@/components/aceternity/marquee";

const logos = [
  { name: "Google", initial: "G" },
  { name: "HubSpot", initial: "H" },
  { name: "Semrush", initial: "Se" },
  { name: "Ahrefs", initial: "Ah" },
  { name: "Moz", initial: "M" },
  { name: "WordPress", initial: "W" },
  { name: "Shopify", initial: "Sh" },
  { name: "Webflow", initial: "Wf" },
  { name: "Vercel", initial: "V" },
  { name: "Cloudflare", initial: "Cf" },
];

function LogoCard({ name, initial }: { name: string; initial: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-300">
        {initial}
      </div>
      <span className="text-sm font-medium text-neutral-400">{name}</span>
    </div>
  );
}

export function LogoCloudMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider">
          Integrates with your existing tools
        </p>
      </div>
      <Marquee pauseOnHover speed={30}>
        {logos.map((logo) => (
          <LogoCard key={logo.name} name={logo.name} initial={logo.initial} />
        ))}
      </Marquee>
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
