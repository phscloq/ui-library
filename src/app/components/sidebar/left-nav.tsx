'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { title } from "process";
import { useEffect } from "react";

export default function LeftNavbar({theme}:{theme:string}){

    const components = [
        {
            title: 'Accordion',
            href: '/docs/components/accordion'
        },
        {
            title: 'Alert',
            href: '/docs/components/alert'
        },
    
        {
            title: 'Button',
            href: '/docs/components/button'
        },
        {
            title: 'Card',
            href: '/docs/components/card'
        },
        {
            title: 'Checkbox',
            href: '/docs/components/checkbox'
        },
        {
            title: 'Dialog',
            href: '/docs/components/dialog'
        },
        {
            title: 'Form',
            href: '/docs/components/form'
        },
        {
            title: 'ProgressBar',
            href: '/docs/components/progress-bar'
        },
        {
            title: 'Switch',
            href: '/docs/components/switch'
        },
       
    ]

    useEffect(()=>{
        console.log("Left Navbar rerendered")
        console.log(theme)
    })
    const pathname = usePathname();
    return (
        <aside className={`
         hidden lg:block py-24 px-8 dark:border-slate-800
        left-0  border-r top-0 h-screen sticky  sm:w-1/6 flex-shrink-0 `}>
           
           
            
            {/* Left Side Navbar List */}
            <div 
            className={`
            absolute flex flex-col text-gray-400
            overflow-y-auto gap-4 dark:text-stone-300
            
            `}>
                <h4 
                    className={`text-black
                    dark:text-stone-100
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
                    dark:text-stone-100
                    `}>
                        Components
                </h4>
                {components.map((component, index)=>{
                    return(
                        <Link
                            key={index} 
                            className={`${pathname === component.href 
                            && 'text-black dark:text-blue-500' }
                            `} 
                            href={component.href}>
                            <button>
                                {component.title}
                            </button>
                        </Link>
                    )
                })}
            </div>
           
        </aside>
    )
}