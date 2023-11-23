import { Besley } from 'next/font/google'
import type { Metadata } from 'next'
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
      <body className={besley.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
