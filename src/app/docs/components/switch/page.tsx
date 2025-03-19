'use client'
import Pathway from "@/app/components/pathway"
import { useState } from "react"
import SwitchComponent from "./switch"
import TabSwitch from "@/app/components/tab-switch"
import { CodeBlock } from "@/app/components/code-block"

export default function Switch(){
const code = `<label
className="bg-slate-300 has-[:checked]:bg-black 
relative w-16 h-8 rounded-full
transition-all duration-200">   
    <input type="checkbox" id="holidaymode" 
    className="sr-only peer" />
    <span className="w-2/5  h-4/5  bg-slate-50 absolute
        rounded-full left-1 top-[3px] 
        peer-checked:left-[35px]
        transition-all duration-200">
    </span>
</label>`;
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
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <SwitchComponent /> :  <CodeBlock code={code} filename="switch.tsx" /> }
            </div>
            
            
        </div>
    )
}
