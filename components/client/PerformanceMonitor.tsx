'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Send to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'web_vitals', {
            metric_name: entry.name,
            metric_value: entry.startTime,
            metric_id: entry.entryType,
          })
        }
      })
    })

    try {
      observer.observe({
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint'],
      })
    } catch (error) {
      console.warn('Performance Observer not supported:', error)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
