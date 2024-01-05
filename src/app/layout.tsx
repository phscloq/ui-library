import type { Metadata } from 'next'
import { poppins } from './ui/fonts';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from './lib/Navbar';
import LeftNavbar from './lib/Left-Nav';
import { cookies } from 'next/headers';
import { ThemeContextProvider, MobileMenuContextProvider } from './contexts';
import Main from './lib/components/Main';
export const metadata: Metadata = {
  title: 'Baran UI',
  description: 'Baran UI Library',
}
{``}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const cookieStore = cookies();
const theme = cookieStore.get('theme')?.value ?? 'light';
  return (
    <html lang="en">        
      <body 
      className={`${poppins.className} 
      ${theme==='light' ? ' bg-white' : 'bg-slate-700 text-stone-100'}
      flex`}>
        <ThemeContextProvider
        value={theme}
        >
          <MobileMenuContextProvider>
            
          <Main>
            {children}
          </Main>
        <SpeedInsights />
        <Analytics />
        </MobileMenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
