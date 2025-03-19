'use client'
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import CheckboxComponent from "./checkbox"
import { CodeBlock } from "@/app/components/code-block"

export default function CheckboxPage(){
    const code = `
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
    `;


    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="checkbox"/>
                    
            <h1 className="text-2xl mb-8">Checkbox</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <CheckboxComponent /> :  <CodeBlock  code={code} language="tsx" filename="checkbox.tsx"/>}
            </div>
            
            
        </div>
    )
}