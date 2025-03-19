'use client'
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import ProgressBarComponent from "./progress-bar"
import { CodeBlock } from "@/app/components/code-block"

export default function ProgressBarPage(){
    const code = `
  export default function ProgressBarComponent({progress_score, classNames=''}:{ progress_score:number, classNames?:string}){
    return (
             //Don't forget to add the special characters to escape the curly braces
            <div className={w-96 rounded-full bg-gray-200 dark:bg-slate-700 h-3 classNames}>
                <div
                    className='bg-orange-600    h-3 rounded-full'
                //Don't forget to add the special characters to escape the curly braces
                style={{width: progress_score * 100}%}}
                >
                </div>
            </div>
    )
}
    `;
    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="progressbar"/>
                    
            <h1 className="text-2xl mb-8">Progressbar</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <ProgressBarComponent progress_score={0.8} /> :  <CodeBlock code={code} language="tsx" filename="progress-bar.tsx"/>}
            </div>
            
            
        </div>
    )
}