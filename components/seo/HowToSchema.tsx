interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToSchemaProps {
  title: string
  description: string
  steps: HowToStep[]
  totalTime?: string // e.g., "PT30M" for 30 minutes
  estimatedCost?: {
    currency: string
    value: number
  }
  pageUrl: string
  image?: string
}

export function HowToSchema({ 
  title, 
  description, 
  steps, 
  totalTime, 
  estimatedCost, 
  pageUrl, 
  image 
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    "name": title,
    "description": description,
    "image": image ? {
      "@type": "ImageObject",
      "url": image
    } : undefined,
    "totalTime": totalTime,
    "estimatedCost": estimatedCost ? {
      "@type": "MonetaryAmount",
      "currency": estimatedCost.currency,
      "value": estimatedCost.value
    } : undefined,
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device"
      },
      {
        "@type": "HowToSupply", 
        "name": "Internet connection"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image ? {
        "@type": "ImageObject",
        "url": step.image
      } : undefined,
      "url": step.url || `${pageUrl}#step-${index + 1}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
