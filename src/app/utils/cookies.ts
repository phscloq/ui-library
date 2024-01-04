'use server'
 
import { cookies } from 'next/headers'
 
export async function create(theme:string) {
  cookies().set('theme', theme)
}
export const getThemeCookie = async () => {
    return cookies().get('theme');
  };
