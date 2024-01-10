'use client'

import {ThemeContext } from "@/app/contexts";
import { useContext } from "react";
import LeftNavbar from "../Left-Nav";
import MobileMenuPopOut, { LeftMenuBar } from "../MobileMenus";
import Navbar from "../Navbar";
import Hamburger from "./Hamburger";

interface Props{
    children: React.ReactNode
}

export default function Main({children}:Props){
    const {theme} = useContext(ThemeContext);
    return (
        <div className={` sm:flex h-screen w-full
        ${theme==='light' ? ' bg-white' : 'bg-slate-700 text-stone-100'}
        `
        }>
            <LeftNavbar theme={theme}/>
            <LeftMenuBar />
            <div className='flex flex-col w-full max-h-[820px]'>
            <Navbar theme={theme} />
            <Hamburger />
            <main className="p-8
            font-light  leading-8
            lg:w-3/5
            max-h-screen overflow-y-auto
            "
            >
                {children}
            </main>
             </div>
        <MobileMenuPopOut />
        </div>
    )
}