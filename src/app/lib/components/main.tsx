'use client'

import {ThemeContext } from "@/app/contexts";
import { useContext } from "react";
import LeftNavbar from "../left-nav";
import MobileMenuPopOut, { LeftMenuBar } from "../mobile-menus";
import Navbar from "../navbar";
import Hamburger from "./hamburger";

interface Props{
    children: React.ReactNode
}

export default function Main({children}:Props){
    const {theme} = useContext(ThemeContext);
    return (
        <div className={` bg-white  dark:text-stone-100 dark:bg-slate-700
        ${theme==='light' ? '' : ' '}
        `
        }>
            
            <Navbar theme={theme} />
            <div className='w-full flex '>
            <LeftNavbar theme={theme} />
            <main className="  py-24 px-8
            font-light  leading-8 text-black dark:text-stone-100 
            lg:w-3/5
            min-h-screen overflow-y-auto
            "
            >

                {children}
            </main>
             </div>
        <MobileMenuPopOut />
        </div>
    )
}