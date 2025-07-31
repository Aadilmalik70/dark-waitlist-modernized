import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalyticsClient from '@/components/GoogleAnalyticsClient'
import { Analytics } from '@vercel/analytics/react'
import { WebsiteSchema, DEFAULT_SEO_CONFIG } from '@/components/seo'
import PerformanceMonitor from '@/components/client/PerformanceMonitor'
import { AppHead } from '@/components/layout/AppHead'
import { AppBody } from '@/components/layout/AppBody'

const inter = Inter({ subsets: ['latin'] })

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-EXAMPLE123456'

export const metadata: Metadata = {
  title: {
    default: 'SERP Strategist | Agentic AI Content Blueprints for Search Dominance',
    template: '%s | SERP Strategist'
  },
  description: 'Go beyond keywords with innovative AI agents that perform deep competitive research and generate unparalleled content blueprints to outrank your competition.',
  keywords: [
    'SEO strategy',
    'content marketing', 
    'SERP optimization',
    'AI content creation',
    'search engine rankings',
    'digital marketing',
    'competitive research',
    'content blueprints'
  ],
  authors: [{ name: 'SERP Strategist Team' }],
  creator: 'SERP Strategist',
  publisher: 'SERP Strategist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://serpstrategist.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL || 'https://serpstrategist.com',
    title: 'SERP Strategist | Agentic AI Content Blueprints for Search Dominance',
    description: 'Go beyond keywords with innovative AI agents that perform deep competitive research and generate unparalleled content blueprints to outrank your competition.',
    siteName: 'SERP Strategist',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SERP Strategist - AI-Powered SEO Strategy Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERP Strategist | Agentic AI Content Blueprints for Search Dominance',
    description: 'Go beyond keywords with innovative AI agents that perform deep competitive research and generate unparalleled content blueprints to outrank your competition.',
    site: '@serpstrategist',
    creator: '@serpstrategist',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: { bing: process.env.BING_VERIFICATION || '' },
  },
  category: 'technology',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = DEFAULT_SEO_CONFIG.siteUrl;

  return (
    <html lang="en" className="scroll-smooth">
      <AppHead siteUrl={siteUrl} />
      <AppBody 
        siteUrl={siteUrl}
        measurementId={GA_MEASUREMENT_ID}
        className={inter.className}
      >
        {children}
      </AppBody>
    </html>
  )
}
