import { BlogPostSchema } from './BlogPostSchema'
import { BlogListSchema } from './BlogListSchema'
import { WebsiteSchema } from './WebsiteSchema'
import { AuthorSchema } from './AuthorSchema'
import { FAQSchema } from './FAQSchema'
import { HowToSchema } from './HowToSchema'
import { BreadcrumbSchema } from './BreadcrumbSchema'
import { ReviewSchema } from './ReviewSchema'
import { VideoSchema } from './VideoSchema'
import { CourseSchema } from './CourseSchema'
import { EventSchema } from './EventSchema'
import { 
  DEFAULT_SEO_CONFIG, 
  generateCanonicalUrl, 
  generateOGImageUrl,
  calculateReadingTime,
  generateMetaDescription,
  extractKeywords,
  validateStructuredData
} from './utils'

export {
  BlogPostSchema,
  BlogListSchema,
  WebsiteSchema,
  AuthorSchema,
  FAQSchema,
  HowToSchema,
  BreadcrumbSchema,
  ReviewSchema,
  VideoSchema,
  CourseSchema,
  EventSchema,
  DEFAULT_SEO_CONFIG,
  generateCanonicalUrl,
  generateOGImageUrl,
  calculateReadingTime,
  generateMetaDescription,
  extractKeywords,
  validateStructuredData
}

// Schema type definitions for better TypeScript support
export type SchemaType = 
  | 'BlogPosting'
  | 'Blog'
  | 'WebSite'
  | 'Person'
  | 'FAQPage'
  | 'HowTo'
  | 'BreadcrumbList'
  | 'Review'
  | 'VideoObject'
  | 'Course'
  | 'Event'

// Utility function to validate schema
export function validateSchema(schema: object): boolean {
  try {
    const schemaString = JSON.stringify(schema)
    JSON.parse(schemaString)
    return true
  } catch (error) {
    console.warn('Invalid schema markup:', error)
    return false
  }
}

// Common schema properties
export const SITE_CONFIG = {
  name: 'SERP Strategist',
  description: 'Expert insights on SEO strategies, content marketing, and SERP optimization techniques.',
  url: process.env.SITE_URL || 'https://serpstrategist.com',
  logo: '/logo.png',
  socialLinks: [
    'https://twitter.com/serpstrategist',
    'https://linkedin.com/company/serpstrategist',
    'https://facebook.com/serpstrategist'
  ]
}

// Schema factory function for dynamic schema creation
export function createSchema(type: SchemaType, props: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...props
  }
  
  const validation = validateStructuredData(baseSchema)
  if (!validation.isValid) {
    console.warn(`Invalid ${type} schema:`, validation.errors)
  }
  
  return baseSchema
}

// Performance tracking for schema rendering
export class SchemaPerformanceTracker {
  private static timers: Map<string, number> = new Map()
  
  static start(schemaType: string) {
    this.timers.set(schemaType, performance.now())
  }
  
  static end(schemaType: string) {
    const startTime = this.timers.get(schemaType)
    if (startTime) {
      const duration = performance.now() - startTime
      this.timers.delete(schemaType)
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Schema ${schemaType} rendered in ${duration.toFixed(2)}ms`)
      }
      
      // Send to analytics in production
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'schema_performance', {
              schema_type: schemaType,
              duration: Math.round(duration)
            });
          }
        }, 0);
      }
    }
  }
}
