'use client'
import { useThemeContext } from "../context";

export default function ThemedDiv({ children }: { children: React.ReactNode }) {
    const {dark} = useThemeContext()
        
        
    
    return <div className={`${dark ? 'bg-slate-600': ''}pt-8 pl-8 max-w-4xl`}>{children}</div>;
  }