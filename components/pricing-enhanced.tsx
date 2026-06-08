"use client";

import { Tabs } from "@/components/ui/animated-tabs";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function PricingModernAI() {
  const tabsData = [
    {
      title: "Monthly",
      value: "monthly",
      content: (
        <div className="w-full relative">
          <PricingGrid isAnnual={false} />
        </div>
      ),
    },
    {
      title: "Annual (Save 20%)",
      value: "annual", 
      content: (
        <div className="w-full relative">
          <PricingGrid isAnnual={true} />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Enterprise SEO Pricing
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include Google APIs integration, 
            real-time data, and enterprise security.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <Tabs
            tabs={tabsData}
            containerClassName="mb-12"
            activeTabClassName="bg-gradient-to-r from-purple-500 to-blue-500"
            tabClassName="text-lg font-semibold px-8 py-3 mx-2"
          />
        </div>
      </div>
    </section>
  );
}

function PricingGrid({ isAnnual }: { isAnnual: boolean }) {
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 79 : 99,
      originalPrice: isAnnual ? 99 : null,
      description: "Perfect for small businesses and freelancers",
      features: [
        "5 Website Projects",
        "Google APIs Integration", 
        "Real-time Keyword Tracking",
        "Basic SEO Analytics",
        "Email Support",
        "1 User Account"
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional", 
      price: isAnnual ? 239 : 299,
      originalPrice: isAnnual ? 299 : null,
      description: "Ideal for growing agencies and marketing teams",
      features: [
        "25 Website Projects",
        "Advanced Google APIs",
        "Team Collaboration Tools",
        "Priority Support",
        "Custom Reporting",
        "5 User Accounts",
        "White-label Options"
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-purple-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: isAnnual ? 719 : 899,
      originalPrice: isAnnual ? 899 : null,
      description: "For Fortune 500 companies and large agencies",
      features: [
        "Unlimited Projects",
        "Full Google APIs Suite",
        "Advanced Team Management",
        "24/7 Priority Support",
        "Custom Integrations",
        "Unlimited Users",
        "SOC 2 Type II Compliance",
        "Dedicated Account Manager"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-cyan-500 to-teal-500",
      badge: "Most Popular for Agencies"
    },
    {
      name: "Custom",
      price: null,
      description: "Tailored solutions for enterprise needs", 
      features: [
        "Custom Implementation",
        "Dedicated Infrastructure",
        "Enterprise SLA",
        "Custom Analytics",
        "API Access",
        "Training & Onboarding",
        "Compliance Certifications"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {plan.badge}
              </div>
            </div>
          )}
          
          <div className={`relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 ${plan.popular ? 'border-purple-500/30 shadow-2xl shadow-purple-500/20' : ''} hover:shadow-xl transition-all duration-300 group-hover:border-white/20`}>
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-2xl`} />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      <div className="ml-2">
                        <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                          /month
                        </div>
                        {plan.originalPrice && (
                          <div className="text-neutral-500 text-xs line-through">
                            ${plan.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                      Custom Pricing
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 mt-0.5 bg-gradient-to-r ${plan.gradient} rounded-full p-1 text-white flex-shrink-0`} />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                  : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
              } hover:scale-105 active:scale-95`}>
                {plan.cta}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}