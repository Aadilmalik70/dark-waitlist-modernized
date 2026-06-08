"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Users, Briefcase, Target, TrendingUp, Award, Zap, BarChart3, Shield } from "lucide-react"

export default function AgenciesPage() {
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
              {/* Agency badge */}
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                <span className="px-3 py-1 text-purple-300 text-sm font-medium">
                  🚀 White-Label SEO Platform for Agencies
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight">
                Scale Your Agency with Google-Native SEO Intelligence
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-10">
                Offer your clients the only SEO platform with 100% Google APIs integration. White-label SERP Strategist, add 30-50% profit margins, and deliver results that traditional tools can't match.
              </p>

              {/* Agency stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">30-50%</div>
                  <div className="text-gray-400">Profit Margin on Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">80%</div>
                  <div className="text-gray-400">Cost Savings vs Semrush</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100%</div>
                  <div className="text-gray-400">Google APIs Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$5K+</div>
                  <div className="text-gray-400">Average Monthly Revenue/Client</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  Start Agency Partnership
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  View Partner Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* White-Label Advantage */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Why Agencies Choose SERP Strategist
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The only white-label SEO platform with direct Google APIs integration that your competitors can't match
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage Over Traditional Tools</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">🎯 Google APIs vs Scraped Data</h4>
                    <p className="text-gray-300">Your clients get 100% accurate Google-native data while competitors struggle with 70% accuracy from scraped sources.</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">⚡ 21-Second Blueprint Generation</h4>
                    <p className="text-gray-300">Deliver comprehensive content strategies in seconds, not hours. Impress clients with speed and accuracy.</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">🏷️ Full White-Label Branding</h4>
                    <p className="text-gray-300">Your logo, your colors, your domain. Clients never know you're using a third-party platform.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">Revenue Model Calculator</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Platform Cost (Professional)</span>
                      <span className="font-semibold text-white">$299/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Client Pricing (Recommended)</span>
                      <span className="font-semibold text-green-400">$1,500-2,500/month</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between items-center">
                      <span className="text-gray-300 font-semibold">Monthly Profit per Client</span>
                      <span className="font-bold text-purple-400">$1,200-2,200</span>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3 mt-4">
                      <p className="text-sm text-purple-300">
                        💡 <strong>5 clients</strong> = $6,000-11,000 monthly profit
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Features */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Built for Agency Success
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Everything you need to scale your SEO services and delight your clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agencyFeatures.map((feature, index) => (
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

        {/* Partner Program */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Agency Partner Program
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join our exclusive partner network and unlock additional revenue streams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700 rounded-xl p-8 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Certified Partner</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                <p className="text-gray-300">Commission on referrals</p>
                <ul className="text-sm text-gray-400 mt-4 space-y-2">
                  <li>• Partner badge & certification</li>
                  <li>• Marketing co-op funds</li>
                  <li>• Priority support access</li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
                <Briefcase className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Elite Partner</h3>
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <p className="text-gray-300">Commission on referrals</p>
                <ul className="text-sm text-gray-300 mt-4 space-y-2">
                  <li>• Everything in Certified</li>
                  <li>• Dedicated partner manager</li>
                  <li>• Custom white-label setup</li>
                  <li>• Joint marketing opportunities</li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700 rounded-xl p-8 text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Strategic Partner</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
                <p className="text-gray-300">Commission + revenue share</p>
                <ul className="text-sm text-gray-400 mt-4 space-y-2">
                  <li>• Everything in Elite</li>
                  <li>• Revenue sharing program</li>
                  <li>• Product development input</li>
                  <li>• Exclusive territory rights</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing for Agencies */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Agency Pricing
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Scalable pricing that grows with your agency. All Google APIs included.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $299<span className="text-xl text-gray-400">/month</span>
                </div>
                <div className="text-purple-400 font-medium">Professional Plan (Recommended)</div>
                <div className="text-sm text-gray-400 mt-2">
                  Perfect for agencies with 2-15 clients
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">White-Label Features</h4>
                  <ul className="space-y-3">
                    {[
                      "Full Google APIs Suite Integration",
                      "Unlimited Blueprints & Analysis",
                      "Custom Branding & White-Label Reports",
                      "Client Dashboard & Portal Access",
                      "Advanced Team Collaboration",
                      "Priority Agency Support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Revenue Opportunities</h4>
                  <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-2">Recommended Client Pricing</div>
                    <div className="text-2xl font-bold text-green-400">$1,500-2,500/month</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Your Monthly Profit</div>
                    <div className="text-2xl font-bold text-purple-400">$1,200-2,200/client</div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Based on industry standard agency pricing for SEO platforms
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg">
                  Start Agency Trial
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Schedule Partner Demo
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Agency Success Stories
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how agencies are scaling with SERP Strategist and delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-800 rounded-xl p-6">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-400">{story.metric}</div>
                    <div className="text-sm text-gray-400">{story.metricLabel}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{story.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{story.description}</p>
                  <div className="text-sm text-purple-400 font-medium">{story.agency}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Ready to Scale Your Agency?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
                Join successful agencies using Google's native APIs to deliver superior results and increase profit margins by 30-50%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl text-lg shadow-lg">
                  Start Agency Partnership
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="px-8 py-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-xl text-lg">
                  Download Agency Kit
                </Button>
              </div>

              <p className="text-gray-400 text-sm">
                30-day agency trial • White-label setup included • Dedicated partner support
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const agencyFeatures = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Client Management Portal",
    description: "Dedicated client dashboards with branded reports, progress tracking, and communication tools for seamless client relationships.",
    benefit: "Streamline client communication"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "White-Label Reporting",
    description: "Fully customizable reports with your agency branding, client-specific insights, and automated delivery schedules.",
    benefit: "Professional client deliverables"
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Multi-Client Security",
    description: "Enterprise-grade data isolation, role-based access controls, and compliance features for managing multiple client accounts.",
    benefit: "Secure multi-tenant environment"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Automated Workflows",
    description: "Set up automated content analysis, report generation, and client notifications to scale your operations efficiently.",
    benefit: "Scale without proportional overhead"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Performance Analytics",
    description: "Track client success metrics, campaign performance, and ROI with detailed analytics and trend analysis.",
    benefit: "Demonstrate clear client value"
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Partner Support Program",
    description: "Dedicated agency support, marketing resources, sales training, and co-marketing opportunities to grow your business.",
    benefit: "Dedicated agency success"
  }
]

const successStories = [
  {
    metric: "300%",
    metricLabel: "Increase in Client Retention",
    title: "Digital Marketing Pro",
    description: "Reduced churn from 15% to 5% monthly by delivering superior SEO insights with Google APIs integration.",
    agency: "Mid-sized Marketing Agency, NYC"
  },
  {
    metric: "$180K",
    metricLabel: "Additional Annual Revenue",
    title: "SEO Services Expansion",
    description: "Added 12 new SEO clients at $1,500/month by offering unique Google-native analysis that competitors couldn't match.",
    agency: "Boutique SEO Agency, Austin"
  },
  {
    metric: "85%",
    metricLabel: "Reduction in Analysis Time",
    title: "Operational Efficiency Gain",
    description: "Cut content strategy development from 8 hours to 1.2 hours per client using automated blueprint generation.",
    agency: "Content Strategy Firm, Seattle"
  }
]