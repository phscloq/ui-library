'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function LeftNavbar(){
    const pathname = usePathname();
    return (
        <div className="left-0  border-r top-0 h-screen  w-1/5 flex-shrink-0">
            <div className="sticky top-0 left-0 z-10">
                <div className="pt-8">
                    <Link 
                    className="text-xl  tracking-wide text-black" href="/">
                        <h1 className="px-10" >Baran UI</h1>
                    </Link>
                </div>
                
            </div>
            <div className="absolute p-8 flex flex-col text-gray-400 overflow-y-auto gap-4">
                <h4 className="text-black">Getting Started</h4>
                <Link className={`${pathname === "/docs" ? 'text-black' : '' }`} href="/docs">
                    <button>Introduction</button>
                </Link>
                <h4  className="text-black">Components</h4>
                <Link className={`${pathname === "/docs/components/accordion" ? 'text-black' : '' }`} href="/docs/components/accordion">
                    <button>Accordion</button>
                </Link>
                <Link className={`${pathname === "/docs/components/calendar" ? 'text-black' : '' }`} href="/docs/components/calendar">
                    <button>Calendar</button>
                </Link>
           
     
        
            </div>
           
        </div>
    )
}