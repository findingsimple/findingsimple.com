'use client'

import { useEffect } from 'react'
import Plausible from '@plausible-analytics/tracker'

export function PlausibleAnalytics() {
  useEffect(() => {
    const plausible = Plausible({
      domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
    })

    // Enable automatic page view tracking for SPA
    const cleanup = plausible.enableAutoPageviews()

    // Cleanup on unmount
    return cleanup
  }, [])

  return null
}
