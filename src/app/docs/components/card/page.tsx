'use client'
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import CardComponent from "./card"
import Features from "@/app/components/features"
import { CodeBlock } from "@/app/components/code-block"

export default function CardPage(){
    const code = `
<div className="bg-white  shadow-md dark:bg-slate-600 border dark:border-white rounded-md ">
    <div className="p-6">
        <h3 className="text-xl font-semibold mb-2
            text-gray-800 dark:text-black">
            Title
        </h3>
        <p className=" text-gray-600 dark:text-stone-300 max-h-40  line-clamp-4">
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
                <p>The Card component is a versatile and user-friendly UI element designed to display grouped content in a visually appealing and structured format. It is commonly used for presenting information like user profiles, product details, or any data block that needs emphasis.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <CardComponent /> :  <CodeBlock code={code} language="tsx" filename="card.tsx"/>}
            </div>
            
            
            
        </div>
    )
}