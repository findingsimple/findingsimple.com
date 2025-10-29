'use client'

import { useEffect } from 'react'
import { init } from '@plausible-analytics/tracker'

export function PlausibleAnalytics() {
  useEffect(() => {
    init({
      domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
    })
  }, [])

  return null
}
