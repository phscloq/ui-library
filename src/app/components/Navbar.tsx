import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="flex  sticky bg-slate-300  p-2  z-50  h-16 ">
                <div className="flex px-12  align-middle items-center gap-14">
                            <Link className=" w-32 text-xl lined tracking-wide" href="/">
                                <h1 >Baran UI</h1>
                            </Link>
                            <Link href="/documentation" 
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