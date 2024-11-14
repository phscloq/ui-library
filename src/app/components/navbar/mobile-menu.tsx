'use client'
import { useContext } from "react";
import { DialogComponent } from "./dialog";
import { MobileMenuContext, ThemeContext } from "@/app/contexts";
import Link from "next/link";

export function MobileMenu(){
  
    const {theme, handleThemeChange} = useContext(ThemeContext);
    const {onCloseMobileNavMenu} = useContext(MobileMenuContext);
    return(
                <DialogComponent>
                    <div className="flex flex-col ">
                        <ul className=" space-y-6">
                            <li className="hover:text-slate-900 hover:font-medium">
                                <Link href="/docs" >
                                    <button
                                    onClick={onCloseMobileNavMenu}
                                    >Documentation</button>
                                </Link>
                            </li>
                            <li className="hover:text-slate-900 hover:font-medium">
                                <Link href="/components" >
                                    <button
                                    onClick={onCloseMobileNavMenu}
                                    >Components</button>
                                </Link>
                            </li>
                            <li className="hover:text-slate-900 hover:font-medium">
                                <Link href="https://drive.google.com/file/d/1Gx0W3dOvNnNdN8SYTSm6mJ4W3NaNjtxc/view?usp=sharing"
                                target="_blank" >
                                    <button
                                    onClick={onCloseMobileNavMenu}
                                    className=" inline-block relative">Resume  <span className="absolute -top-1 -right-4 -rotate-45 text-sm ">{'->'}</span></button>
                                </Link>
                            </li>
                            <li className="hover:text-slate-900 hover:font-medium">
                            <Link href="https://github.com/phscloq" 
                            target="_blank"
                                className="hover:text-slate-900 hover:font-medium">
                                <button
                                onClick={onCloseMobileNavMenu}
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
                </DialogComponent>
    )
}