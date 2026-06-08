"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Shield, Users, Zap, BarChart3, Lock, Globe, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              {/* Enterprise badge */}
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="px-3 py-1 text-purple-300 text-sm font-medium">
                  🏢 Fortune 500 Enterprise Solution
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight">
                Enterprise SEO Platform Built on Google's Native APIs
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-10">
                Scale your content strategy across global teams with 100% Google-native data accuracy, enterprise-grade security, and unlimited collaboration. Trusted by Fortune 500 companies who demand the highest data quality and compliance standards.
              </p>

              {/* Enterprise stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">$3.6M+</div>
                  <div className="text-gray-400">Annual Savings vs Traditional Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-400">Enterprise SLA Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">21 sec</div>
                  <div className="text-gray-400">Average Blueprint Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400">Google APIs Data Accuracy</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  Schedule Enterprise Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Contact Enterprise Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Google APIs Advantage Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                The Google APIs Enterprise Advantage
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Why Fortune 500 companies choose SERP Strategist over traditional tools that rely on scraped data
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">100% Google-Native Data Pipeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Google Custom Search API</h4>
                      <p className="text-gray-400">Direct access to Google's search index with enterprise quotas and SLAs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Google Gemini AI Integration</h4>
                      <p className="text-gray-400">Enterprise-grade AI content analysis and blueprint generation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Knowledge Graph API</h4>
                      <p className="text-gray-400">Entity relationships and semantic analysis directly from Google</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Natural Language API</h4>
                      <p className="text-gray-400">Advanced text analysis and sentiment understanding</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">vs. Traditional Tools (Semrush, Ahrefs)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Data Accuracy</span>
                      <span className="text-green-400 font-semibold">100% Google Native vs ~70% Scraped</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">API Rate Limits</span>
                      <span className="text-green-400 font-semibold">Enterprise SLAs vs Variable</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">AI Integration</span>
                      <span className="text-green-400 font-semibold">Native Gemini vs Third-party</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Enterprise Cost</span>
                      <span className="text-green-400 font-semibold">$899/mo vs $1200+/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features Grid */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Enterprise-Grade Features
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Everything your global teams need for scalable, secure, and compliant content strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-sm text-purple-400 font-medium">{feature.benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Enterprise Investment
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for enterprise teams. All Google APIs included with enterprise SLAs.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $899<span className="text-xl text-gray-400">/month</span>
                </div>
                <div className="text-purple-400 font-medium">Enterprise Plan</div>
                <div className="text-sm text-gray-400 mt-2">
                  Save $3,600+/year vs Semrush Enterprise ($400/mo) + Ahrefs ($999/mo)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Included Enterprise Features</h4>
                  <ul className="space-y-3">
                    {[
                      "Full Google APIs Suite with Enterprise SLAs",
                      "Unlimited Teams & Blueprints",
                      "SSO & SAML Integration",
                      "SOC 2 Type II Compliance",
                      "24/7 Enterprise Support",
                      "Dedicated Customer Success Manager"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Enterprise Add-ons</h4>
                  <ul className="space-y-3">
                    {[
                      "Custom AI Model Training",
                      "White-label Platform Access",
                      "Advanced Security & Audit Logs",
                      "Global Multi-region Deployment",
                      "Custom Integrations & APIs",
                      "Quarterly Business Reviews"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg">
                  Schedule Enterprise Demo
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Request Custom Quote
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Enterprise Implementation Timeline
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From initial consultation to full enterprise deployment in 30 days
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                  <p className="text-purple-400 text-sm font-medium">{step.timeline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Ready for Enterprise-Grade SEO?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
                Join Fortune 500 companies using Google's native APIs for superior content strategy. Schedule your enterprise demo today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  Schedule Enterprise Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Download Enterprise Datasheet
                </Button>
              </div>

              <p className="text-gray-400 text-sm">
                30-day enterprise trial • No setup fees • Dedicated onboarding specialist
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const enterpriseFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "SOC 2 Type II Compliance",
    description: "Enterprise-grade security with comprehensive audit logs, data encryption, and compliance monitoring for global operations.",
    benefit: "Meet regulatory requirements"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Unlimited Team Collaboration",
    description: "Real-time WebSocket collaboration, role-based permissions, and workspace management for distributed global teams.",
    benefit: "Scale across unlimited users"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Enterprise API Access",
    description: "Full API access with enterprise rate limits, webhooks, custom integrations, and dedicated support for development teams.",
    benefit: "Integrate with existing systems"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Advanced Analytics & Reporting",
    description: "Custom dashboards, white-label reports, performance analytics, and executive-level insights across all global markets.",
    benefit: "Data-driven decision making"
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "SSO & Identity Management",
    description: "SAML/SSO integration, Active Directory sync, multi-factor authentication, and enterprise identity management.",
    benefit: "Seamless enterprise authentication"
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Global Multi-Region Support",
    description: "Deploy across multiple geographic regions with localized data processing and compliance with regional regulations.",
    benefit: "Global enterprise deployment"
  }
]

const implementationSteps = [
  {
    title: "Discovery & Planning",
    description: "Technical requirements, integration planning, and custom configuration design",
    timeline: "Week 1"
  },
  {
    title: "Environment Setup",
    description: "Enterprise instance provisioning, security configuration, and SSO integration",
    timeline: "Week 2"
  },
  {
    title: "Team Onboarding",
    description: "User training, workflow setup, and custom integrations with existing tools",
    timeline: "Week 3"
  },
  {
    title: "Go-Live & Support",
    description: "Full deployment, performance optimization, and dedicated customer success manager",
    timeline: "Week 4"
  }
]