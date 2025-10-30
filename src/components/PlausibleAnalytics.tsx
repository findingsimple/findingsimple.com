'use client'

import { useEffect } from 'react'

export function PlausibleAnalytics() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      import('@plausible-analytics/tracker').then(({ init }) => {
        init({
          domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '',
        })
      })
    }
  }, [])

  return null
}
