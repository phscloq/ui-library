'use client'
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import AlertComponent from "./alert"
import { CodeBlock } from "@/app/components/code-block"

export default function AlertPage(){
    const code = `
    // Alert Component Model 1
     <div className="bg-white max-w-lg h-20 shadow-md dark:bg-slate-600 border dark:border-white rounded-md ">
        <div className="px-6 py-3">
            <div>
                <h1 className="text-lg font-semibold 
                text-gray-800 dark:text-black">
                    Great Job!
                </h1>
            </div>
            <div>
                <p className=" text-gray-600 dark:text-slate-300">
                    You've successfully completed the task.
                </p>
            </div>
            
        </div>
    </div>
    // Alert Component Model 2
    // no specific height and added flex to the parent div
    <div className="bg-white max-w-lg shadow-md dark:bg-slate-600 border dark:border-white rounded-md flex">
        <div className="px-6 py-3 flex items-center">
            <div>
                <h1 className="text-lg  font-medium
                text-gray-800 dark:text-black mr-2">
                    +1
                </h1>
            </div>
            <div>
                <p className=" text-gray-600 dark:text-slate-300">
                    You've gained 1 point.
                </p>
            </div>
            
        </div>
    </div>
    `;
    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="alert"/>
                    
            <h1 className="text-2xl mb-8">Alert</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <AlertComponent /> :  <CodeBlock code={code} language="tsx" filename="alert.tsx"/>}
            </div>
            
            
        </div>
    )
}