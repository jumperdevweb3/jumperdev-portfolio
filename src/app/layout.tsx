import { ThemeProvider } from '@/components/ThemeProvider'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

const common = {
  description: 'Full-stack Web3 Developer with 4+ years of experience in in web and blockchain technologies. Specialized in architecting scalable backend & frontend infrastructures.',
  url: 'https://jumperweb3.dev',
  title: "Filip Namysł | Full-stack Web3 Developer Portfolio",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jumperweb3.dev'),
  title: common.title,
  description: common.description,
  keywords: ['Web3', 'Blockchain', 'Smart Contracts', 'DeFi', 'Full-stack Developer', 'Solidity', 'React', 'Next.js'],
  authors: [{ name: 'Filip Namysł' }],
  creator: 'Filip Namysł',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: common.url,
    title: common.title,
    description: common.description,
    siteName: common.title,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: common.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: common.title,
    description: common.description,
    images: ['/og-image.png'],
    creator: '@0xskoczy'
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
  verification: {
    google: 'gMU-2OIHk2cm2agH6XKONEgfiXvEO-6iS7QjLDs3mA8',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId='GTM-W5WZ269'/>
      <GoogleAnalytics gaId='G-8VX61DV22P'/>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://jumperweb3.dev" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}