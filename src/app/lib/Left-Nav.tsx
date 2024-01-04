'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LeftNavbar({theme}:{theme:string}){

    const pathname = usePathname();
    return (
        <div className={`${theme === 'dark'? 'border-slate-800':''}
        left-0  border-r top-0 h-screen sticky  w-1/6 flex-shrink-0 `}>
            <div className="sticky top-0 left-0 z-10 ">
                <div className="pt-8">
                    <Link 
                    className={`text-xl  tracking-wide text-black
                    ${theme === 'dark'? 'text-stone-100':''}
                    `} href="/">
                        <h1 className="px-10" >Baran UI</h1>
                    </Link>
                </div>
                
            </div>
            
            <div 
            className={`
            absolute p-8 flex flex-col text-gray-400
            overflow-y-auto gap-4
            ${theme === 'dark'? 'text-stone-300':''}
            `}>
                <h4 
                className={`text-black
                ${theme === 'dark'? 'text-stone-100':''}
                `}>
                    Getting Started
                </h4>
                <Link 
                className={`${pathname === "/docs" ? 'text-black' : '' }
                ${pathname === '/docs' && theme === 'dark' ? 'text-sky-500' : ''}
                `} 
                href="/docs">
                    <button>Introduction</button>
                </Link>

                <h4 
                className={`text-black
                ${theme === 'dark'? 'text-stone-100':''}
                `}>
                    Components
                </h4>
                
                <Link 
                    className={`${pathname === "/docs/components/accordion" ? 'text-black' : '' }
                    ${pathname === "/docs/components/accordion"
                    && 
                    theme === 'dark' ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/accordion">
                    <button>
                        Accordion
                    </button>
                </Link>
                {/* <Link className={`${pathname === "/docs/components/calendar" ? 'text-black' : '' }`} href="/docs/components/calendar">
                    <button>Calendar</button>
                </Link> */}
                <Link  
                    className={`${pathname === "/docs/components/carousel" ? 'text-black' : '' }
                    ${pathname === "/docs/components/carousel"
                    && 
                    theme === 'dark' ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/carousel">
                    <button>
                        Carousel
                    </button>
                </Link>

                <Link  
                    className={`${pathname === "/docs/components/toggle" ? 'text-black' : '' }
                    ${pathname === "/docs/components/toggle"
                    && 
                    theme === 'dark' ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/toggle">
                    <button>
                    Toggle
                    </button>
                </Link>
     
        
            </div>
           
        </div>
    )
}