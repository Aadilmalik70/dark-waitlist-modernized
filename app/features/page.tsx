"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Zap, Users, BarChart3, Shield, Globe, Sparkles, Brain, Target, Bot, Workflow, Clock, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FeaturesPage() {
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
              {/* Features badge */}
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="px-3 py-1 text-purple-300 text-sm font-medium">
                  🚀 Google-Native Enterprise Features
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight">
                Features That Transform Your SEO Strategy
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-10">
                Discover the comprehensive suite of Google APIs-powered features that make SERP Strategist the only enterprise SEO platform your team needs. From 21-second blueprint generation to real-time collaboration, every feature is designed for accuracy, speed, and scale.
              </p>

              {/* Key benefits */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-gray-400">Google APIs Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">21 sec</div>
                  <div className="text-gray-400">Blueprint Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">Real-time</div>
                  <div className="text-gray-400">Team Collaboration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">80%</div>
                  <div className="text-gray-400">Cost Savings vs Competitors</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo">
                  <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                    See Features in Action
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Google APIs Core Features */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Powered by Google's Native APIs
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The only SEO platform with direct access to Google's data sources - no scraping, no delays, no inaccuracies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {googleApisFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.name}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{capability}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Enterprise Advantage</div>
                      <div className="text-purple-400 font-semibold">{feature.advantage}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered Intelligence */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                AI-Powered Content Intelligence
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Advanced AI features that transform hours of manual analysis into seconds of intelligent insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="space-y-2 mb-4">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-purple-400 font-medium">{feature.impact}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Collaboration */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                  <span className="px-3 py-1 text-blue-300 text-sm font-medium">
                    Enterprise Team Features
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Real-Time Team Collaboration
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Built from the ground up for enterprise teams with WebSocket technology enabling instant collaboration, role-based permissions, and seamless workflow management across global teams.
                </p>
                
                <div className="space-y-6">
                  {collaborationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Team Activity Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">SM</span>
                        </div>
                        <span className="text-gray-300">Sarah M. editing blueprint</span>
                      </div>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">DJ</span>
                        </div>
                        <span className="text-gray-300">David J. added comment</span>
                      </div>
                      <span className="text-gray-400 text-sm">2m ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AL</span>
                        </div>
                        <span className="text-gray-300">Alex L. exported report</span>
                      </div>
                      <span className="text-gray-400 text-sm">5m ago</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Security & Compliance */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Enterprise Security & Compliance
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Bank-level security with comprehensive compliance features for global enterprise deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="text-sm text-green-400 font-medium">{feature.compliance}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Why Choose SERP Strategist
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                See how our Google-native approach delivers superior results compared to traditional SEO tools
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional Tools (Semrush, Ahrefs)</h3>
                <div className="space-y-4">
                  {traditionalLimitations.map((limitation, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 text-red-400 mr-3">✗</div>
                      <span className="text-gray-300">{limitation}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">SERP Strategist Advantages</h3>
                <div className="space-y-4">
                  {serpAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{advantage}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Bottom Line Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                    <div className="text-gray-300 font-medium">Cost Savings</div>
                    <div className="text-sm text-gray-400">vs Semrush + Ahrefs Enterprise</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-gray-300 font-medium">Data Accuracy</div>
                    <div className="text-sm text-gray-400">Direct Google APIs vs scraped data</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                    <div className="text-gray-300 font-medium">Time Savings</div>
                    <div className="text-sm text-gray-400">21-second analysis vs manual research</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Experience the Difference
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
                See why enterprise teams are switching from traditional tools to SERP Strategist's Google-native approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/demo">
                  <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                    See All Features in Action
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/enterprise">
                  <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                    Enterprise Solution
                  </Button>
                </Link>
              </div>

              <p className="text-gray-400 text-sm">
                30-day free trial • Full Google APIs access • No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const googleApisFeatures = [
  {
    name: "Google Custom Search API",
    icon: <Zap className="w-8 h-8 text-white" />,
    description: "Direct access to Google's search index with enterprise quotas and SLAs. Get real-time SERP data with 100% accuracy instead of relying on scraped data that's often incomplete or outdated.",
    capabilities: [
      "Real-time search results from Google's index",
      "Enterprise API quotas and guaranteed uptime",
      "Advanced filtering and customization options",
      "Multi-region search data support"
    ],
    advantage: "100% accurate vs ~70% accuracy from scraped data"
  },
  {
    name: "Google Gemini AI Integration",
    icon: <Brain className="w-8 h-8 text-white" />,
    description: "Advanced AI-powered content analysis and blueprint generation using Google's state-of-the-art language model. Process complex SEO strategies in seconds, not hours.",
    capabilities: [
      "21-second comprehensive blueprint generation",
      "Advanced content structure optimization",
      "Competitive gap analysis and recommendations",
      "AI-powered content strategy insights"
    ],
    advantage: "21-second processing vs 2-4 hours manual analysis"
  },
  {
    name: "Google Knowledge Graph API",
    icon: <Globe className="w-8 h-8 text-white" />,
    description: "Tap into Google's vast knowledge database to understand entity relationships, semantic connections, and topical authority signals that drive modern search rankings.",
    capabilities: [
      "Entity relationship mapping and analysis",
      "Semantic content optimization guidance",
      "Topical authority assessment",
      "Knowledge panel optimization insights"
    ],
    advantage: "Semantic understanding vs keyword-only analysis"
  },
  {
    name: "Google Natural Language API",
    icon: <Target className="w-8 h-8 text-white" />,
    description: "Advanced text analysis including sentiment analysis, entity extraction, and content classification to optimize your content for both users and search engines.",
    capabilities: [
      "Advanced sentiment and emotion analysis",
      "Entity extraction and classification",
      "Content quality scoring and optimization",
      "Multi-language content analysis support"
    ],
    advantage: "AI-powered insights vs basic keyword density"
  }
]

const aiFeatures = [
  {
    title: "21-Second Blueprint Generation",
    icon: <Clock className="w-6 h-6 text-white" />,
    description: "Generate comprehensive content strategies in seconds using advanced AI analysis of top-ranking content and competitor gaps.",
    benefits: [
      "Comprehensive competitor analysis",
      "Content gap identification",
      "Optimal structure recommendations",
      "Semantic keyword suggestions"
    ],
    impact: "95% time savings vs manual research"
  },
  {
    title: "Intelligent Content Optimization",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    description: "AI-powered recommendations for content improvements based on real-time search trends and user intent analysis.",
    benefits: [
      "Real-time optimization suggestions",
      "User intent matching",
      "Content performance prediction",
      "A/B testing recommendations"
    ],
    impact: "40% improvement in content performance"
  },
  {
    title: "Automated Competitor Intelligence",
    icon: <Bot className="w-6 h-6 text-white" />,
    description: "Continuous monitoring and analysis of competitor strategies with automated alerts for significant changes.",
    benefits: [
      "24/7 competitor monitoring",
      "Strategy change detection",
      "Content gap opportunities",
      "Market trend analysis"
    ],
    impact: "Stay ahead of 90% of competitor moves"
  },
  {
    title: "Predictive Performance Scoring",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    description: "AI-powered predictions of content performance before publication using machine learning models trained on millions of data points.",
    benefits: [
      "Pre-publication performance estimates",
      "Risk assessment and mitigation",
      "Resource allocation optimization",
      "ROI predictions"
    ],
    impact: "Predict success with 85% accuracy"
  },
  {
    title: "Dynamic Strategy Adaptation",
    icon: <Workflow className="w-6 h-6 text-white" />,
    description: "Automatically adapt content strategies based on algorithm changes, market trends, and performance data.",
    benefits: [
      "Algorithm update responses",
      "Market trend adaptation",
      "Performance-based adjustments",
      "Strategic pivoting recommendations"
    ],
    impact: "Maintain rankings through updates"
  },
  {
    title: "Advanced Analytics & Insights",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    description: "Deep analytics powered by machine learning to uncover patterns and opportunities in your SEO data.",
    benefits: [
      "Pattern recognition in performance",
      "Opportunity identification",
      "Custom reporting and dashboards",
      "Predictive trend analysis"
    ],
    impact: "Identify 3x more opportunities"
  }
]

const collaborationFeatures = [
  {
    title: "Real-Time Blueprint Editing",
    icon: <Users className="w-5 h-5 text-white" />,
    description: "Multiple team members can simultaneously edit and refine content strategies with instant updates across all users."
  },
  {
    title: "Role-Based Permissions",
    icon: <Shield className="w-5 h-5 text-white" />,
    description: "Granular permission controls ensure team members have appropriate access levels for their responsibilities."
  },
  {
    title: "Workflow Management",
    icon: <Workflow className="w-5 h-5 text-white" />,
    description: "Streamlined approval processes, task assignment, and progress tracking for complex content projects."
  },
  {
    title: "Global Team Synchronization",
    icon: <Globe className="w-5 h-5 text-white" />,
    description: "WebSocket technology ensures instant synchronization across global teams with zero latency collaboration."
  }
]

const securityFeatures = [
  {
    title: "SOC 2 Type II Compliance",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Comprehensive security controls with independent third-party auditing and continuous compliance monitoring.",
    compliance: "Enterprise-grade security certification"
  },
  {
    title: "SSO & SAML Integration",
    icon: <Users className="w-6 h-6 text-white" />,
    description: "Seamless integration with enterprise identity providers including Active Directory, Okta, and Azure AD.",
    compliance: "Enterprise authentication standards"
  },
  {
    title: "Advanced Encryption",
    icon: <Globe className="w-6 h-6 text-white" />,
    description: "End-to-end encryption for data in transit and at rest with AES-256 encryption and TLS 1.3 protocols.",
    compliance: "Bank-level data protection"
  },
  {
    title: "Audit Logs & Monitoring",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    description: "Comprehensive audit trails with real-time security monitoring and automated threat detection.",
    compliance: "Complete security visibility"
  },
  {
    title: "GDPR & Privacy Compliance",
    icon: <Target className="w-6 h-6 text-white" />,
    description: "Full GDPR, CCPA, and regional privacy law compliance with data residency and deletion controls.",
    compliance: "Global privacy law compliance"
  },
  {
    title: "Multi-Region Deployment",
    icon: <Zap className="w-6 h-6 text-white" />,
    description: "Deploy in your preferred geographic regions with local data processing and compliance adherence.",
    compliance: "Regional data sovereignty"
  }
]

const traditionalLimitations = [
  "Relies on scraped data with ~70% accuracy",
  "Delayed data updates (hours to days)",
  "Limited team collaboration features",
  "No real-time editing capabilities",
  "High cost ($400-999+/month enterprise)",
  "No direct Google APIs integration",
  "Limited AI-powered insights",
  "Manual competitor analysis required"
]

const serpAdvantages = [
  "100% accurate Google-native data",
  "Real-time data updates from APIs",
  "Advanced WebSocket collaboration",
  "Live multi-user editing and comments",
  "80% cost savings vs traditional tools",
  "Direct Google APIs integration",
  "Advanced AI-powered insights",
  "Automated competitor intelligence"
]