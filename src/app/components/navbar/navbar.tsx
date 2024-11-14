import Link from "next/link"
import ThemeToggle from "./theme-toggle";
import Logo from "../logo";
import MobileMenuTriggerThreeDots from "./mobile-menu-trigger";

type Props = {theme: string}
export default function Navbar({theme}:Props){
       
      
    return(
        <nav className={`bg-opacity-75 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3
          fixed top-0 z-30 w-full backdrop-blur  p-2  h-16 dark:border-slate-800
                border-b`}>
                <div className=
                {`dark:text-stone-100
                sm:flex   gap-14 text-gray-400 sm:items-center`}>
                           <div className="hidden sm:flex gap-14  items-center">
                                <Link href="/"
                                        className={`text-xl  tracking-wide text-black
                                        dark:text-stone-100`} >
                                        <h1 className="px-10" >Baran UI</h1>
                                </Link>
                                <Link href="/docs" 
                                        className="hover:text-slate-900 hover:font-medium ml-8">
                                        <button>Documentation</button>
                                </Link>
                                <Link href="/components" 
                                        className="hover:text-slate-900 hover:font-medium">
                                        <button>Components</button>
                                </Link>
                                <Link href="https://drive.google.com/file/d/17XuBeNfff9zWEsAXi4-mP7ilzwrYERwS/view?usp=sharing"
                                        target="_blank" 
                                        className="hover:text-slate-900 hover:font-medium">
                                        <button 
                                            className=" inline-block relative">
                                            Resume 
                                            <span className="absolute -top-1 -right-4 -rotate-45 text-sm ">{'->'}</span>
                                        </button>
                                </Link>
                                <Link href="https://github.com/phscloq/ui-library" 
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
                                        <MobileMenuTriggerThreeDots />
                                </div>
                                
                                
                </div>
            
        </nav>
    )
}