'use client'
import Link from "next/link"
import ThemeToggle from "./components/theme-toggle";
import Logo from "./components/logo";
import { useContext, useState } from "react";
import { MobileMenuContext } from "../contexts";

type Props = {theme: string}
export default function Navbar({theme}:Props){
const {handleMobileMenuChange} = useContext(MobileMenuContext);
    return(
        <nav className={`bg-opacity-75 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3
          sticky top-0 z-40 w-full backdrop-blur  p-2  h-16 
                ${theme==='light'? '':'border-slate-800'} border-b`}>
                <div className=
                {`${theme === 'light'? '':'text-stone-100'}
                sm:flex   gap-14 text-gray-400 sm:items-center`}>
                           <div className="hidden sm:flex gap-14  items-center">
                                <Link href="/docs" 
                                        className="hover:text-slate-900 hover:font-medium ml-8">
                                        <button>Documentation</button>
                                </Link>
                                <Link href="/components" 
                                        className="hover:text-slate-900 hover:font-medium">
                                        <button>Components</button>
                                </Link>
                                <Link href="https://drive.google.com/file/d/1Gx0W3dOvNnNdN8SYTSm6mJ4W3NaNjtxc/view?usp=sharing"
                                        target="_blank" 
                                        className="hover:text-slate-900 hover:font-medium">
                                        <button 
                                            className=" inline-block relative">
                                            Resume 
                                            <span className="absolute -top-1 -right-4 -rotate-45 text-sm ">{'->'}</span>
                                        </button>
                                </Link>
                                <Link href="https://github.com/phscloq" 
                                        target="_blank"
                                        className="hover:text-slate-900 hover:font-medium">
                                        <button>GitHub</button>
                                </Link>
                                <ThemeToggle />
                           </div>
                         

                          
                            
                    
                </div>
                <div className="flex flex-col  pt-2 sm:w-full sm:hidden">
                                <div className="w-full flex items-center justify-between">
                                        <Logo />
                                        <button className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600"
                                        onClick={()=>handleMobileMenuChange()}
                                        >
                                        <span className=" sr-only">Navigation</span>
                                        &#10247;
                                        </button>
                                </div>
                                
                                
                </div>
            
        </nav>
    )
}