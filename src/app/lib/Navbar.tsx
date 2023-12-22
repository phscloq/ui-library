import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="flex  sticky top-0 z-40 w-full backdrop-blur bg-opacity-75 flex-none p-2  h-16 border-b">
                <div className="flex px-12  align-middle items-center gap-14 text-gray-400">
                           
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
                                <button className=" inline-block relative">Resume          <span className="absolute -top-1 -right-4 -rotate-45 text-sm ">{'->'}</span></button>
                            </Link>
                            <Link href="https://github.com/phscloq" 
                            target="_blank"
                                className="hover:text-slate-900 hover:font-medium">
                                <button>Github</button>
                            </Link>

                            
                    
                </div>
            
            
        </nav>
    )
}