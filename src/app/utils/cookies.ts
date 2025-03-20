'use server'
 
import { cookies } from 'next/headers'
 
export async function create(theme:string) {
  cookies().set('theme', theme)
}
export const getThemeCookie = async () => {
    return cookies().get('theme')?.value;
  };

export async function dismissCookieWarning() {
  cookies().set('cookieWarningDismissed', 'true', {
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // Expires in 1 year
    path: '/', // Available across the entire site
  });
}