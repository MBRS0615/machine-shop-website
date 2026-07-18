import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const SITE_NAME = 'Axis Precision Machining'

export const metadata: Metadata = {
  metadataBase: new URL('https://axisprecision.example.com'),
  title: {
    default: 'Axis Precision Machining | CNC Machining & Metal Fabrication',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Axis Precision Machining delivers CNC milling, CNC turning, welding, and custom metal fabrication with tolerances to ±0.0002". Serving aerospace, automotive, and industrial clients since 1998.',
  keywords: [
    'CNC machining',
    'precision machining',
    'metal fabrication',
    'CNC milling',
    'CNC turning',
    'custom machined parts',
    'prototype manufacturing',
    'welding and fabrication',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    title: 'Axis Precision Machining | CNC Machining & Metal Fabrication',
    description:
      'Precision machining and metal fabrication engineered for excellence. CNC milling, turning, welding, and custom parts with aerospace-grade tolerances.',
    siteName: SITE_NAME,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#12141a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
