import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YAGO - Unbothered. Unstoppable. On Base Network",
  description: "YAGO is more than a meme. Cast out for thinking differently and freely, Yago leads a new movement of unbothered thinkers, builders, and memers on Base Network. Join the YAGO era.",
  keywords: "YAGO, cryptocurrency, meme coin, Base Network, crypto, blockchain, DeFi, community",
  authors: [{ name: "YAGO Team" }],
  creator: "YAGO",
  publisher: "YAGO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yago.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YAGO - Unbothered. Unstoppable. On Base Network",
    description: "YAGO is more than a meme. Join the movement of unbothered thinkers, builders, and memers on Base Network.",
    url: 'https://yago.com',
    siteName: 'YAGO',
    images: [
      {
        url: '/images/goat-full.png',
        width: 1200,
        height: 630,
        alt: 'YAGO - The Unbothered Goat',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YAGO - Unbothered. Unstoppable. On Base Network",
    description: "YAGO is more than a meme. Join the movement of unbothered thinkers, builders, and memers on Base Network.",
    images: ['/images/goat-full.png'],
    creator: '@YAGOcoin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#EAB308" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
