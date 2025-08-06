import { useEffect, useState } from 'react'
import { SchemaPerformanceTracker, validateStructuredData } from './index'

interface UseSchemaOptions {
  enablePerformanceTracking?: boolean
  validateOnRender?: boolean
  logErrors?: boolean
}

export function useSchema(
  schemaData: object,
  schemaType: string,
  options: UseSchemaOptions = {}
) {
  const {
    enablePerformanceTracking = false,
    validateOnRender = process.env.NODE_ENV === 'development',
    logErrors = process.env.NODE_ENV === 'development'
  } = options

  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    if (enablePerformanceTracking) {
      SchemaPerformanceTracker.start(schemaType)
    }

    if (validateOnRender) {
      const validation = validateStructuredData(schemaData)
      setIsValid(validation.isValid)
      setErrors(validation.errors)

      if (!validation.isValid && logErrors) {
        console.warn(`Schema validation failed for ${schemaType}:`, validation.errors)
      }
    }

    if (enablePerformanceTracking) {
      SchemaPerformanceTracker.end(schemaType)
    }
  }, [schemaData, schemaType, enablePerformanceTracking, validateOnRender, logErrors])

  return {
    isValid,
    errors,
    schemaJson: JSON.stringify(schemaData, null, 2)
  }
}

// Hook for managing multiple schemas on a single page
export function useMultipleSchemas(schemas: Array<{ type: string; data: object }>) {
  const [validationResults, setValidationResults] = useState<
    Record<string, { isValid: boolean; errors: string[] }>
  >({})

  useEffect(() => {
    const results: Record<string, { isValid: boolean; errors: string[] }> = {}

    schemas.forEach(({ type, data }) => {
      const validation = validateStructuredData(data)
      results[type] = validation
    })

    setValidationResults(results)
  }, [schemas])

  const allValid = Object.values(validationResults).every(result => result.isValid)
  const totalErrors = Object.values(validationResults).reduce(
    (acc, result) => acc + result.errors.length,
    0
  )

  return {
    validationResults,
    allValid,
    totalErrors,
    hasErrors: totalErrors > 0
  }
}

// Hook for dynamic schema generation based on content type
export function useDynamicSchema(content: any, contentType: string) {
  const [schema, setSchema] = useState<object | null>(null)

  useEffect(() => {
    let generatedSchema: object | null = null

    switch (contentType) {
      case 'blog-post':
        if (content.title && content.author) {
          generatedSchema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: content.title,
            author: {
              '@type': 'Person',
              name: content.author.name
            },
            datePublished: content.publishedAt,
            image: content.featuredImage?.url
          }
        }
        break

      case 'how-to':
        if (content.steps && content.steps.length > 0) {
          generatedSchema = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: content.title,
            step: content.steps.map((step: any, index: number) => ({
              '@type': 'HowToStep',
              position: index + 1,
              name: step.name,
              text: step.description
            }))
          }
        }
        break

      case 'faq':
        if (content.faqs && content.faqs.length > 0) {
          generatedSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.faqs.map((faq: any) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }
        }
        break
    }

    setSchema(generatedSchema)
  }, [content, contentType])

  return schema
}
