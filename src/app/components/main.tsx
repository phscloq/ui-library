'use client'

import {ThemeContext } from "@/app/contexts";
import { useContext } from "react";
import LeftNavbar from "./sidebar/left-nav";
import Navbar from "./navbar/navbar";
import Hamburger from "./sidebar/hamburger";
import CookieAlert from "./cookie-alert";
import { MobileMenu } from "./navbar/mobile-menu";
import SidebarTrigger from "./sidebar/sidebar-trigger";

interface Props{
    children: React.ReactNode
}

export default function Main({children}:Props){
    const {theme} = useContext(ThemeContext);
    return (
        <div className={` bg-white  dark:text-stone-100 dark:bg-slate-700`
        }>
            
            <Navbar theme={theme} />
            <div className=' flex '>
            <LeftNavbar theme={theme} />
            <main className="  py-24 px-8
            font-light  leading-8 text-black dark:text-stone-100 
            container max-w-4xl
            "
            >

                {children}
            </main>
             </div>
             <MobileMenu />
        <CookieAlert />
        </div>
    )
}