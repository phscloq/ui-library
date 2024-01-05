import Link from "next/link"
import { useContext } from "react";
import { MobileMenuContext, ThemeContext } from "../contexts";
import { usePathname } from "next/navigation";

export default function MobileMenuPopOut(){
    const {mobileMenuOpen, handleMobileMenuChange} = useContext(MobileMenuContext);
    const {theme, handleThemeChange} = useContext(ThemeContext);
    return(
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden
        bg-slate-800 w-full z-50  absolute inset-0 
        backdrop-blur-sm bg-opacity-75
        `}>
            <div className={`
            ${theme === 'light' ? ' bg-slate-100': 'bg-slate-600 shadow-slate-800'}
            fixed  w-4/5  p-4 rounded-md  top-4 right-4
              shadow-lg 
            `}>
                <div className="flex flex-col ">
                    <button
                    className="
                    absolute  right-2 text-xl 
                     w-8 h-8 flex items-center justify-center hover:text-slate-600"
                    onClick={()=>handleMobileMenuChange()}
                    >X</button>
                    <ul className=" space-y-6">
                        <li className="hover:text-slate-900 hover:font-medium">
                            <Link href="/docs" >
                                <button
                                onClick={()=>handleMobileMenuChange()}
                                >Documentation</button>
                            </Link>
                        </li>
                        <li className="hover:text-slate-900 hover:font-medium">
                            <Link href="/components" >
                                <button
                                onClick={()=>handleMobileMenuChange()}
                                >Components</button>
                            </Link>
                        </li>
                        <li className="hover:text-slate-900 hover:font-medium">
                            <Link href="https://drive.google.com/file/d/1Gx0W3dOvNnNdN8SYTSm6mJ4W3NaNjtxc/view?usp=sharing"
                            target="_blank" >
                                <button
                                onClick={()=>handleMobileMenuChange()}
                                className=" inline-block relative">Resume  <span className="absolute -top-1 -right-4 -rotate-45 text-sm ">{'->'}</span></button>
                            </Link>
                        </li>
                        <li className="hover:text-slate-900 hover:font-medium">
                        <Link href="https://github.com/phscloq" 
                        target="_blank"
                            className="hover:text-slate-900 hover:font-medium">
                            <button
                            onClick={()=>handleMobileMenuChange()}
                            >GitHub</button>
                        </Link>
                        </li>
                        
                    </ul>
                   <div className="mt-6 pt-6 border-t border-slate-800 ">
                    <div className="flex justify-between items-center">
                        <label className={`${theme ==='light'? 'text-slate-500':'text-slate-300'}`}>Switch theme</label>
                        <div className={`relative  p-2`}>
                            <select className={`rounded-md w-28 h-10  font-medium shadow-md
                            ${theme === 'light' ? 'bg-slate-200 ' : 'bg-slate-500'}
                            `}
                            onChange={(e)=>{handleThemeChange(e.target.value); }}
                            defaultValue={theme}
                            >
                                <option value='light'>Light</option>
                                <option value='dark' >Dark</option>
                                <option value='system'>System</option>
                            </select>
                        </div>
                        
                    </div>
                    
                   </div>
                </div>
            </div>
        </div>
    )
}

export function LeftMenuBar(){
    const {theme} = useContext(ThemeContext);
    const {leftNavOpen, handleLeftNavChange} = useContext(MobileMenuContext);
    const pathname = usePathname();
    return (
    <div className={`${leftNavOpen ? 'block' : 'hidden'}  lg:hidden
        bg-slate-800 w-full z-50  absolute inset-0 h-full 
        backdrop-blur-sm bg-opacity-75
        `}>
        <div className={`${theme === 'light'? 'bg-slate-100':'bg-slate-800'}
         lg:hidden  block  w-4/5  p-4  sm:w-1/3
        left-0   top-0 h-screen fixed   flex-shrink-0 `}>
            <button
                    className="
                    absolute top-2  right-2 text-xl font-semibold
                     w-8 h-8 flex items-center justify-center hover:text-slate-600"
                    onClick={()=>handleLeftNavChange()}
                    >X</button>
            <div 
            className={`
            absolute p-8 flex flex-col text-gray-400
            overflow-y-auto gap-4
            ${theme === 'light'? '':'text-stone-300'}
            `}>
                
                <h4 
                    className={`text-black
                    ${theme === 'light'? '':'text-stone-100'}
                    `}>
                    Getting Started
                </h4>
                
                <Link 
                    className={`${pathname === "/docs" ? 'text-black' : '' }
                    ${pathname === '/docs' && (theme === 'dark' || theme==='system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs">
                    <button
                    onClick={()=>handleLeftNavChange()}
                    >
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
                    className={`${pathname === "/docs/components/accordion" ? 'text-black' : '' }
                    ${pathname === "/docs/components/accordion"
                    && 
                    (theme === 'dark' || theme==='system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/accordion">
                    <button
                    onClick={()=>handleLeftNavChange()}
                    >
                        Accordion
                    </button>
                </Link>
               
                <Link  
                    className={`${pathname === "/docs/components/carousel" ? 'text-black' : '' }
                    ${pathname === "/docs/components/carousel"
                        && 
                    (theme === 'dark' || theme==='system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/carousel">
                    <button
                    onClick={()=>handleLeftNavChange()}
                    >
                        Carousel
                    </button>
                </Link>

                <Link  
                    className={`${pathname === "/docs/components/toggle" ? 'text-black' : '' }
                    ${pathname === "/docs/components/toggle"
                    && 
                    (theme === 'dark' || theme==='system') ? 'text-sky-500' : ''}
                    `} 
                    href="/docs/components/toggle">
                    <button
                    onClick={()=>handleLeftNavChange()}
                    >
                        Toggle
                    </button>
                </Link>


            </div>
    
        </div>
    </div>
    )
}