import { Author, BlogPost } from '@/types/blog'

interface AuthorSchemaProps {
  author: Author
  posts: BlogPost[]
  siteUrl: string
}

export function AuthorSchema({ author, posts, siteUrl }: AuthorSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/authors/${author.slug}`,
    "name": author.name,
    "description": author.bio,
    "image": {
      "@type": "ImageObject",
      "url": author.image?.url,
      "width": author.image?.width || 300,
      "height": author.image?.height || 300
    },
    "url": `${siteUrl}/authors/${author.slug}`,
    "jobTitle": "SEO Strategist & Content Marketing Expert",
    "worksFor": {
      "@type": "Organization",
      "name": "SERP Strategist",
      "url": siteUrl
    },
    "sameAs": author.socialLinks?.filter(link => link.url).map(link => link.url) || [],
    "mainEntityOfPage": {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/authors/${author.slug}`,
      "mainEntity": {
        "@type": "Person",
        "@id": `${siteUrl}/authors/${author.slug}`
      }
    },
    "knows": [
      {
        "@type": "Thing",
        "name": "Search Engine Optimization"
      },
      {
        "@type": "Thing", 
        "name": "Content Marketing"
      },
      {
        "@type": "Thing",
        "name": "SERP Analysis"
      },
      {
        "@type": "Thing",
        "name": "Digital Marketing Strategy"
      }
    ]
  }

  // Add authored works if posts exist
  if (posts && posts.length > 0) {
    schema.mainEntityOfPage = {
      ...schema.mainEntityOfPage,
      "author": posts.map(post => ({
        "@type": "BlogPosting",
        "@id": `${siteUrl}/blog/${post.slug}`,
        "headline": post.title,
        "url": `${siteUrl}/blog/${post.slug}`,
        "datePublished": post.publishedAt
      }))
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
