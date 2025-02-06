import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { Footer } from './footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}antialiased h-svh w-full `}>
        <main className="relative flex flex-col h-full">
          {children}
          <Footer />
          <Image src="/bg-overlay.jpg" fill alt="" className="object-cover" />
        </main>
      </body>
    </html>
  )
}
