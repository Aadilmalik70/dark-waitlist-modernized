import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/google-analytics'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

// Google Analytics Measurement ID - would typically come from environment variables
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-EXAMPLE123456'

export const metadata: Metadata = {
  title: 'SERP Strategist | AI Content Strategy for Search Dominance',
  description: 'Create content that dominates search results with AI-powered content strategy and competitor analysis',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        {children}
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
