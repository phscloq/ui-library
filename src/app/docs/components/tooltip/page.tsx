'use client'
import Pathway from "@/app/components/pathway"
import { useState } from "react"
import TabSwitch from "@/app/components/tab-switch"
import CodePreview from "@/app/components/code-preview"
import TooltipComponent from "./tooltip"
export default function Tooltip(){
const code = `<div className="relative inline-block">
            {children}
            <div className="hidden bg-black text-white text-xs rounded-md p-1 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full">
                {text}
            </div>
        </div>`;
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="tooltip"/>
                    
            <h1 className="text-2xl mb-8">Tooltip</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <TooltipComponent text="Tooltip">
                    <button>Hover over me</button>
                </TooltipComponent>:  <CodePreview>{code}</CodePreview>}
            </div>
            
            
        </div>
    )
}
