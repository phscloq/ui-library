'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { use, useEffect } from "react";

export default function LeftNavbar({theme}:{theme:string}){

    useEffect(()=>{
        console.log("Left Navbar rerendered")
        console.log(theme)
    })
    const pathname = usePathname();
    return (
        <div className={`${theme === 'light' ? '':'border-slate-800'}
         hidden lg:block
        left-0  border-r top-0 h-screen sticky  sm:w-1/6 flex-shrink-0 `}>
           
            <div className="sticky top-0 left-0 z-10 ">{/*Logo div */}
                <div className="pt-8">
                    <Link 
                    className={`text-xl  tracking-wide text-black
                    ${theme === 'light'? '':'text-stone-100'}
                    `} href="/">
                        <h1 className="px-10" >Baran UI</h1>
                    </Link>
                </div>
                
            </div>
            
            {/* Left Side Navbar List */}
            <div 
            className={`
            absolute p-8 flex flex-col text-gray-400
            overflow-y-auto gap-4
            ${theme === 'light' ? '':'text-stone-300'}
            `}>
                <h4 
                    className={`text-black
                    ${theme === 'light'? '':'text-stone-100'}
                    `}>
                    Getting Started
                </h4>
                <Link 
                    className={`${pathname === "/docs" ? 'text-black' : '' }
                    ${pathname === '/docs' && (theme === 'dark' || theme === 'system')? 'text-sky-500' : ''}
                    `} 
                    href="/docs">
                    <button>
                        Introduction
                    </button>
                </Link>

                <h4 
                    className={`text-black
                    ${theme === 'light'? '':'text-stone-100'}
                    `}>
                        Components
                </h4>
                
                <Link 
                    className={`${pathname === "/docs/components/accordion"
                    &&
                    theme === 'light'
                    ? 'text-black' : '' }
                    ${pathname === "/docs/components/accordion"
                    && 
                    theme === 'dark'  ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/accordion">
                    <button>
                        Accordion
                    </button>
                </Link>

                <Link  
                    className={`${pathname === "/docs/components/button" ? 'text-black' : '' }
                    ${pathname === "/docs/components/button"
                    && 
                    (theme === 'dark' || theme === 'system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/button">
                    <button>
                        Button
                    </button>
                </Link>
                {/* <Link className={`${pathname === "/docs/components/calendar" ? 'text-black' : '' }`} href="/docs/components/calendar">
                    <button>Calendar</button>
                </Link> */}
                {/* <Link  
                    className={`${pathname === "/docs/components/carousel" ? 'text-black' : '' }
                    ${pathname === "/docs/components/carousel"
                    && 
                    (theme === 'dark' || theme === 'system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/carousel">
                    <button>
                        Carousel
                    </button>
                </Link> */}

                <Link  
                    className={`${pathname === "/docs/components/switch" ? 'text-black' : '' }
                    ${pathname === "/docs/components/switch"
                    && 
                    (theme === 'dark' || theme === 'system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/switch">
                    <button>
                        Switch
                    </button>
                </Link>
     
        
            </div>
           
        </div>
    )
}