'use client'
import Button from "./components/button"
import CodePreview from "./components/code-preview"
import { useState } from "react"
import TabSwitch from "@/app/lib/components/tab-switch"
import Pathway from "@/app/lib/components/pathway"

export default function Carousel(){
const [preview, setPreview] = useState(true)
    return (
        <div className="">
          <Pathway page="button"/>
                    
            <h1 className="text-2xl mb-8">Button</h1>
             <div>
             <TabSwitch preview={preview} setPreview={setPreview} />

             {preview ? <Button /> :  <CodePreview />}
             </div>
        </div>
    )
}
