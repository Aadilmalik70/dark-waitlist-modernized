"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, FileText, Image as ImageIcon, Globe, Zap, Calendar, BarChart3, Users, Palette, Target, CheckCircle } from "lucide-react"

const features = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Automate SEO analysis and keyword research",
    description: "Analyze and find the best keywords in your niche. Create quality articles daily matching your business goals. Generate keywords yourself anytime.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    mockup: (
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/20">
        <div className="text-sm text-blue-300 mb-2 font-medium">Automatically created Content Plan</div>
        <div className="grid grid-cols-7 gap-1 text-xs">
          <div className="text-blue-200 text-center p-1">January 2025</div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div className="bg-blue-500/30 text-blue-100 p-2 rounded text-center">Mon 6</div>
          <div className="bg-green-500/30 text-green-100 p-2 rounded text-center">Tue 7</div>
          <div className="bg-purple-500/30 text-purple-100 p-2 rounded text-center">Wed 8</div>
          <div className="bg-pink-500/30 text-pink-100 p-2 rounded text-center">Thu 9</div>
          <div className="bg-orange-500/30 text-orange-100 p-2 rounded text-center">Fri 10</div>
          <div className="bg-cyan-500/30 text-cyan-100 p-2 rounded text-center">Sat 11</div>
          <div className="bg-red-500/30 text-red-100 p-2 rounded text-center">Sun 12</div>
        </div>
      </div>
    )
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Create content that naturally ranks",
    description: "Get SEO-ready articles that read naturally, based on powerful keywords. Every piece automatically includes strategic internal or external links.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    mockup: (
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-purple-400/20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">How to Write SEO Content That Ranks:</div>
            <div className="text-xs text-white/60">A Comprehensive Guide</div>
          </div>
          <Badge className="ml-auto bg-green-500/20 text-green-300 border-green-500/30">SEO score</Badge>
        </div>
        
        <div className="bg-black/30 p-3 rounded border border-white/10 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-white/80">Power keywords</span>
          </div>
          <div className="text-xs text-white/60">
            Someone searching for "how to grind coffee beans" wants information, requiring content with step-by-step instructions and helpful tips. You might be interested in <span className="text-purple-300 underline">how to master search engine keywords</span>.
          </div>
        </div>
        
        <div className="text-xs text-purple-300 italic">Automatic internal linking ↗</div>
      </div>
    )
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Write articles that sound like you",
    description: "Create articles that follow your established content style. Share your published pieces and watch us match your unique voice.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    mockup: (
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-500/30 text-green-200 border-green-400/30">Study content</Badge>
          <span className="text-sm text-green-300">→ Mimic your article style</span>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-green-100 font-medium">Your 3 Examples Articles</div>
          <div className="space-y-1">
            <div className="bg-black/20 p-2 rounded text-xs text-green-200">https://yourbusiness.com/example1/</div>
            <div className="bg-black/20 p-2 rounded text-xs text-green-200">https://yourbusiness.com/example2/</div>
            <div className="bg-black/20 p-2 rounded text-xs text-green-200 bg-green-500/20 border border-green-400/30">https://yourbusiness.com/example3/</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-300">
            <CheckCircle className="h-3 w-3" />
            <span>Write similar</span>
          </div>
        </div>
        
        <div className="text-xs text-green-300 mt-2 italic">Learn my style</div>
      </div>
    )
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Generate on-brand images",
    description: "Enrich articles with unique visuals. Choose styles and add brand colors. We auto-insert them into content & as featured images.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    mockup: (
      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/20">
        <div className="text-xs text-orange-300 mb-3">Choose your style</div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gradient-to-br from-purple-400 to-pink-400 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-medium">Realism</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-400 to-blue-400 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-medium">Cinematic Realism</span>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-400 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-medium">Illustration</span>
          </div>
          <div className="bg-gradient-to-br from-violet-500 to-purple-500 aspect-square rounded-lg flex items-center justify-center border-2 border-orange-400">
            <span className="text-xs text-white font-medium">Brand & Text Realism</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded bg-purple-500"></div>
          <span className="text-orange-200">#8B2AF</span>
          <span className="text-orange-300 ml-auto">Personalize with brand color ↗</span>
        </div>
      </div>
    )
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Publish content on auto-pilot",
    description: "Set up once and forget about manual work. Integrates with WordPress, Webflow, Shopify, Notion, Wix, Framer and many other platforms.",
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-500/10 to-purple-500/10",
    mockup: (
      <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-4 rounded-lg border border-violet-500/20">
        <div className="text-xs text-violet-300 mb-3">Create integration</div>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-green-500/20 p-2 rounded flex flex-col items-center text-xs text-center">
            <div className="w-6 h-6 bg-green-500 rounded mb-1"></div>
            <span className="text-green-300">Shopify</span>
          </div>
          <div className="bg-purple-500/20 p-2 rounded flex flex-col items-center text-xs text-center">
            <div className="w-6 h-6 bg-purple-500 rounded mb-1"></div>
            <span className="text-purple-300">Notion</span>
          </div>
          <div className="bg-orange-500/20 p-2 rounded flex flex-col items-center text-xs text-center">
            <div className="w-6 h-6 bg-orange-500 rounded mb-1"></div>
            <span className="text-orange-300">Wix</span>
          </div>
        </div>
        
        <div className="bg-black/30 p-2 rounded border border-white/10 mb-2">
          <div className="text-xs text-white/80 mb-1">Custom API</div>
          <div className="text-xs text-white/60">https://yourbusiness.com/</div>
        </div>
        
        <div className="flex items-center gap-2 text-xs">
          <span className="text-violet-300">webflow</span>
          <span className="text-blue-300">WordPress</span>
          <span className="text-gray-300">Framer</span>
        </div>
        
        <Button size="sm" className="w-full mt-2 bg-black/30 text-violet-300 text-xs h-6">
          Create New Integration
        </Button>
      </div>
    )
  }
]

export function FeaturesModern() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white mb-6">
            FEATURES
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Unlock your </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              SEO growth
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get new SEO-optimized articles daily, effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center`}>
                      <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r ${feature.color} hover:opacity-90 text-white font-semibold`}
                  >
                    Start for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Mockup */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    {feature.mockup}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
