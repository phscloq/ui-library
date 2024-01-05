'use client'

import {ThemeContext } from "@/app/contexts";
import { useContext } from "react";
import Link from "next/link";
import MobileMenu, { LeftMenuBar } from "../MobileMenus";
import LeftNavbar from "../Left-Nav";
import Navbar from "../Navbar";
import Hamburger from "./Hamburger";
import MobileMenuPopOut from "../MobileMenus";
interface Props{
    children: React.ReactNode
}

export default function Main({children}:Props){
    const {theme} = useContext(ThemeContext);
    return (
        <div className="sm:flex h-screen w-full">
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