import type { Metadata } from 'next'
import { poppins } from './ui/fonts';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cookies } from 'next/headers';
import { ThemeContextProvider, MobileMenuContextProvider } from './contexts';
import Main from './components/main';
import Footer from './components/footer';
import CookieAlert from './components/cookie-alert';

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
const isDismissed = cookies().get('cookieWarningDismissed')?.value === 'true';

  return (
    <html lang="en" className={`${theme === 'dark' ? 'dark' : 'light'}`}>        
      <body 
      className={`${poppins.className} 
        dark:bg-slate-700
        `}>
        <ThemeContextProvider
        value={theme}
        >
          <MobileMenuContextProvider>
            
          <Main>
            {children}
            {!isDismissed && <CookieAlert />}
          </Main>
          <Footer />

        <SpeedInsights />
        <Analytics />
        </MobileMenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
