import { Besley } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/ui/header'


export const metadata: Metadata = {
  title: "Javier's Barbershop",
  description: 'Rochester, MN Barbershop',
}

const besley = Besley({
  weight: ['400', '500', '600'],
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
        <Header/>
        {children}
      </body>
    </html>
  )
}
