'use client'
import { useEffect, useState } from "react"
export default function CookieAlert (){
    const [dismiss, setDismiss] = useState<Boolean>();

    /* const handleDismiss = ()=>{
        localStorage.setItem('cookie-dismiss', 'true')
    } */

    return(
        <div className={`fixed bottom-4 left-4  px-4 max-w-lg  flex
        ${dismiss ? 'hidden' : ' '}
        `}>
            <div className="px-6 py-3 bg-white flex items-center  shadow-md dark:bg-slate-600 border dark:border-white rounded-md">
                <div>
                    <h1 className=" text-3xl sm:text-5xl  font-medium
                    text-gray-800 dark:text-black mr-2">
                      🍪 
                    </h1>
                </div>
                <div className="flex flex-col ">
                    <p className=" text-xs sm:text-base text-gray-600 dark:text-slate-300">
                    We use cookies to remember your theme preference (dark/light mode). By continuing, you accept this use.
                    <button className="underline text-black   hover:font-medum sm:text-base sm:ml-2 w-fit text-xs"
                    onClick={()=>setDismiss(true)}
                    >Got it!</button></p>
                    
                </div>
               
            </div>
        </div>
    
    )
}