import { MobileMenuContext, ThemeContext } from "@/app/contexts"
import { useContext } from "react"


export default function Hamburger(){
    const {handleLeftNavChange} = useContext(MobileMenuContext)
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme==='light'? '':'border-slate-800'}
        w-full  p-3 border-b sticky  top-16 backdrop-blur z-40 lg:hidden`} >
                                        <div className="pl-6 flex">
                                            <button
                                            onClick={()=>handleLeftNavChange()}
                                            >
                                                <svg
                                                    width={24} height={24}        
                                                    >
                                                            <path
                                                            d="M5 6h14M5 12h14M5 18h14"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            >
                                                            </path>
                                                    </svg>
                                            </button>
                                                
                                        </div>
                                        
                                </div>
    )
}