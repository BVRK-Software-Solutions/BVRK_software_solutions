import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const siteUrl = 'https://www.bvrksolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BVRK Software Solutions | IT Services, Consulting & Staffing',
    template: '%s | BVRK Software Solutions',
  },
  description:
    'BVRK Software Solutions is a professional software, IT services and staffing company delivering application development, IT solutions, consulting, SEO & digital marketing, training and staffing across India and South Africa.',
  keywords: [
    'BVRK Software Solutions',
    'IT solutions',
    'software development',
    'IT consulting',
    'IT staffing',
    'SEO and digital marketing',
    'IT training',
    'application development',
  ],
  authors: [{ name: 'BVRK Software Solutions' }],
  creator: 'BVRK Software Solutions',
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'BVRK Software Solutions | IT Services, Consulting & Staffing',
    description:
      'Your vision and our efforts can conquer your goal. Application development, IT solutions, consulting, digital marketing, training and staffing.',
    siteName: 'BVRK Software Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BVRK Software Solutions',
    description:
      'Professional software, IT services and staffing across India and South Africa.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#27247b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${sora.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
