'use client'

import { useState } from "react"

export default function CheckboxComponent(){
    const [checked, setChecked] = useState(false)
    return(
        <div className="w-full bg-slate-400 h-[400px] flex gap-2 justify-center items-center
        rounded-md
       ">
            <label className="relative inline-flex items-center cursor-pointer" 
            onClick={(e)=>e.stopPropagation()}>
                <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={()=>setChecked(!checked)}
                />
                <div className="w-6 h-6 border-2 border-gray-300 rounded-md
                peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center
                justify-center">
                    {checked && 
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>}
                </div>
            </label>
            <p className={`${checked ? 'font-semibold' : ''}`}>I love myself</p>
        </div>
    )

}