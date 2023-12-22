import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { poppins } from './ui/fonts';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './lib/Navbar';
import LeftNavbar from './lib/Left-Nav';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className="flex h-screen">
      <LeftNavbar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
              <Analytics />
</body>
    </html>
  )
}
