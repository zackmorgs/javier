import Main from '@/components/ui/main'
import { Besley } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const besley = Besley({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://javiers-barbershop.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    images: "/og-image.jpg",
    url: "https://javiers-barbershop.com/",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={besley.className}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />

      </body>
    </html>
  )
}
