'use client'
import CodePreview from "@/app/lib/components/code-preview"
import Pathway from "@/app/lib/components/pathway"
import TabSwitch from "@/app/lib/components/tab-switch"
import { useState } from "react"
import CardComponent from "./card"

export default function CardPage(){
    const code = `
    <div className="bg-white  shadow-md dark:bg-slate-600 border dark:border-white rounded-md ">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2
                 text-gray-800 dark:text-black">
                    Title
                </h3>
                <p className=" text-gray-600 dark:text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sit amet lacus nec augue tincidunt ultricies. 
                    Nullam nec mi nec n
                </p>
            </div>
        </div>
    `;


    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="card"/>
                    
            <h1 className="text-2xl mb-8">Card</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <CardComponent /> :  <CodePreview>{code}</CodePreview>}
            </div>
            
            
        </div>
    )
}