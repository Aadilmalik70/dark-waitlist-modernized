interface EventSchemaProps {
  name: string
  description: string
  startDate: string // ISO 8601 format
  endDate?: string
  eventStatus: 'EventScheduled' | 'EventCancelled' | 'EventPostponed' | 'EventRescheduled'
  eventAttendanceMode: 'OnlineEventAttendanceMode' | 'OfflineEventAttendanceMode' | 'MixedEventAttendanceMode'
  location?: {
    name?: string
    address?: string
    url?: string
  }
  organizer: {
    name: string
    url?: string
    email?: string
  }
  performer?: {
    name: string
    description?: string
    image?: string
  }
  offers?: {
    price: number
    currency: string
    availability: string
    url?: string
  }
  image?: string
  pageUrl: string
  maxAttendeeCapacity?: number
  remainingAttendeeCapacity?: number
  keywords?: string[]
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  eventStatus = 'EventScheduled',
  eventAttendanceMode = 'OnlineEventAttendanceMode',
  location,
  organizer,
  performer,
  offers,
  image,
  pageUrl,
  maxAttendeeCapacity,
  remainingAttendeeCapacity,
  keywords = []
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${pageUrl}#event`,
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "eventStatus": `https://schema.org/${eventStatus}`,
    "eventAttendanceMode": `https://schema.org/${eventAttendanceMode}`,
    "location": eventAttendanceMode === 'OnlineEventAttendanceMode' ? {
      "@type": "VirtualLocation",
      "url": location?.url || pageUrl,
      "name": location?.name || "Online Event"
    } : {
      "@type": "Place",
      "name": location?.name,
      "address": location?.address
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer.name,
      "url": organizer.url,
      "email": organizer.email
    },
    "performer": performer ? {
      "@type": "Person",
      "name": performer.name,
      "description": performer.description,
      "image": performer.image
    } : undefined,
    "image": image,
    "url": pageUrl,
    "keywords": keywords.join(", "),
    "inLanguage": "en-US",
    "isAccessibleForFree": !offers || offers.price === 0,
    "offers": offers ? {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.currency,
      "availability": `https://schema.org/${offers.availability}`,
      "url": offers.url || pageUrl,
      "category": "Event Ticket"
    } : undefined,
    "maximumAttendeeCapacity": maxAttendeeCapacity,
    "remainingAttendeeCapacity": remainingAttendeeCapacity,
    "audience": {
      "@type": "Audience",
      "audienceType": "SEO Professionals, Digital Marketers, Content Creators"
    },
    "about": keywords.slice(0, 3).map(keyword => ({
      "@type": "Thing",
      "name": keyword
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
