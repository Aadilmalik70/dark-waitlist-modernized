import { BlogPost, Author } from '@/types/blog'

interface BlogPostSchemaProps {
  post: Record<string, any>
  author: Record<string, any>
  siteUrl: string
}

export function BlogPostSchema({ post, author, siteUrl }: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/blog/${post.slug}`,
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": (post.featuredImage as any)?.url || `${siteUrl}/default-blog-image.jpg`,
      "width": (post.featuredImage as any)?.width || 1200,
      "height": (post.featuredImage as any)?.height || 630
    },
    "author": {
      "@type": "Person",
      "name": author.name,
      "image": (author.image as any)?.url,
      "url": `${siteUrl}/authors/${author.slug}`,
      "jobTitle": author.bio,
      "sameAs": Object.values(author.socialLinks || {}).filter(Boolean) || []
    },
    "publisher": {
      "@type": "Organization",
      "name": "SERP Strategist",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 180,
        "height": 60
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || '',
    "articleSection": post.category?.title || 'SEO Strategy',
    "wordCount": post.content ? estimateWordCount(post.content) : undefined,
    "timeRequired": post.readingTime ? `PT${post.readingTime}M` : undefined,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "url": `${siteUrl}/blog/${post.slug}`
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

function estimateWordCount(content: any[]): number {
  if (!content) return 0
  
  return content.reduce((count, block) => {
    if (block._type === 'block' && block.children) {
      const text = block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join(' ')
      return count + text.split(/\s+/).filter((word: string) => word.length > 0).length
    }
    return count
  }, 0)
}
