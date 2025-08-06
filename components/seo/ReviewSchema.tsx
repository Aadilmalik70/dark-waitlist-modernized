interface Review {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: {
    ratingValue: number
    bestRating?: number
    worstRating?: number
  }
}

interface ReviewSchemaProps {
  itemName: string
  itemDescription: string
  itemImage?: string
  itemUrl?: string
  aggregateRating: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
  reviews?: Review[]
  pageUrl: string
  category?: string
  brand?: string
  price?: {
    currency: string
    value: number
  }
}

export function ReviewSchema({
  itemName,
  itemDescription,
  itemImage,
  itemUrl,
  aggregateRating,
  reviews = [],
  pageUrl,
  category = "SoftwareApplication",
  brand,
  price
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${pageUrl}#review`,
    "itemReviewed": {
      "@type": category,
      "name": itemName,
      "description": itemDescription,
      "image": itemImage,
      "url": itemUrl || pageUrl,
      "brand": brand ? {
        "@type": "Brand",
        "name": brand
      } : undefined,
      "offers": price ? {
        "@type": "Offer",
        "price": price.value,
        "priceCurrency": price.currency,
        "availability": "https://schema.org/InStock"
      } : undefined,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": aggregateRating.bestRating || 5,
        "worstRating": aggregateRating.worstRating || 1
      }
    },
    "author": {
      "@type": "Person",
      "name": "SERP Strategist Team"
    },
    "datePublished": new Date().toISOString(),
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": aggregateRating.ratingValue,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    },
    "reviewBody": itemDescription
  }

  // Add individual reviews if provided
  const reviewsSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.ratingValue,
        "bestRating": review.reviewRating.bestRating || 5,
        "worstRating": review.reviewRating.worstRating || 1
      }
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
      {reviewsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema, null, 2) }}
        />
      )}
    </>
  )
}
