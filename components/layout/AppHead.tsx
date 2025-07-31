import { WebsiteSchema, DEFAULT_SEO_CONFIG } from '@/components/seo'

interface AppHeadProps {
  siteUrl: string
}

export function AppHead({ siteUrl }: AppHeadProps) {
  return (
    <head>
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preload critical fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
        rel="stylesheet"
      />
      
      {/* Viewport and mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Website Schema Markup */}
      <WebsiteSchema 
        siteUrl={siteUrl}
        siteName={DEFAULT_SEO_CONFIG.siteName}
        description="Go beyond keywords with innovative AI agents that perform deep competitive research and generate unparalleled content blueprints to outrank your competition."
      />
      
      {/* Additional JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            "name": "SERP Strategist",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "description": "Go beyond keywords with innovative AI agents that perform deep competitive research and generate unparalleled content blueprints to outrank your competition.",
            "foundingDate": "2024",
            "areaServed": "Worldwide",
            "serviceType": "SEO Consulting and Content Strategy",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@serpstrategist.com",
              "availableLanguage": ["English"]
            },
            "sameAs": DEFAULT_SEO_CONFIG.socialLinks,
            "knowsAbout": [
              "Search Engine Optimization",
              "Content Marketing",
              "SERP Analysis",
              "Digital Marketing Strategy",
              "AI Content Creation",
              "Competitive Research"
            ],
            "offers": {
              "@type": "Service",
              "serviceType": "SEO Strategy and Content Optimization",
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Strategy Development",
                      "description": "Comprehensive SEO strategy and content planning"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Content Optimization",
                      "description": "AI-powered content optimization for search rankings"
                    }
                  }
                ]
              }
            }
          }, null, 2)
        }}
      />
      
      {/* Breadcrumb Schema for Site Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${siteUrl}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Tools",
                "item": `${siteUrl}/tools`
              }
            ]
          }, null, 2)
        }}
      />
    </head>
  )
}
