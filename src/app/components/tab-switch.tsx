'use client'
import { useEffect, useRef, useState } from "react";
interface TabSwitchProps{
    preview: boolean,
    setPreview: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TabSwitch({preview, setPreview}:TabSwitchProps){
    const [backgroundStyle, setbackgroundStyle] = useState({
        transform: `translateX(8px)`,
        width: 76,
        opacity: 1
     });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(()=>{
        const activeTabElement = tabRefs.current[preview ? 0 : 1];
        if(activeTabElement){
            const {offsetLeft, offsetWidth} = activeTabElement;
            setbackgroundStyle({
                transform: `translateX(${offsetLeft}px)`,
                width: offsetWidth,
                opacity: 1
            })
        }
    },[preview])

    return(
    <div className="flex gap-4 text-slate-300 bg-slate-600   rounded-t-md relative ">
        <div className=" p-2 z-10 flex gap-4">
                    <button 
                    ref={el=>tabRefs.current[0] = el}
                    className={`
                    ${preview ? ' text-white dark:text-white' : ' text-slate-400 dark:text-slate-400'}
                        transition-all  duration-200 ease-linear z-10
                    
                    px-2 py-1  `}
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    ref={el=>tabRefs.current[1] = el}
                    className={`${!preview ? 'text-white dark:text-white' : ' text-slate-400 dark:text-slate-400'}
                       dark:text-slate-200 transition-all duration-200 ease-linear z-10
                    px-2 py-1 `}
                    onClick={()=>setPreview(false)}>Code</button>
        </div>
        <div
          className="absolute bottom-0 left-0    h-10 mb-2  bg-slate-500 transition-all duration-300 ease-out rounded-md"
          style={backgroundStyle}
        />
    </div>
)
}