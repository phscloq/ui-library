import type { Metadata } from 'next'
import { poppins } from './ui/fonts';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cookies } from 'next/headers';
import { ThemeContextProvider, MobileMenuContextProvider } from './contexts';
import Main from './components/main';

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
const theme = cookies().get('theme')?.value;

  return (
    <html lang="en">        
      <body 
      className={`${poppins.className} ${theme === 'dark' ? 'dark' : 'light'}
     `}>
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
