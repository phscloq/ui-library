'use client'
import Pathway from "@/app/lib/components/Pathway"
import CodePreview from "./components/CodePreview"
import { useState } from "react"
import SwitchComponent from "./components/switch"

export default function Switch(){
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="switch"/>
                    
            <h1 className="text-2xl mb-8">Switch</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <div className="flex gap-4 text-slate-300 border-b border-slate-400 mb-2">
                    <button 
                    className={`${preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    className={`${!preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(false)}>Code</button>
                </div>
                
                {preview ? <SwitchComponent /> :  <CodePreview />}
            </div>
            
            
        </div>
    )
}
