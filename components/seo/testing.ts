// Testing utilities for schema markup validation and debugging

export interface SchemaTestResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  suggestions: string[]
  performance: {
    renderTime: number
    size: number
  }
}

export class SchemaTestSuite {
  private testResults: Map<string, SchemaTestResult> = new Map()

  // Test individual schema markup
  async testSchema(schemaType: string, schemaData: object): Promise<SchemaTestResult> {
    const startTime = performance.now()
    const errors: string[] = []
    const warnings: string[] = []
    const suggestions: string[] = []

    // Basic JSON validation
    try {
      const jsonString = JSON.stringify(schemaData)
      JSON.parse(jsonString)
    } catch (error) {
      errors.push('Invalid JSON structure')
    }

    const schema = schemaData as any

    // Required properties validation
    if (!schema['@context']) {
      errors.push('Missing @context property')
    } else if (schema['@context'] !== 'https://schema.org') {
      warnings.push('@context should be "https://schema.org"')
    }

    if (!schema['@type']) {
      errors.push('Missing @type property')
    }

    // Schema-specific validations
    await this.validateSchemaSpecificRules(schema['@type'], schema, errors, warnings, suggestions)

    // Performance metrics
    const renderTime = performance.now() - startTime
    const size = JSON.stringify(schemaData).length

    const result: SchemaTestResult = {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions,
      performance: {
        renderTime,
        size
      }
    }

    this.testResults.set(schemaType, result)
    return result
  }

  private async validateSchemaSpecificRules(
    schemaType: string,
    schema: any,
    errors: string[],
    warnings: string[],
    suggestions: string[]
  ) {
    switch (schemaType) {
      case 'BlogPosting':
        this.validateBlogPosting(schema, errors, warnings, suggestions)
        break
      case 'HowTo':
        this.validateHowTo(schema, errors, warnings, suggestions)
        break
      case 'FAQPage':
        this.validateFAQPage(schema, errors, warnings, suggestions)
        break
      case 'Review':
        this.validateReview(schema, errors, warnings, suggestions)
        break
      // Add more schema types as needed
    }
  }

  private validateBlogPosting(schema: any, errors: string[], warnings: string[], suggestions: string[]) {
    // Required properties
    if (!schema.headline) errors.push('BlogPosting missing headline')
    if (!schema.author) errors.push('BlogPosting missing author')
    if (!schema.datePublished) errors.push('BlogPosting missing datePublished')
    if (!schema.publisher) errors.push('BlogPosting missing publisher')

    // Recommended properties
    if (!schema.image) warnings.push('BlogPosting should include image')
    if (!schema.description) warnings.push('BlogPosting should include description')
    if (!schema.mainEntityOfPage) warnings.push('BlogPosting should include mainEntityOfPage')

    // Best practices
    if (schema.headline && schema.headline.length > 110) {
      suggestions.push('Headline should be under 110 characters for optimal display')
    }
    if (schema.description && schema.description.length > 160) {
      suggestions.push('Description should be under 160 characters for meta description')
    }
    if (!schema.keywords) {
      suggestions.push('Consider adding keywords property for better SEO')
    }
  }

  private validateHowTo(schema: any, errors: string[], warnings: string[], suggestions: string[]) {
    if (!schema.name) errors.push('HowTo missing name')
    if (!schema.step || !Array.isArray(schema.step)) {
      errors.push('HowTo missing step array')
    } else if (schema.step.length < 2) {
      warnings.push('HowTo should have at least 2 steps')
    }

    if (schema.step) {
      schema.step.forEach((step: any, index: number) => {
        if (!step.name) errors.push(`Step ${index + 1} missing name`)
        if (!step.text) errors.push(`Step ${index + 1} missing text`)
      })
    }

    if (!schema.totalTime) {
      suggestions.push('Consider adding totalTime for better user experience')
    }
    if (!schema.image) {
      suggestions.push('Consider adding image for visual appeal')
    }
  }

  private validateFAQPage(schema: any, errors: string[], warnings: string[], suggestions: string[]) {
    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      errors.push('FAQPage missing mainEntity array')
    } else if (schema.mainEntity.length < 2) {
      warnings.push('FAQPage should have at least 2 questions')
    }

    if (schema.mainEntity) {
      schema.mainEntity.forEach((question: any, index: number) => {
        if (!question.name) errors.push(`Question ${index + 1} missing name`)
        if (!question.acceptedAnswer) {
          errors.push(`Question ${index + 1} missing acceptedAnswer`)
        } else if (!question.acceptedAnswer.text) {
          errors.push(`Question ${index + 1} answer missing text`)
        }
      })
    }
  }

  private validateReview(schema: any, errors: string[], warnings: string[], suggestions: string[]) {
    if (!schema.itemReviewed) errors.push('Review missing itemReviewed')
    if (!schema.reviewRating) errors.push('Review missing reviewRating')
    if (!schema.author) errors.push('Review missing author')

    if (schema.reviewRating) {
      if (!schema.reviewRating.ratingValue) {
        errors.push('reviewRating missing ratingValue')
      }
      if (!schema.reviewRating.bestRating) {
        warnings.push('reviewRating should include bestRating')
      }
    }

    if (schema.itemReviewed && !schema.itemReviewed.aggregateRating) {
      suggestions.push('Consider adding aggregateRating to itemReviewed')
    }
  }

  // Test multiple schemas on a page
  async testPage(schemas: Array<{ type: string; data: object }>): Promise<Map<string, SchemaTestResult>> {
    const results = new Map<string, SchemaTestResult>()

    for (const { type, data } of schemas) {
      const result = await this.testSchema(type, data)
      results.set(type, result)
    }

    return results
  }

  // Generate test report
  generateReport(): string {
    let report = '# Schema Markup Test Report\n\n'
    
    for (const [schemaType, result] of this.testResults) {
      report += `## ${schemaType}\n\n`
      report += `**Status**: ${result.isValid ? '✅ Valid' : '❌ Invalid'}\n\n`
      
      if (result.errors.length > 0) {
        report += '### Errors\n'
        result.errors.forEach(error => {
          report += `- ❌ ${error}\n`
        })
        report += '\n'
      }
      
      if (result.warnings.length > 0) {
        report += '### Warnings\n'
        result.warnings.forEach(warning => {
          report += `- ⚠️ ${warning}\n`
        })
        report += '\n'
      }
      
      if (result.suggestions.length > 0) {
        report += '### Suggestions\n'
        result.suggestions.forEach(suggestion => {
          report += `- 💡 ${suggestion}\n`
        })
        report += '\n'
      }
      
      report += '### Performance\n'
      report += `- Render Time: ${result.performance.renderTime.toFixed(2)}ms\n`
      report += `- Size: ${result.performance.size} bytes\n\n`
    }

    return report
  }

  // Export results as JSON
  exportResults(): object {
    const results: Record<string, SchemaTestResult> = {}
    for (const [key, value] of this.testResults) {
      results[key] = value
    }
    return results
  }

  // Clear test results
  clear(): void {
    this.testResults.clear()
  }
}

// Google Rich Results Test API integration
export class GoogleRichResultsTester {
  private static readonly API_BASE = 'https://search.google.com/test/rich-results'

  static async testUrl(url: string): Promise<any> {
    try {
      // Note: This is a simplified example
      // In reality, you'd need to use Google's actual API
      const response = await fetch(`${this.API_BASE}/result?url=${encodeURIComponent(url)}`)
      return await response.json()
    } catch (error) {
      console.error('Error testing with Google Rich Results:', error)
      return null
    }
  }

  static generateTestUrl(url: string): string {
    return `${this.API_BASE}/result?url=${encodeURIComponent(url)}`
  }
}

// Schema.org validator integration
export class SchemaOrgValidator {
  private static readonly VALIDATOR_URL = 'https://validator.schema.org'

  static generateValidatorUrl(url: string): string {
    return `${this.VALIDATOR_URL}/#url=${encodeURIComponent(url)}`
  }

  static async validateSchema(schema: object): Promise<any> {
    try {
      // This would integrate with schema.org's validation API if available
      const response = await fetch(`${this.VALIDATOR_URL}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json'
        },
        body: JSON.stringify(schema)
      })
      return await response.json()
    } catch (error) {
      console.error('Error validating with Schema.org:', error)
      return null
    }
  }
}

// Development helper functions
export const DevHelpers = {
  // Log all schemas on current page
  logPageSchemas(): void {
    if (process.env.NODE_ENV !== 'development') return
    
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    console.group('Schema Markup on this page:')
    
    scripts.forEach((script, index) => {
      try {
        const schema = JSON.parse(script.textContent || '')
        console.log(`${index + 1}. ${schema['@type']}:`, schema)
      } catch (error) {
        console.error(`Error parsing schema ${index + 1}:`, error)
      }
    })
    
    console.groupEnd()
  },

  // Validate all schemas on current page
  async validatePageSchemas(): Promise<void> {
    if (process.env.NODE_ENV !== 'development') return
    
    const testSuite = new SchemaTestSuite()
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    
    for (let i = 0; i < scripts.length; i++) {
      try {
        const schema = JSON.parse(scripts[i].textContent || '')
        await testSuite.testSchema(schema['@type'], schema)
      } catch (error) {
        console.error(`Error validating schema ${i + 1}:`, error)
      }
    }
    
    console.log(testSuite.generateReport())
  }
}

// Export test suite instance for global use
export const schemaTestSuite = new SchemaTestSuite()
