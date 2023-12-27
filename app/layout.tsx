import { Besley } from 'next/font/google'
import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import './globals.scss'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: "Javier's Barbershop",
  description: 'Rochester, MN Barbershop',
}

const besley = Besley({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head> */}
      <body className={besley.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VVRCVF2QG4" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VVRCVF2QG4');
        `}
        </Script>
      </body>
    </html>
  )
}
