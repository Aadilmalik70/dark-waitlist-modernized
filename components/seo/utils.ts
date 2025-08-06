// SEO utilities for dynamic schema generation and optimization

export interface SEOConfig {
  siteName: string
  siteUrl: string
  defaultImage: string
  logo: string
  socialLinks: string[]
  author: {
    name: string
    email: string
    twitter?: string
  }
}

export const DEFAULT_SEO_CONFIG: SEOConfig = {
  siteName: 'SERP Strategist',
  siteUrl: process.env.SITE_URL || 'https://serpstrategist.com',
  defaultImage: '/default-og-image.jpg',
  logo: '/logo.png',
  socialLinks: [
    'https://twitter.com/serpstrategist',
    'https://linkedin.com/company/serpstrategist',
    'https://facebook.com/serpstrategist'
  ],
  author: {
    name: 'SERP Strategist Team',
    email: 'hello@serpstrategist.com',
    twitter: '@serpstrategist'
  }
}

// Generate canonical URL
export function generateCanonicalUrl(path: string, baseUrl?: string): string {
  const base = baseUrl || DEFAULT_SEO_CONFIG.siteUrl
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleanPath}`
}

// Generate Open Graph image URL
export function generateOGImageUrl(
  title: string, 
  description?: string,
  baseUrl?: string
): string {
  const base = baseUrl || DEFAULT_SEO_CONFIG.siteUrl
  const params = new URLSearchParams({
    title: title.slice(0, 100),
    ...(description && { description: description.slice(0, 200) })
  })
  return `${base}/api/og?${params.toString()}`
}

// Extract reading time from content
export function calculateReadingTime(content: any[]): number {
  if (!content) return 0
  
  const wordsPerMinute = 200
  const wordCount = content.reduce((count, block) => {
    if (block._type === 'block' && block.children) {
      const text = block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join(' ')
      return count + text.split(/\s+/).filter(word => word.length > 0).length
    }
    return count
  }, 0)
  
  return Math.ceil(wordCount / wordsPerMinute)
}

// Generate meta description from content
export function generateMetaDescription(
  content: any[], 
  maxLength: number = 160
): string {
  if (!content) return ''
  
  const textBlocks = content.filter(block => block._type === 'block')
  if (textBlocks.length === 0) return ''
  
  const firstParagraph = textBlocks[0].children
    ?.filter((child: any) => child._type === 'span')
    .map((child: any) => child.text)
    .join(' ') || ''
  
  if (firstParagraph.length <= maxLength) return firstParagraph
  
  const truncated = firstParagraph.slice(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...'
}

// Extract keywords from content
export function extractKeywords(content: any[], title: string): string[] {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 
    'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have',
    'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
    'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they'
  ])
  
  const allText = [
    title,
    ...content
      .filter(block => block._type === 'block')
      .map(block => block.children
        ?.filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join(' ')
      )
  ].join(' ')
  
  const words = allText
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.has(word))
  
  const wordCount = words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1
    return count
  }, {} as Record<string, number>)
  
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word)
}

// Generate structured data for search engines
export function generateBlogPostStructuredData(post: any, author: any, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || generateMetaDescription(post.content),
    image: post.featuredImage?.url || `${siteUrl}/default-blog-image.jpg`,
    author: {
      '@type': 'Person',
      name: author.name,
      url: `${siteUrl}/authors/${author.slug}`
    },
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SEO_CONFIG.siteName,
      logo: `${siteUrl}${DEFAULT_SEO_CONFIG.logo}`
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: extractKeywords(post.content, post.title).join(', '),
    wordCount: post.content ? post.content.length : undefined,
    timeRequired: `PT${calculateReadingTime(post.content)}M`
  }
}

// Validate structured data
export function validateStructuredData(data: object): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  try {
    const jsonString = JSON.stringify(data)
    JSON.parse(jsonString)
  } catch (error) {
    errors.push('Invalid JSON structure')
    return { isValid: false, errors }
  }
  
  // Check required Schema.org properties
  const schemaData = data as any
  if (!schemaData['@context']) {
    errors.push('Missing @context property')
  }
  
  if (!schemaData['@type']) {
    errors.push('Missing @type property')
  }
  
  // Additional validation based on schema type
  if (schemaData['@type'] === 'BlogPosting') {
    if (!schemaData.headline) errors.push('BlogPosting missing headline')
    if (!schemaData.author) errors.push('BlogPosting missing author')
    if (!schemaData.datePublished) errors.push('BlogPosting missing datePublished')
  }
  
  return { isValid: errors.length === 0, errors }
}

// Generate sitemap entries for blog posts
export function generateSitemapEntry(url: string, lastModified?: string, priority?: number) {
  return {
    url,
    lastModified: lastModified || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: priority || 0.8
  }
}

// Performance monitoring for schema markup
export function logSchemaPerformance(schemaType: string, renderTime: number) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Schema ${schemaType} rendered in ${renderTime}ms`)
  }

  // In production, send to analytics only on client
  if (typeof window !== 'undefined') {
    // Use a microtask to ensure this runs after render, avoiding SSR issues
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', 'schema_render', {
          schema_type: schemaType,
          render_time: renderTime
        });
      }
    }, 0);
  }
}
