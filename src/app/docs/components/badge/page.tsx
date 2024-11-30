'use client'
import CodePreview from "@/app/components/code-preview"
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import Badge from "./badge"

export default function BadgePage(){
    const code = `
    <span className="inline-block border dark:border-slate-800  dark:bg-slate-700 text-gray-800 dark:text-white text-xs 
        font-semibold rounded-full px-2 py-1 capitalize tracking-wide">
            {children}
        </span>
    `;


    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="badge"/>
                    
            <h1 className="text-2xl mb-8">Badge</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <Badge>Badge</Badge>:  <CodePreview>{code}</CodePreview>}
            </div>
            
            
        </div>
    )
}