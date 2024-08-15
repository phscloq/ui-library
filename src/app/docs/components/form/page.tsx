'use client'
import Pathway from "@/app/lib/components/pathway"
import CodePreview from "./components/code-preview"
import { useState } from "react"
import FormComponent from "./components/form"
import TabSwitch from "@/app/lib/components/tab-switch"

export default function Switch(){
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="form"/>
                    
            <h1 className="text-2xl mb-8">Switch</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Form component is...</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <FormComponent /> :  <CodePreview />}
            </div>
            
            
        </div>
    )
}
