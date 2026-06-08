"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Zap, Link as LinkIcon, Settings, Globe, Code, Database, Cloud, Workflow, Bot, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function IntegrationsPage() {
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
              {/* Integrations badge */}
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="px-3 py-1 text-purple-300 text-sm font-medium">
                  🔗 200+ Enterprise Integrations
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight">
                Seamlessly Connect Your Entire Tech Stack
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-10">
                SERP Strategist integrates with your favorite tools and platforms, from Google's native APIs to enterprise software. Build automated workflows that save hours of manual work and keep your team in sync.
              </p>

              {/* Integration stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">200+</div>
                  <div className="text-gray-400">Integrations Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">4</div>
                  <div className="text-gray-400">Native Google APIs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">Enterprise</div>
                  <div className="text-gray-400">SSO & Identity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Real-time</div>
                  <div className="text-gray-400">Webhook Events</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo">
                  <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                    See Integrations Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Request Integration
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Google APIs Core */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Built on Google's Native APIs
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The only SEO platform with direct access to Google's data sources - our competitive advantage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {googleIntegrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {integration.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{integration.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
                    <div className="space-y-2">
                      {integration.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-purple-300 bg-purple-900/20 rounded px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Enterprise API Advantage</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-300">Data Accuracy</div>
                    <div className="text-sm text-gray-400">vs ~70% scraped data</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-300">API Uptime SLA</div>
                    <div className="text-sm text-gray-400">Enterprise guarantees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">Real-time</div>
                    <div className="text-gray-300">Data Updates</div>
                    <div className="text-sm text-gray-400">vs delayed crawling</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Integrations Categories */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Integration Categories
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Connect SERP Strategist with your existing workflow and favorite tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.tools.map((tool, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Integrations */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Enterprise & Identity Integrations
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Seamless enterprise authentication, security, and compliance integrations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Single Sign-On & Identity Management</h3>
                <div className="space-y-6">
                  {enterpriseIntegrations.map((integration, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {integration.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{integration.name}</h4>
                        <p className="text-gray-400">{integration.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {integration.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Enterprise Features</h4>
                  <div className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Security Certifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {securityCertifications.map((cert, index) => (
                      <div key={index} className="text-center p-3 bg-gray-700 rounded-lg">
                        <div className="text-2xl mb-2">{cert.icon}</div>
                        <div className="text-sm font-semibold text-white">{cert.name}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook & API Integration */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Powerful APIs & Webhooks
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Build custom integrations and automate workflows with our comprehensive API and webhook system. Perfect for enterprise teams who need deep customization.
                </p>
                
                <div className="space-y-6">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl">
                    View API Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-2">API Example</span>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Generate content blueprint
const response = await fetch('/api/blueprints', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    keyword: 'enterprise SEO tools',
    intent: 'commercial',
    market: 'B2B'
  })
});

const blueprint = await response.json();
console.log(blueprint.structure);

// Webhook payload example
{
  "event": "blueprint_generated",
  "data": {
    "id": "bp_12345",
    "keyword": "enterprise SEO tools",
    "processing_time": "21.3s",
    "status": "completed"
  }
}`}
                  </pre>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Marketplace Preview */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Popular Integrations
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Most-used integrations by our enterprise customers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {popularIntegrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{integration.icon}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm">{integration.name}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Don't see your tool? We add new integrations every month.</p>
              <Button variant="outline" className="px-6 py-3 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl">
                Request an Integration
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Ready to Connect Everything?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
                Experience seamless integrations with your existing tech stack. Start connecting SERP Strategist to your workflow today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/demo">
                  <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                    See Integrations Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/enterprise">
                  <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                    Enterprise Setup
                  </Button>
                </Link>
              </div>

              <p className="text-gray-400 text-sm">
                200+ integrations available • Enterprise API access • Custom webhook support
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const googleIntegrations = [
  {
    name: "Custom Search API",
    icon: <Zap className="w-8 h-8 text-white" />,
    description: "Direct access to Google's search index with enterprise SLAs",
    features: ["Real-time SERP data", "Enterprise quotas", "Multi-region support"]
  },
  {
    name: "Gemini AI",
    icon: <Bot className="w-8 h-8 text-white" />,
    description: "Advanced AI content analysis and blueprint generation",
    features: ["21-second processing", "Content optimization", "Strategy insights"]
  },
  {
    name: "Knowledge Graph",
    icon: <Globe className="w-8 h-8 text-white" />,
    description: "Entity relationships and semantic understanding",
    features: ["Entity mapping", "Semantic analysis", "Topic authority"]
  },
  {
    name: "Natural Language",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    description: "Advanced text analysis and sentiment processing",
    features: ["Sentiment analysis", "Entity extraction", "Quality scoring"]
  }
]

const integrationCategories = [
  {
    name: "Content Management",
    icon: <Database className="w-6 h-6 text-white" />,
    description: "Connect with your CMS and content creation tools",
    tools: [
      "WordPress & Webflow",
      "Ghost & Contentful", 
      "Notion & Obsidian",
      "Google Docs & Sheets"
    ]
  },
  {
    name: "Team Collaboration",
    icon: <Workflow className="w-6 h-6 text-white" />,
    description: "Integrate with your team's communication and project management tools",
    tools: [
      "Slack & Microsoft Teams",
      "Asana & Trello",
      "Monday.com & ClickUp",
      "Jira & Linear"
    ]
  },
  {
    name: "Analytics & Reporting",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    description: "Connect with analytics platforms and reporting tools",
    tools: [
      "Google Analytics 4",
      "Search Console",
      "Looker & Tableau",
      "HubSpot & Salesforce"
    ]
  },
  {
    name: "Marketing Automation",
    icon: <Bot className="w-6 h-6 text-white" />,
    description: "Integrate with marketing automation and CRM platforms",
    tools: [
      "HubSpot & Marketo",
      "Mailchimp & ConvertKit",
      "Pardot & ActiveCampaign",
      "Zapier & Make.com"
    ]
  },
  {
    name: "Developer Tools",
    icon: <Code className="w-6 h-6 text-white" />,
    description: "Connect with development and deployment tools",
    tools: [
      "GitHub & GitLab",
      "Vercel & Netlify",
      "Jenkins & CircleCI",
      "Docker & Kubernetes"
    ]
  },
  {
    name: "Cloud Storage",
    icon: <Cloud className="w-6 h-6 text-white" />,
    description: "Integrate with cloud storage and file sharing platforms",
    tools: [
      "Google Drive & Dropbox",
      "OneDrive & Box",
      "AWS S3 & Azure Blob",
      "Airtable & SmartSheet"
    ]
  }
]

const enterpriseIntegrations = [
  {
    name: "Single Sign-On (SSO)",
    icon: <Settings className="w-5 h-5 text-white" />,
    description: "SAML 2.0 and OAuth integration with enterprise identity providers",
    features: ["SAML 2.0", "OAuth 2.0", "Multi-factor Auth", "Just-in-time Provisioning"]
  },
  {
    name: "Active Directory",
    icon: <Database className="w-5 h-5 text-white" />,
    description: "Seamless integration with Microsoft Active Directory and Azure AD",
    features: ["User Sync", "Group Mapping", "Conditional Access", "Hybrid Identity"]
  },
  {
    name: "Identity Providers",
    icon: <Globe className="w-5 h-5 text-white" />,
    description: "Support for major enterprise identity providers",
    features: ["Okta", "Ping Identity", "Auth0", "OneLogin"]
  },
  {
    name: "Compliance & Audit",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    description: "Comprehensive audit logging and compliance reporting",
    features: ["Audit Trails", "Compliance Reports", "Data Residency", "Retention Policies"]
  }
]

const enterpriseFeatures = [
  "SOC 2 Type II Compliance",
  "GDPR & CCPA Ready",
  "Advanced Encryption (AES-256)",
  "Role-based Access Control",
  "Multi-region Deployment",
  "24/7 Enterprise Support",
  "Custom SLA Agreements",
  "Dedicated Account Manager"
]

const securityCertifications = [
  { name: "SOC 2", icon: "🛡️" },
  { name: "ISO 27001", icon: "🔒" },
  { name: "GDPR", icon: "🇪🇺" },
  { name: "HIPAA", icon: "🏥" }
]

const apiFeatures = [
  {
    title: "RESTful API",
    icon: <Code className="w-5 h-5 text-white" />,
    description: "Comprehensive REST API with full CRUD operations and enterprise rate limits"
  },
  {
    title: "Webhook Events",
    icon: <LinkIcon className="w-5 h-5 text-white" />,
    description: "Real-time webhook notifications for blueprint completion, team updates, and system events"
  },
  {
    title: "GraphQL Support",
    icon: <Database className="w-5 h-5 text-white" />,
    description: "Flexible GraphQL endpoint for custom data queries and efficient data fetching"
  },
  {
    title: "SDK & Libraries",
    icon: <Settings className="w-5 h-5 text-white" />,
    description: "Official SDKs for JavaScript, Python, PHP, and other popular programming languages"
  }
]

const popularIntegrations = [
  { name: "Slack", icon: "💬" },
  { name: "Google Workspace", icon: "📧" },
  { name: "Notion", icon: "📝" },
  { name: "Zapier", icon: "⚡" },
  { name: "HubSpot", icon: "🎯" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Webflow", icon: "🌐" },
  { name: "WordPress", icon: "🔧" },
  { name: "Airtable", icon: "📊" },
  { name: "Trello", icon: "📋" },
  { name: "GitHub", icon: "🐙" },
  { name: "Asana", icon: "✅" }
]