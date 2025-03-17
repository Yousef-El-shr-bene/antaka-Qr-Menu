import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANTAKHA',
  description: 'ANTAKHA-QR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='bg-white text-black min-h-screen min-w-screen' >
      {children}
      </div>
        </body>
    </html>
  )
}
