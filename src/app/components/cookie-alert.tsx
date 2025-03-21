'use client'
import { useEffect, useState } from "react"
import { dismissCookieWarning } from "../utils/cookies";
export default function CookieAlert (){
    const [dismiss, setDismiss] = useState<Boolean>();

    useEffect(() => {
        const isDismissed = document.cookie.includes('cookieWarningDismissed=true');
        if (isDismissed) {
            setDismiss(true);
        }
    }, []);
    
    // Save dismissal state to cookies when the user clicks "Got it!"
    const handleDismiss = async () => {
    setDismiss(true);
    await dismissCookieWarning();
    };

    return(
        <div className={`fixed bottom-4 left-4  px-4 max-w-lg  flex
        ${dismiss ? 'hidden' : ' '}
        `}>
            <div className="px-6 py-3 bg-white flex items-center  shadow-md dark:bg-slate-600 border dark:border-slate-700 rounded-md">
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
                            onClick={handleDismiss}
                        >
                            Got it!
                        </button>
                    </p>
                </div>
            </div>
        </div>
    
    )
}