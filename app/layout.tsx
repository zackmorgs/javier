import ReactGA from "react-ga4";

import { Besley } from 'next/font/google'
import type { Metadata } from 'next'

import Script from 'next/script'

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

const GA_Stuff = {
    gtmId: 'GTM-P29KRMG8'
}

ReactGA.initialize(GA_Stuff.gtmId);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={besley.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-VVRCVF2QG4" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VVRCVF2QG4');
        `}
        </Script> */}
      </body>
    </html>
  )
}
