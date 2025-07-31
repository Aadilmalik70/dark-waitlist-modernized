import { BlogPost } from '@/types/blog'

interface BlogListSchemaProps {
  posts: BlogPost[]
  siteUrl: string
  currentPage?: number
  totalPages?: number
}

export function BlogListSchema({ 
  posts, 
  siteUrl, 
  currentPage = 1, 
  totalPages = 1 
}: BlogListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    "name": "SERP Strategist Blog",
    "description": "Expert insights on SEO strategies, content marketing, and SERP optimization techniques.",
    "url": `${siteUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "@id": `${siteUrl}/blog/${post.slug}`,
          "headline": post.title,
          "description": post.excerpt,
          "url": `${siteUrl}/blog/${post.slug}`,
          "image": post.featuredImage?.url,
          "datePublished": post.publishedAt,
          "author": {
            "@type": "Person",
            "name": post.author?.name
          }
        }
      }))
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "@id": `${siteUrl}/blog/${post.slug}`,
      "headline": post.title,
      "url": `${siteUrl}/blog/${post.slug}`,
      "datePublished": post.publishedAt
    }))
  }

  // Add pagination if multiple pages
  if (totalPages > 1) {
    const paginationSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/blog?page=${currentPage}`,
      "url": `${siteUrl}/blog?page=${currentPage}`,
      "name": `SERP Strategist Blog - Page ${currentPage}`,
      "isPartOf": {
        "@type": "Blog",
        "@id": `${siteUrl}/blog#blog`
      }
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(paginationSchema, null, 2) }}
        />
      </>
    )
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
