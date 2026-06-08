"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, TrendingUp, BarChart3, Heart, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Kourosh Ghaffari",
    handle: "@BuildingWaves",
    avatar: "KG",
    content: "My current favorite SaaS tool is @outrank_so. It's also my biggest expense. If they doubled prices tomorrow, I would not bat an eye and pay instantly.",
    date: "Jul 31, 2025",
    likes: 4,
    verified: true
  },
  {
    name: "Alexander Belogubov",
    handle: "@AlexBelogubov", 
    avatar: "AB",
    content: "Thanks @eugZolotarenko and @tibo_maker. You have created an incredible product @outrank_so 🔥",
    date: "Jul 13, 2025",
    likes: 28,
    verified: true,
    metric: {
      label: "Domain Rating",
      value: "31",
      change: "+6",
      chart: true
    }
  },
  {
    name: "Benny",
    handle: "@bennyqp",
    avatar: "BE",
    content: "@tibo_maker and @eugZolotarenko actually delivered: DR jumped from 5 to 25 in just 49 days. All I did was set up the blog, literally nothing else. So yeah, if you're looking to boost DR, definitely worth it!",
    date: "Jul 23, 2025",
    likes: 9,
    verified: true,
    chart: true
  },
  {
    name: "Talha",
    handle: "@royalty568",
    avatar: "TA",
    content: "Despite having bad experiences with similar tools, I decided to give Outrank a try for PDF&strify.com since Tibo was very confident about his product. After 20 days, here is my honest feedback: The backlink exchange program is the absolute killer feature however... 🔗",
    date: "Jun 18, 2025",
    likes: 1,
    verified: true
  },
  {
    name: "OKZest",
    handle: "@okzest",
    avatar: "OK",
    content: "I just wanted to say, we have been using Outrank for a few weeks now and the results have been amazing!!! This graph shows the number of impressions we are getting in Google. We had a 'hockey stick' moment from when we started using Outrank! We are excited to see this growth 🚀",
    date: "Mar 3, 2025",
    likes: 1,
    verified: true,
    chart: true,
    rating: 5
  },
  {
    name: "Dan",
    handle: "@brandboydan",
    avatar: "DA",
    content: "I've always neglected SEO, especially since most of my business comes from X & LI. I saw Outrank from Tibo and thought it seemed pretty risk free to try and I actually stopped paying any attention to it too (it automatically posts blogs). Safe to say it's going pretty well 😍",
    date: "Jul 2, 2025",
    likes: 17,
    verified: true,
    chart: true
  }
]

const examples = [
  {
    title: "10 Document Management Best Practices to Improve Your Work",
    platform: "Documind",
    category: "Listicle",
    description: "Taming the Document Deluge - Documents drive most modern work. From academic papers and legal documents to patient files and marketing materials, the effective handling of information is critical for success."
  },
  {
    title: "How to Monetize Twitter: Proven Strategies for Content Creators",
    platform: "SuperX",
    category: "Guide", 
    description: "Complete monetization strategies for Twitter creators, covering sponsorships, affiliate marketing, and audience building techniques."
  },
  {
    title: "Top 9 AI Video Generators: Transform Your Vision into Reality",
    platform: "revid.ai",
    category: "Tools Listicle",
    description: "Comprehensive review of the best AI video generation tools, their features, pricing, and use cases for content creators."
  }
]

export function TestimonialsModern() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
            WRITING EXAMPLES
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">AI-generated content that </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              humans love to read.
            </span>
          </h2>
          <div className="text-2xl text-white/60 mt-4">↗ Check examples</div>
        </div>

        {/* Featured Examples */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {example.platform}
                  </Badge>
                  <Badge variant="outline" className="text-white/60 border-white/20">
                    {example.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {example.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {example.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-white/40">
                    Check out the Outrank blog where All Articles are generated with Outrank:
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 px-4 py-2">
            Visit Our Blog
          </Badge>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Loved by </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Busy Entrepreneurs!
            </span>
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 break-inside-avoid hover:border-purple-400/20 transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{testimonial.name}</span>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <span className="text-white/60 text-sm">{testimonial.handle}</span>
                    </div>
                  </div>
                  <span className="text-2xl">𝕏</span>
                </div>

                {/* Content */}
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                )}

                {/* Metric */}
                {testimonial.metric && (
                  <div className="bg-black/30 rounded-lg p-3 mb-4">
                    <div className="text-center">
                      <div className="text-white/60 text-xs mb-1">{testimonial.metric.label}</div>
                      <div className="text-2xl font-bold text-white">
                        {testimonial.metric.value}
                        <span className="text-green-400 text-sm ml-1">{testimonial.metric.change}</span>
                      </div>
                    </div>
                    {testimonial.metric.chart && (
                      <div className="mt-2 h-8 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded flex items-end justify-center">
                        <div className="text-xs text-green-300">📈</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Chart for visual testimonials */}
                {testimonial.chart && !testimonial.metric && (
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-white/40 text-xs">
                  <span>{testimonial.date}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{testimonial.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="text-center mt-12">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-6 py-3">
            💬 Testimonial
          </Badge>
        </div>
      </div>
    </section>
  )
}
