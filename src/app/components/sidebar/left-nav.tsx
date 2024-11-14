'use client'
import { MobileMenuContext } from "@/app/contexts";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { title } from "process";
import { useContext, useEffect, useState } from "react";

export default function LeftNavbar({theme}:{theme:string}){
    const {sideBarOpen, handleLeftNavChange} = useContext(MobileMenuContext);
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

    useEffect(() => {
        if (sideBarOpen) {
          document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
          document.body.style.overflow = ''; // Enable scroll
        }
        return () => {
          document.body.style.overflow = ''; // Cleanup on unmount
        };
      }, [sideBarOpen]);
    const pathname = usePathname();
    return (
        <>
        <div className={`${sideBarOpen ? 'block': 'hidden'} fixed lg:hidden inset-0 bg-black bg-opacity-50
        backdrop-blur-lg z-30`}
                onClick={()=>handleLeftNavChange(false)}

        />
        <aside className={`z-30 sm:z-0 ${sideBarOpen ? 'w-4/5':''}
        left-0  top-0  h-screen sticky  lg:w-1/6  flex-shrink-0 transition-transform duration-300 ease-in-out`}
        >
            {/* Left Side Navbar List */}
            <div className={`bg-slate-200 lg:bg-white dark:bg-slate-700  border-r dark:border-slate-800  py-24 px-8 
               transition-transform duration-300 ease-in-out
                 ${sideBarOpen ? 'block': 'hidden'} lg:block  h-screen`}
                 onClick={(e)=>e.stopPropagation()}
                 >
               

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
                                <button
                                onClick={()=>handleLeftNavChange(false)}
                                >
                                    {component.title}
                                </button>
                            </Link>
                        )
                    })}
                </div>
            </div>
           
        </aside>
        </>
    )
}