'use client'
import { useEffect, useState } from "react"
export default function CookieAlert (){
    const [dismiss, setDismiss] = useState<Boolean>();

    /* const handleDismiss = ()=>{
        localStorage.setItem('cookie-dismiss', 'true')
    } */

    return(
        <div className={`sticky bottom-4 left-4  bg-white max-w-lg shadow-md dark:bg-slate-600 border dark:border-white rounded-md flex
        ${dismiss ? 'hidden' : ' '}
        `}>
            <div className="px-6 py-3 flex items-center">
                <div>
                    <h1 className=" text-5xl  font-medium
                    text-gray-800 dark:text-black mr-2">
                      🍪 
                    </h1>
                </div>
                <div className="flex flex-col items-end">
                    <p className=" text-gray-600 dark:text-slate-300">
                    We use cookies to remember your theme preference (dark/light mode). By continuing, you accept this use.                    </p>
                    <button className=" text-right hover:underline w-fit"
                    onClick={()=>setDismiss(true)}
                    >Got it!</button>
                </div>
               
            </div>
        </div>
    
    )
}