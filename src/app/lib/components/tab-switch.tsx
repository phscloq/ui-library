'use client'
import { ThemeContext } from "@/app/contexts";
import { useContext } from "react";

interface TabSwitchProps{
    preview: boolean,
    setPreview: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TabSwitch({preview, setPreview}:TabSwitchProps){
const {theme} = useContext(ThemeContext);
    return(
    <div className="flex gap-4 text-slate-300 border-b border-slate-400 mb-2">
                    <button 
                    className={`
                    ${preview ? '  border-b-2 border-slate-300' : ' text-slate-400'}
                    ${theme === 'light' ? 'text-black border-slate-800':'text-slate-200'}
                    px-2 py-1  `}
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    className={`${!preview ? ' border-b-2 border-slate-300' : ' text-slate-400'}
                    ${theme === 'light' ? 'text-black border-slate-800':'text-slate-200'}
                    px-2 py-1 `}
                    onClick={()=>setPreview(false)}>Code</button>
    </div>
)
}