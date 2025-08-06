interface CourseModule {
  name: string
  description: string
  url?: string
  timeRequired?: string
}

interface CourseSchemaProps {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  instructor?: {
    name: string
    description?: string
    image?: string
  }
  courseCode?: string
  courseDuration?: string
  courseWorkload?: string
  educationalLevel?: string
  modules?: CourseModule[]
  price?: {
    currency: string
    value: number
  }
  availableLanguage?: string[]
  pageUrl: string
  image?: string
  keywords?: string[]
}

export function CourseSchema({
  name,
  description,
  provider,
  instructor,
  courseCode,
  courseDuration,
  courseWorkload,
  educationalLevel = "Intermediate",
  modules = [],
  price,
  availableLanguage = ["en"],
  pageUrl,
  image,
  keywords = []
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${pageUrl}#course`,
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url
    },
    "instructor": instructor ? {
      "@type": "Person",
      "name": instructor.name,
      "description": instructor.description,
      "image": instructor.image
    } : undefined,
    "courseCode": courseCode,
    "timeRequired": courseDuration,
    "courseWorkload": courseWorkload,
    "educationalLevel": educationalLevel,
    "image": image,
    "url": pageUrl,
    "keywords": keywords.join(", "),
    "inLanguage": availableLanguage,
    "isAccessibleForFree": !price,
    "offers": price ? {
      "@type": "Offer",
      "price": price.value,
      "priceCurrency": price.currency,
      "category": "Educational"
    } : undefined,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": courseWorkload,
      "instructor": instructor ? {
        "@type": "Person",
        "name": instructor.name
      } : undefined
    },
    "syllabusSections": modules.map((module, index) => ({
      "@type": "Syllabus",
      "position": index + 1,
      "name": module.name,
      "description": module.description,
      "url": module.url,
      "timeRequired": module.timeRequired
    })),
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "SEO Professionals, Content Marketers, Digital Marketers"
    },
    "learningResourceType": "Course",
    "educationalUse": "Professional Development",
    "teaches": keywords.slice(0, 5) // Top 5 learning outcomes
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
