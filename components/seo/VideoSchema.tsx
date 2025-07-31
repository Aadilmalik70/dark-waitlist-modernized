interface VideoSchemaProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string // ISO 8601 duration format (e.g., "PT1M33S")
  contentUrl?: string
  embedUrl?: string
  transcript?: string
  pageUrl: string
  author: {
    name: string
    url?: string
  }
  publisher: {
    name: string
    logoUrl: string
  }
  keywords?: string[]
  category?: string
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript,
  pageUrl,
  author,
  publisher,
  keywords = [],
  category = "Educational"
}: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${pageUrl}#video`,
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "contentUrl": contentUrl,
    "embedUrl": embedUrl,
    "transcript": transcript,
    "url": pageUrl,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logoUrl
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "keywords": keywords.join(", "),
    "genre": category,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Tutorial",
    "educationalUse": "Professional Development",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  }

  // Add video chapters if available
  const chaptersSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Introduction",
        "startOffset": 0,
        "url": `${pageUrl}#t=0`
      }
      // Add more chapters as needed
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
