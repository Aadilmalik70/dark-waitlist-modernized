"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SerpStrategistLogo } from "@/components/serpstrategist-logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "Solutions", link: "#solutions" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
];

export function SimpleNavbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          onMouseLeave={() => setActive(null)}
          className="relative mt-4 rounded-full border border-white/[0.1] bg-black/80 backdrop-blur-md shadow-lg flex items-center justify-between px-6 py-4"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <SerpStrategistLogo size={28} />
            <span className="text-sm font-bold text-white hidden sm:block">
              SERP Strategists
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => setActive(item.name)}
                className="relative"
              >
                <motion.a
                  href={item.link}
                  className="cursor-pointer text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
                {active === item.name && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm text-neutral-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <a
              href="#waitlist"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl border border-white/[0.1] bg-black/95 backdrop-blur-md p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block py-3 px-4 text-neutral-300 hover:text-white transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#waitlist"
              className="block mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
