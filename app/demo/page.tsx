"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, ArrowRight, Zap, Users, BarChart3, Clock, Check, Star } from "lucide-react"
import { useState } from "react"

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("blueprint")

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
              {/* Demo badge */}
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="px-3 py-1 text-purple-300 text-sm font-medium">
                  ⚡ Live Product Demo
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight">
                Experience Google APIs in Action
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-10">
                See how SERP Strategist leverages Google's native APIs to deliver 100% accurate SEO intelligence in just 21 seconds. Watch the platform generate comprehensive content blueprints that traditional tools simply cannot match.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">21 sec</div>
                  <div className="text-gray-400">Blueprint Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-gray-400">Google APIs Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">4 APIs</div>
                  <div className="text-gray-400">Google Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Real-time</div>
                  <div className="text-gray-400">Team Collaboration</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live Demo
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Interactive Platform Demo
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Explore the key features that make SERP Strategist the only Google-native SEO platform
              </p>
            </div>

            {/* Demo Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-gray-700 rounded-2xl p-8 md:p-12">
              {activeTab === "blueprint" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">21-Second Blueprint Generation</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Google Custom Search Analysis</h4>
                          <p className="text-gray-400">Analyze top-ranking content with 100% Google-native data</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Gemini AI Processing</h4>
                          <p className="text-gray-400">AI-powered content structure and optimization recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Knowledge Graph Integration</h4>
                          <p className="text-gray-400">Entity relationships and semantic analysis from Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                      <p className="text-purple-300 text-sm">
                        <Clock className="w-4 h-4 inline mr-2" />
                        <strong>Average processing time: 21 seconds</strong> (vs 2-4 hours manual analysis)
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm ml-2">Blueprint Generator</span>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="text-green-400">✓ Analyzing Google search results...</div>
                        <div className="text-green-400">✓ Processing with Gemini AI...</div>
                        <div className="text-green-400">✓ Extracting entity relationships...</div>
                        <div className="text-purple-400">▶ Blueprint generated in 21.3 seconds</div>
                        <div className="bg-gray-700 rounded p-3 mt-4">
                          <div className="text-white font-semibold">Content Blueprint: "AI SEO Tools for Enterprise"</div>
                          <div className="text-gray-300 text-xs mt-2">
                            H1: Best AI SEO Tools for Enterprise Teams<br/>
                            H2: Google APIs vs Traditional Tools<br/>
                            H3: Enterprise Features Comparison<br/>
                            Content Gap: Real-time collaboration features
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "collaboration" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Real-time Team Collaboration</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">WebSocket Technology</h4>
                          <p className="text-gray-400">Real-time collaboration with instant updates across all team members</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <BarChart3 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">Live Blueprint Editing</h4>
                          <p className="text-gray-400">Multiple users can edit and refine content strategies simultaneously</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">Instant Notifications</h4>
                          <p className="text-gray-400">Team members get notified of changes, comments, and updates in real-time</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                      <p className="text-blue-300 text-sm">
                        <Users className="w-4 h-4 inline mr-2" />
                        <strong>Unlimited team members</strong> with role-based permissions and workspace management
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">SM</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">Sarah Miller</div>
                          <div className="text-gray-400 text-sm">Updated blueprint structure</div>
                        </div>
                        <div className="text-gray-400 text-xs">2m ago</div>
                      </div>
                      <div className="text-sm text-gray-300 bg-gray-700 rounded p-2">
                        Added H3 section about "Enterprise Security Features" based on keyword gap analysis
                      </div>
                    </Card>
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">DJ</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">David Johnson</div>
                          <div className="text-gray-400 text-sm">Added competitive analysis</div>
                        </div>
                        <div className="text-gray-400 text-xs">5m ago</div>
                      </div>
                      <div className="text-sm text-gray-300 bg-gray-700 rounded p-2">
                        Competitors (Semrush, Ahrefs) lack Google APIs integration - major differentiator
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "apis" && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Google APIs Integration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {googleApis.map((api, index) => (
                      <Card key={index} className="bg-gray-800 border-gray-700 p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                          {api.icon}
                        </div>
                        <h4 className="font-semibold text-white mb-2">{api.name}</h4>
                        <p className="text-gray-400 text-sm mb-3">{api.description}</p>
                        <div className="text-xs text-purple-400 font-medium">{api.benefit}</div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30">
                    <h4 className="text-lg font-bold text-white mb-3">vs. Traditional Tools (Scraped Data)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-gray-300">Data Accuracy</div>
                        <div className="text-gray-400 text-xs">vs ~70% scraped</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">Real-time</div>
                        <div className="text-gray-300">Data Updates</div>
                        <div className="text-gray-400 text-xs">vs delayed crawling</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">Enterprise</div>
                        <div className="text-gray-300">SLA Guarantees</div>
                        <div className="text-gray-400 text-xs">vs variable availability</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "dashboard" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Enterprise Dashboard</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-white mb-4">Content Performance Analytics</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                            <span className="text-gray-300">AI SEO Tools Enterprise Guide</span>
                            <span className="text-green-400 font-semibold">Ranking #3 ↑</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                            <span className="text-gray-300">Google APIs vs Scraped Data</span>
                            <span className="text-blue-400 font-semibold">Ranking #1 ➡️</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                            <span className="text-gray-300">Enterprise Team Collaboration</span>
                            <span className="text-purple-400 font-semibold">Ranking #5 ↗️</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div>
                      <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-white mb-4">Team Activity</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">5 team members online</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300">12 blueprints this week</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">3 reports generated</span>
                          </div>
                        </div>
                      </Card>
                      <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6 mt-4">
                        <h4 className="font-semibold text-white mb-4">Google APIs Status</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Custom Search</span>
                            <span className="text-green-400">✓ Active</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Gemini AI</span>
                            <span className="text-green-400">✓ Active</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Knowledge Graph</span>
                            <span className="text-green-400">✓ Active</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Natural Language</span>
                            <span className="text-green-400">✓ Active</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                What Our Users Say
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See why teams choose SERP Strategist for their SEO strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </Card>
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
                Ready to Try SERP Strategist?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
                Experience the power of Google's native APIs in your SEO strategy. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Schedule Personal Demo
                </Button>
              </div>

              <p className="text-gray-400 text-sm">
                30-day free trial • No credit card required • Full Google APIs access
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const demoTabs = [
  {
    id: "blueprint",
    title: "Blueprint Generator",
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    icon: <Users className="w-4 h-4" />
  },
  {
    id: "apis",
    title: "Google APIs",
    icon: <BarChart3 className="w-4 h-4" />
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Play className="w-4 h-4" />
  }
]

const googleApis = [
  {
    name: "Custom Search",
    description: "Direct access to Google's search index",
    icon: <Zap className="w-6 h-6 text-white" />,
    benefit: "100% accurate SERP data"
  },
  {
    name: "Gemini AI",
    description: "Advanced AI content analysis",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    benefit: "21-second processing"
  },
  {
    name: "Knowledge Graph",
    description: "Entity relationships & semantic data",
    icon: <Users className="w-6 h-6 text-white" />,
    benefit: "Semantic understanding"
  },
  {
    name: "Natural Language",
    description: "Advanced text analysis & sentiment",
    icon: <Check className="w-6 h-6 text-white" />,
    benefit: "Content optimization"
  }
]

const testimonials = [
  {
    quote: "SERP Strategist's Google APIs integration gives us data accuracy that Semrush simply can't match. Our content strategy has never been more effective.",
    name: "Sarah Chen",
    role: "Head of SEO",
    company: "TechCorp"
  },
  {
    quote: "The 21-second blueprint generation is incredible. What used to take our team hours now takes minutes, and the quality is actually better.",
    name: "Marcus Rodriguez",
    role: "Content Director",
    company: "GrowthLab"
  },
  {
    quote: "Real-time collaboration features have transformed how our global team works together. Everyone stays in sync effortlessly.",
    name: "Emily Watson",
    role: "Marketing Manager",
    company: "ScaleUp Inc"
  }
]