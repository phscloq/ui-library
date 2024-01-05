'use client'
import { ThemeContext } from "@/app/contexts";
import Link from "next/link"
import { useContext } from "react";
export default function Logo(){
    const {theme} = useContext(ThemeContext);
    return (
        <div className="sticky top-0 left-0 z-10 ">
                <div className="">
                    <Link 
                    className={`text-xl  tracking-wide text-black
                    ${theme === 'light'? '':'text-stone-100'}
                    `} href="/">
                        <h1 className="px-10" >Baran UI</h1>
                    </Link>
                </div>
                
            </div>
    )
}