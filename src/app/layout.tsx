import { type Metadata } from 'next'
import PlausibleProvider from 'next-plausible'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Jason Conroy',
    default:
      'Jason Conroy - Software Engineer, Manager, and Maker.',
  },
  description:
    'I’m Jason, a software engineer and maker based in Port Noarlunga, South Australia — on the beautiful Fleurieu Peninsula. Whether it’s software, 3D prints, or reef tanks, I’m happiest when I’m building something.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || ''} />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
