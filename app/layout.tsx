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
      <div className='bg-white text-black ' >
      {children}
      </div>
      <div className="fixed bottom-0 z-10 bg-slate-50 shadow-2xl w-full text-black flex items-center justify-around text-2xl">
      <h1 className=' w-full text-center text-sm' > All Prices Subject to 12% Servic & 14% VAT </h1>
      </div>
        </body>
    </html>
  )
}
